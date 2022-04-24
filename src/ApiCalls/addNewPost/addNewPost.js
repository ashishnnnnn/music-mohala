import axios from "axios";

export const addNewPost = async (post, setPosts, handleaddtoast) => {
  const loginToken = localStorage.getItem("token");
  console.log(post);
  try {
    const response = await axios({
      method: "POST",
      url: "/api/posts",
      data: { postData: post },
      headers: {
        authorization: loginToken,
      },
    });
    setPosts(response.data.posts);
    handleaddtoast({
      message: "Post Added Successfully",
      type: "alert-success",
    });
  } catch (e) {}
};
