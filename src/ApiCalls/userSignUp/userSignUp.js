import axios from "axios";

export const userSignUp = async (
  singup_credential,
  handleaddtoast,
  setAuthState
) => {
  try {
    const response = await axios.post(`/api/auth/signup`, singup_credential);
    localStorage.setItem("token", response.data.encodedToken);
    handleaddtoast({
      message: `Welcome ${response.data.createdUser.name}`,
      type: "alert-success",
    });
    setAuthState({ type: "TOKEN", payload: response.data.encodedToken });
  } catch (e) {
    handleaddtoast({
      message: "Enter valid email and password",
      type: "alert-dang",
    });
  }
};
