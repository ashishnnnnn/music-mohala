import { useEffect } from "react";
import "./Toast.css";
export const Toast = ({ message, type, handleclosetoast }) => {
  useEffect(() => {
    const time_to_show_toast = setTimeout(() => {
      handleclosetoast();
    }, 2000);
    return () => {
      clearTimeout(time_to_show_toast);
    };
  });
  return (
    <div className={`alert ${type}`}>
      <p className=" flex-center-row pad-0-5 alert-text">{message}</p>
      <div onClick={handleclosetoast} className="alert-cross fnt-2">
        &times;
      </div>
    </div>
  );
};
