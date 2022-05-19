import { createContext, useContext, useState } from "react";
import { getBookMark } from "../ApiCalls";
import { useEffect } from "react";

const BookMarkContext = createContext(null);

const useBookMarkList = () => useContext(BookMarkContext);

const BookMarkProvider = ({ children }) => {
  const [bookMarkList, setBookMarkList] = useState([]);
  // useEffect(async () => {
  //   const data = await getBookMark();
  //   setBookMarkList(data);
  // }, []);
  // console.log(bookMarkList);
  return (
    <BookMarkContext.Provider value={{ bookMarkList, setBookMarkList }}>
      {children}
    </BookMarkContext.Provider>
  );
};

export { useBookMarkList, BookMarkProvider };
