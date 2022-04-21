import { AuthProvider } from "../AuthContext";

import { ToastProvider } from "../ToastContext";

export const ClusteredContext = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};
