import { createContext, useContext, useReducer, useState } from "react";

const CommentContext = createContext(null);

const useComments = () => useContext(CommentContext);

const initialComments = [];

const CommentProvider = ({ children }) => {
  const [commentArray, setCommentArray] = useState(initialComments);
  return (
    <CommentContext.Provider value={[commentArray, setCommentArray]}>
      {children}
    </CommentContext.Provider>
  );
};

export { useComments, CommentProvider };
