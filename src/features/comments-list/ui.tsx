import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Comment,
  commentsRequested,
  watchFetchComments,
} from "../../entities/comments";
import { RootState } from "../../app/store";
import { ListGroup, Spinner } from "react-bootstrap";

export const CommentsList: React.FC = () => {
  const dispatch = useDispatch();
  const { comments, status, error } = useSelector(
    (state: RootState) => state.comments
  );

  useEffect(() => {
    dispatch(commentsRequested());
  }, [dispatch]);

  useEffect(() => {
    dispatch(watchFetchComments() as any);
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className="centered">
        <Spinner animation="border" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <ListGroup>
      {comments.map((comment: Comment) => (
        <ListGroup.Item key={comment.id}>
          <h5>{comment.email}</h5>
          <p>{comment.body}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
