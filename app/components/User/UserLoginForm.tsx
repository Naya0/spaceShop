import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/store";
import { loginUser } from "~/features/user/userSlice";
import { Link, useNavigate } from "react-router";

interface Inputs {
  avatar: string;
  email: string;
  name: string;
  password: string;
}

const UserLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data) {
      dispatch(loginUser(data));
    } 
  };
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[350px] gap-3 items-center m-auto"
    >
      <h2>Login</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email пользователя обязателен",
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <Link to="/signup" className="text-lg hover:text-gray-600">Create an account</Link>

      <button
        className={`
            h-[50px] w-[300px]
          bg-white 
            relative flex justify-center items-center
            hover:cursor-pointer  hover:text-white
            hover:bg-gray-700 hover:border-gray-700
            border-solid border border-gray-600
            transition delay-150 duration-300
      `}
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default UserLoginForm;
