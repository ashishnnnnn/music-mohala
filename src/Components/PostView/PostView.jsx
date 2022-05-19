import { useEffect, useState } from "react";
import {
  likePost,
  unLikePost,
  addBookMark,
  removeBookMark,
} from "../../ApiCalls";
import { useBookMarkList } from "../../Context/BookMarkContext";
import { likeHandler } from "../../Utils/likeHandler";
import { getPostComments } from "../../ApiCalls/getPostComments/getPostComments";
// import { useComments } from "../../Context/CommentContext";

export const PostView = ({ post, setPosts, handleaddtoast }) => {
  console.log(post);
  const [viewComment, setViewComment] = useState(false);
  const [commentArray, setCommentArray] = useState([]);
  const { bookMarkList, setBookMarkList } = useBookMarkList();
  useEffect(() => {
    (async () => {
      getPostComments({ post_id: post._id });
    })();
  }, []);
  return (
    <div className="w-full border-2 mt-6  bg-slate-700/30 border-gray-500	rounded-3xl p-4">
      <div className="flex gap-4 mb-3">
        <div className="bg-slate-700/100 h-14 w-14 flex justify-center items-center	text-2xl rounded-xl font-medium shrink-0 grow-0	">
          {post?.name ? post.name[0] : "A"}
        </div>
        <div className="flex flex-col	justify-center	items-center">
          <span className="text-xl	font-extrabold	">{post?.name}</span>
          <span className="text-sm	font-semibold	text-slate-400	">
            @{post?.username}
          </span>
        </div>
      </div>
      <div className="text-base mb-3">{post?.content}</div>
      <div className="flex justify-around	text-slate-300">
        <button
          onClick={() => {
            setViewComment((pre_state) => !pre_state);
          }}
          className="flex gap-2 items-center"
        >
          <i className="far fa-comment-alt"></i>
          <p>{commentArray.length}</p>
        </button>
        <button
          onClick={async () => {
            likeHandler({ post, setPosts, handleaddtoast });
          }}
          className="flex gap-2 items-center"
        >
          <i className="far fa-heart"></i>
          <p>{post.likes.likeCount}</p>
        </button>
        {bookMarkList.some((bookMarkPost) => bookMarkPost._id === post._id) ? (
          <button
            onClick={() => {
              removeBookMark(post?._id, setBookMarkList, handleaddtoast);
            }}
            className="flex gap-2 items-center"
          >
            <i className="fas fa-bookmark"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              addBookMark(post?._id, setBookMarkList, handleaddtoast);
            }}
            className="flex gap-2 items-center"
          >
            <i className="far fa-bookmark"></i>
          </button>
        )}
      </div>
      {viewComment && (
        <div>
          <div className="w-full border-2 mt-4 h-44 border-gray-500	rounded-3xl p-3 relative">
            <textarea
              placeholder="Write Your comment .."
              className="bg-slate-900 text-slate-50 w-full p-2 h-24 rounded-3xl"
            ></textarea>
            <button
              disabled={true}
              className="bg-sky-600	w-16	h-10	text-slate-50	rounded-xl absolute	right-2.5	bottom-2.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Post
            </button>
          </div>
          <div className="w-full border-2 mt-6  bg-slate-700/30 border-gray-500	rounded-3xl p-4">
            Hello
          </div>
        </div>
      )}
    </div>
  );
};
