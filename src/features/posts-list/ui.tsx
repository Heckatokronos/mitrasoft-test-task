import { Button, Card, Col, Image, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { postsRequested, watchPostsSaga } from "../../entities/posts";
import { PaginationComponent } from "../../widgets";
import { Link } from "react-router-dom";
import avatar from "../../shared/images/sticker.jpg";

export const PostsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const { posts, status, error } = useSelector(
    (state: RootState) => state.posts
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const dispatch = useDispatch();

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
      {currentPosts.map((post) => (
        <Card className="p-2 mb-4" key={post.id}>
          <Card.Body>
            <Row>
              <Col xs={2}>
                <Link to={`/profle/${post.userId}`}>
                  <Image
                    src={avatar}
                    style={{ width: "50px", height: "50px" }}
                    roundedCircle
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Card.Title>{post.title}</Card.Title>
              </Col>
            </Row>
            <Card.Text>{post.body}</Card.Text>
            <Link to={`/post/${post.id}`}>
              <Button type="button">Читать</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
};
