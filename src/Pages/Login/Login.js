import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useToast } from "../../Context/ToastContext";
import { userLogin } from "../../ApiCalls";

export const Login = () => {
  let navigate = useNavigate();
  const { auth_state, setAuthState } = useAuthContext();
  const { user } = auth_state;
  const { username, password } = user;
  const { handleaddtoast } = useToast();
  const loginHandle = async (guest_login) => {
    let input_username = "";
    let input_password = "";
    if (guest_login) {
      input_username = "ashishkumar";
      input_password = "ashishkumar";
    } else {
      input_username = username;
      input_password = password;
    }
    let login_credentail = {
      username: input_username,
      password: input_password,
    };
    await userLogin(login_credentail, handleaddtoast, setAuthState);
    navigate("/");
  };
  return (
    <form
      className="bg-slate-900	max-w-md 	mx-auto mt-20 flex flex-col	justify-center	items-center gap-3 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        loginHandle(false);
      }}
    >
      <div className="flex flex-col	justify-center	items-center">
        <span className="text-5xl	font-extrabold	">Music</span>
        <span className="text-2xl	font-semibold	">Mohala</span>
      </div>
      <div className="text-3xl	font-semibold	">Login To Music Mohala</div>
      <input
        className="bg-slate-700	w-10/12 h-14 rounded-xl	p-2.5	outline-transparent	"
        placeholder="Username"
        onChange={(e) => {
          setAuthState({ type: "USERNAME", payload: e.target.value });
        }}
      />
      <input
        className="bg-slate-700	w-10/12	h-14 rounded-xl	p-2.5	outline-transparent	"
        placeholder="Password"
        onChange={(e) => {
          setAuthState({ type: "PASSWORD", payload: e.target.value });
        }}
      />
      <button
        type="submit"
        className="w-10/12	h-14  bg-slate-100 text-slate-900	rounded-xl text-2xl	font-semibold	"
        onClick={(e) => {
          e.preventDefault();
          loginHandle(false);
        }}
      >
        Log In
      </button>
      <button
        className="w-10/12	h-12 border-2	border-slate-100	rounded-xl text-lg"
        onClick={(e) => {
          e.preventDefault();
          loginHandle(true);
        }}
      >
        Login With Test Credential
      </button>
      <button
        onClick={() => {
          navigate("/signup");
        }}
        className="text-xl"
      >
        Don't Have An Account ? Sign Up..
      </button>
    </form>
  );
};
