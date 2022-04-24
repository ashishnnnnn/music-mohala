import axios from "axios";

export const getAllPost = async (setPosts) => {
  try {
    const response = await axios({
      method: "GET",
      url: "/api/posts",
    });
    setPosts(response.data.posts);
  } catch (e) {
    console.log(e);
  }
};
