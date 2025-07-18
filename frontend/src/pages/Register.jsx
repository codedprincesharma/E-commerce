import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../stores/actions/CartActions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const registerHandler = (user) => {
    user.id = nanoid();
    reset();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
  };



  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col  px-50 gap-y-6 text-2xl w-4/6 py-30 items-start"
    >
      <input
        {...register("username")}
        className=" outline-0 border-b-2 p-2  "
        type="text"
        placeholder="Username"
      />
      <input
        {...register("Email")}
        className=" outline-0 border-b-2 p-2  "
        type="email"
        placeholder="Email"
      />
      <input
        {...register("Password")}
        className=" outline-0 border-b-2 p-2  "
        type="password"
        placeholder="Password"
      />

      <button className="bg-gray-600 px-4 py-2 rounded " type="submit">
        Register
      </button>
      <p className="font-thin">
        Already account?
        <Link
          className="font-thin text-blue-500"
          style={{ textDecoration: "none" }}
          to="/login"
        >
          <small>Login</small>
        </Link>
      </p>
    </form>
  );
};

export default Register;
