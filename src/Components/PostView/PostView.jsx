export const PostView = ({ post }) => {
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
        <button className="flex gap-2 items-center">
          <i class="far fa-comment-alt"></i>
          <p>0</p>
        </button>
        <button className="flex gap-2 items-center">
          <i class="far fa-heart"></i>
          <p>0</p>
        </button>
        <button className="flex gap-2 items-center">
          <i class="far fa-bookmark"></i>
          <p>0</p>
        </button>
      </div>
    </div>
  );
};
