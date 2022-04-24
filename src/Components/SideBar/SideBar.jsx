import { useLocation } from "react-router-dom";

const pages_name = {
  ["/"]: "Home",
  ["/explore"]: "Explore",
  ["/bookmark"]: "Bookmark",
  ["/watch-later"]: "Watch-Later",
  ["/liked"]: "Liked",
  ["/playlist"]: "Playlist",
};

const sideOption = [
  {
    name: "Home",
    icon_class: "fas fa-home",
  },
  {
    name: "Explore",
    icon_class: "fas fa-hashtag",
  },
  {
    name: "Bookmark",
    icon_class: "far fa-bookmark",
  },
  {
    name: "Profile",
    icon_class: "far fa-user",
  },
];

export const SideBar = () => {
  const location = useLocation().pathname;
  return (
    <div className="mt-6 hidden md:flex flex-col	bg-slate-700/60	 p-6 gap-3  w-80	h-[calc(100vh-3rem)] rounded-3xl">
      <div className="flex flex-col	justify-center	items-center">
        <span className="text-4xl	font-extrabold	">Music</span>
        <span className="text-xl	font-semibold	">Mohala</span>
      </div>
      {sideOption.map((ele) => (
        <div
          key={ele.name}
          className={` ${
            ele.name === pages_name[location] ? "bg-slate-900" : ""
          } cursor-pointer flex p-4 text-2xl gap-4 items-center	 rounded-3xl hover:bg-slate-900/80`}
        >
          <i className={`${ele.icon_class}`}></i>
          <div className="text-xl	font-semibold	">{ele.name}</div>
        </div>
      ))}
      <div className="cursor-pointer flex p-4 text-2xl gap-4	items-center rounded-3xl	hover:bg-slate-900/80">
        <i className="fas fa-sign-out-alt"></i>
        <div className="text-xl	font-semibold	">Sign-Out</div>
      </div>
    </div>
  );
};
