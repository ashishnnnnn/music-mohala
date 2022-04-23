// import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { SideBar, PostView, BottomBar } from "../../Components";
import { getAllPost, addNewPost } from "../../ApiCalls";
import { useToast } from "../../Context/ToastContext";

export const Home = () => {
  let navigate = useNavigate();
  const { auth_state } = useAuthContext();
  const { token } = auth_state;
  const [posts, setPosts] = useState([]);
  const [currPostValue, setCurrPostValue] = useState("");
  const { handleaddtoast } = useToast();
  console.log(posts);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    getAllPost(setPosts);
  }, []);
  return (
    <div className="pt-1 pl-6 pr-6 flex gap-3 ">
      <SideBar />
      <div className="w-screen  md:w-[calc(100vw-20rem)] pt-4 pl-6 border-t mt-2 mb-3 overflow-y-auto	h-[calc(100vh-2rem)] no-scrollbar">
        <div className="w-full border-2 mt-4 h-44 border-gray-500	rounded-3xl p-3 relative">
          <textarea
            value={currPostValue}
            placeholder="What's Happening... "
            className="bg-slate-900 text-slate-50 w-full p-2 h-24 rounded-3xl"
            onChange={(e) => {
              setCurrPostValue(e.target.value);
            }}
          ></textarea>
          <button
            disabled={currPostValue.length === 0}
            className="bg-sky-600	w-16	h-10	text-slate-50	rounded-xl absolute	right-2.5	bottom-2.5 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={() => {
              addNewPost(currPostValue, setPosts, handleaddtoast);
              setCurrPostValue("");
            }}
          >
            Post
          </button>
        </div>
        {posts.map((post) => (
          <PostView key={post._id} post={post} />
        ))}
      </div>
      <BottomBar />
    </div>
  );
};
