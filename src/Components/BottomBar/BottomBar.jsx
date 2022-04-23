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

export const BottomBar = () => {
  const location = useLocation().pathname;
  return (
    <div className="border-2 md:hidden flex bg-slate-900		 p-4 gap-3  w-10/11	 rounded-3xl h-24	fixed	bottom-1 right-3 left-3 justify-around	">
      {sideOption.map((ele) => (
        <div
          key={ele.name}
          className={` ${
            ele.name === pages_name[location] ? "bg-slate-700/60" : ""
          } cursor-pointer flex p-4 text-2xl gap-4 items-center	 rounded-3xl hover:bg-slate-700/60`}
        >
          <i className={`${ele.icon_class}`}></i>
        </div>
      ))}
      <div className="cursor-pointer flex p-4 text-2xl gap-4	items-center rounded-3xl	hover:bg-slate-700/60">
        <i className="fas fa-sign-out-alt"></i>
      </div>
    </div>
  );
};
