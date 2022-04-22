import "./SideBar.css";
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
  console.log(location);
  return (
    <div className="side-bar pad-1 flex-column gap-1">
      <div className="site-logo flex-center-column">
        <span className="fnt-2-5 fnt-w-600">Music</span>
        <span className="fnt-1-5 fnt-w-500">Mohala</span>
      </div>
      {sideOption.map((ele) => (
        <div
          key={ele.name}
          className={`side-option flex fnt-1-5 gap-0-5 ali-ce cursor-pointer ${
            ele.name === pages_name[location] ? "active" : ""
          }`}
        >
          <i className={`${ele.icon_class}`}></i>
          <div className="fnt-1-2 fnt-w-600 let-spec-1">{ele.name}</div>
        </div>
      ))}
      <div className="side-option flex fnt-1-5 gap-0-5 ali-ce cursor-pointer">
        <i className="fas fa-sign-out-alt"></i>
        <div className="fnt-1-2 fnt-w-600 let-spec-1">Sign-Out</div>
      </div>
    </div>
  );
};
