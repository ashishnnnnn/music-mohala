import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import { validateInput } from "../../Utils/validateInput";
import { userSignUp } from "../../ApiCalls";

export const Signup = () => {
  let navigate = useNavigate();
  const { auth_state, setAuthState } = useAuthContext();
  const { user } = auth_state;
  const { username, name, email, password, confirmPassword } = user;
  const { handleaddtoast } = useToast();
  const signupHandle = async () => {
    let validate_result = validateInput(email, password, confirmPassword, name);
    if (validate_result === "OK") {
      let signup_credential = {
        username,
        email,
        password,
        confirmPassword,
        name,
      };
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
      className="bg-slate-900	max-w-md 	mx-auto mt-20 flex flex-col	justify-center	items-center gap-3 p-4"
    >
      <div className="flex flex-col	justify-center	items-center">
        <span className="text-5xl	font-extrabold	">Music</span>
        <span className="text-2xl	font-semibold	">Mohala</span>
      </div>
      <div className="text-3xl	font-semibold">Signup To Music Mohala</div>
      <input
        onChange={(e) => {
          setAuthState({ type: "NAME", payload: e.target.value });
        }}
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setAuthState({ type: "USERNAME", payload: e.target.value });
        }}
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
        placeholder="Username"
      />
      <input
        onChange={(e) => {
          setAuthState({ type: "EMAIL", payload: e.target.value });
        }}
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
        placeholder="Email"
      />

      <input
        onChange={(e) => {
          setAuthState({ type: "PASSWORD", payload: e.target.value });
        }}
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
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
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent"
        placeholder="Confirm-Password"
        type="password"
      />
      <button
        type="submit"
        className="w-10/12	h-14  bg-slate-100 text-slate-900	rounded-xl text-2xl	font-semibold	"
        onClick={(e) => {
          e.preventDefault();
          signupHandle();
        }}
      >
        Signup
      </button>

      <button
        onClick={() => {
          navigate("/login");
        }}
        className="w-10/12	h-12 border-2	border-slate-100	rounded-xl text-lg"
      >
        Already Have An Account..
      </button>
    </form>
  );
};
