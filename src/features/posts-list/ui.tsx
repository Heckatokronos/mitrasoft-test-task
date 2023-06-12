import { Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect } from "react";
import { postsRequested, watchPostsSaga } from "../../entities/posts";

export const PostsList: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(postsRequested());
  }, [dispatch]);

  useEffect(() => {
    dispatch(watchPostsSaga() as any);
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="centered">
        <Spinner />
      </div>
    );
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <Card className="p-2 mb-4" key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
