import { Home, Login, Signup } from "../Pages";
import { Routes, Route } from "react-router-dom";

export const WebSiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
