// import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { SideBar } from "../../Components";

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
    <div className="main-body pad-1">
      <SideBar />
      <div className="side-body pad-1">
        <div className=""></div>
      </div>
    </div>
  );
};
