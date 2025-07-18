import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const loginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex flex-col  px-50 gap-y-6 text-2xl w-4/6 py-30 items-start"
    >
      <input
        {...register("username")}
        className=" outline-0 border-b-2 p-2  "
        type="text"
        placeholder="Username"
      />

      <input
        {...register("Password")}
        className=" outline-0 border-b-2 p-2  "
        type="password"
        placeholder="*******"
      />

      <button className="bg-gray-600 px-4 py-2 rounded " type="submit">
        Login user
      </button>
      <p className="font-thin">
        dont't have an account?{" "}
        <Link
          className="font-thin text-blue-500"
          style={{ textDecoration: "none" }}
          to="/register"
        >
          <small>Register</small>
        </Link>
      </p>
    </form>
  );
};

export default Login;
