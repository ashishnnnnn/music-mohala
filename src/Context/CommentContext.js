import { createContext, useContext, useReducer } from "react";
import { CommentsReducer } from "../Reducer/CommentsReducer";

const CommentContext = createContext(null);

const useComments = () => useContext(CommentContext);

const initialComments = {};

const CommentProvider = ({ children }) => {
  const [commentsData, setCommentData] = useReducer(
    CommentsReducer,
    initialComments
  );
  return (
    <CommentContext.Provider value={{ commentsData, setCommentData }}>
      {children}
    </CommentContext.Provider>
  );
};

export { useComments, CommentProvider };
