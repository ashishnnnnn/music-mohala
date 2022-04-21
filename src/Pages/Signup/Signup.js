import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import { validateInput } from "../../Utils/validateInput";
import { userSignUp } from "../../ApiCalls";

export const Signup = () => {
  let navigate = useNavigate();
  const { auth_state, setAuthState } = useAuthContext();
  const { user } = auth_state;
  const { name, email, password, confirmPassword } = user;
  const { handleaddtoast } = useToast();
  const signupHandle = async () => {
    let validate_result = validateInput(email, password, confirmPassword, name);
    if (validate_result === "OK") {
      let signup_credential = { email, password, confirmPassword, name };
      await userSignUp(signup_credential, handleaddtoast, setAuthState);
      navigate("/");
    } else {
      handleaddtoast({
        message: validate_result,
        type: "alert-dang",
      });
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signupHandle();
      }}
      className="signup-container flex-column gap-0-5 pad-1"
    >
      <div className="site-logo flex-center-column">
        <span className="fnt-3 fnt-w-600">Music</span>
        <span className="fnt-1-5 fnt-w-500">Mohala</span>
      </div>
      <div className="fnt-1-5 fnt-w-800 mar-t-1 mar-b-0-5 let-spec-2 flex-center-column">
        Signup To Music Mohala
      </div>
      <input
        onChange={(e) => {
          setAuthState({ type: "NAME", payload: e.target.value });
        }}
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setAuthState({ type: "EMAIL", payload: e.target.value });
        }}
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setAuthState({ type: "PASSWORD", payload: e.target.value });
        }}
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Password"
        type="password"
      />
      <input
        onChange={(e) => {
          setAuthState({
            type: "CONFIRM_PASSWORD",
            payload: e.target.value,
          });
        }}
        className="credential-input pad-0-5 fnt-1-2"
        placeholder="Confirm-Password"
        type="password"
      />
      <button
        type="submit"
        className="credential-btn btn btn-primary flex-center-column pad-0-5 cursor-pointer fnt-1-2 fnt-w-800"
        onClick={(e) => {
          e.preventDefault();
          signupHandle();
        }}
      >
        Signup
      </button>

      <div
        onClick={() => {
          navigate("/login");
        }}
        className="cursor-pointer flex-center-column fnt-1-2 fnt-w-800 mar-t-1 let-spec-1"
      >
        Already Have An Account..
      </div>
    </form>
  );
};
