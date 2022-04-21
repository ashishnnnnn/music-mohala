// import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

export const Home = () => {
  let navigate = useNavigate();
  const { auth_state } = useAuthContext();
  const { token } = auth_state;
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <h1 className="mar-t-1" style={{ width: "400px" }}>
        Home Page Yet to Build
      </h1>
    </div>
  );
};
