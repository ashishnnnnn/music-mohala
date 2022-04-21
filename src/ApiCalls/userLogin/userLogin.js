import axios from "axios";

export const userLogin = async (
  login_credential,
  handleaddtoast,
  setAuthState
) => {
  try {
    const response = await axios.post(`/api/auth/login`, login_credential);
    localStorage.setItem("token", response.data.encodedToken);
    setAuthState({ type: "TOKEN", payload: response.data.encodedToken });
    setAuthState({
      type: "NAME",
      payload: response.data.foundUser.name,
    });
    handleaddtoast({
      message: `Welcome ${response.data.foundUser.name}`,
      type: "alert-success",
    });
  } catch (e) {
    handleaddtoast({
      message: "Enter valid email and password",
      type: "alert-dang",
    });
  }
};
