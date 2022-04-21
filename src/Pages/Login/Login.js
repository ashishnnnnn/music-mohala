import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import { userLogin } from "../../ApiCalls";

export const Login = () => {
  let navigate = useNavigate();
  const { auth_state, setAuthState } = useAuthContext();
  const { user } = auth_state;
  const { email, password } = user;
  const { handleaddtoast } = useToast();
  const loginHandle = async (guest_login) => {
    let input_email = "";
    let input_password = "";
    if (guest_login) {
      input_email = "ashish@gmail.com";
      input_password = "ashishkumar";
    } else {
      input_email = email;
      input_password = password;
    }
    let login_credentail = { email: input_email, password: input_password };
    await userLogin(login_credentail, handleaddtoast, setAuthState);
    navigate("/");
  };
  return (
    <form
      className="login-container flex-column gap-0-5 pad-1"
      onSubmit={(e) => {
        e.preventDefault();
        loginHandle(false);
      }}
    >
      <div className="site-logo flex-center-column">
        <span className="fnt-3 fnt-w-600">Music</span>
        <span className="fnt-1-5 fnt-w-500">Mohala</span>
      </div>
      <div className="fnt-1-5 fnt-w-800 mar-t-1 mar-b-0-5 let-spec-2 flex-center-column">
        Login To Music Mohala
      </div>
      <input
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Email"
        onChange={(e) => {
          setAuthState({ type: "EMAIL", payload: e.target.value });
        }}
      />
      <input
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Password"
        onChange={(e) => {
          setAuthState({ type: "PASSWORD", payload: e.target.value });
        }}
      />
      <button
        type="submit"
        className="credential-btn btn btn-primary flex-center-column pad-0-5 cursor-pointer fnt-1-2 fnt-w-800"
        onClick={(e) => {
          e.preventDefault();
          loginHandle(false);
        }}
      >
        Log In
      </button>
      <button
        className="btn btn-secondary flex-center-column pad-0-5 cursor-pointer fnt-1-2 fnt-w-800 mar-t-0-5"
        onClick={(e) => {
          e.preventDefault();
          loginHandle(true);
        }}
      >
        Login With Test Credential
      </button>
      <div
        onClick={() => {
          navigate("/signup");
        }}
        className="cursor-pointer flex-center-column fnt-1-2 fnt-w-800 mar-t-1 let-spec-1"
      >
        Dont't Have An Account ? Sign Up..
      </div>
    </form>
  );
};
