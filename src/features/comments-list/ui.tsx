import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Comment,
  commentsRequested,
  watchFetchComments,
} from "../../entities/comments";
import { RootState } from "../../app/store";

export const CommentsList = () => {
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
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  );
};
