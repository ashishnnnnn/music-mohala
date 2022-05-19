import { AuthProvider } from "../AuthContext";

import { ToastProvider } from "../ToastContext";

import { BookMarkProvider } from "../BookMarkContext";
import { CommentProvider } from "../CommentContext";

export const ClusteredContext = ({ children }) => {
  return (
    <AuthProvider>
      <BookMarkProvider>
        <ToastProvider>
          <CommentProvider>{children}</CommentProvider>
        </ToastProvider>
      </BookMarkProvider>
    </AuthProvider>
  );
};
