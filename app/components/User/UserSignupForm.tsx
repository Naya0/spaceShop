import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "~/features/store";
import { createUser } from "~/features/user/userSlice";
import { Link, Navigate, useNavigate } from "react-router";

interface Inputs {
  avatar: string;
  email: string;
  name: string;
  password: string;
}

const UserSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form data:", data);
    dispatch(createUser(data));
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[350px] gap-3 items-center m-auto"
      >
        <h2>Signup</h2>

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

        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Имя пользователя обязательно" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            id="avatar"
            {...register("avatar", {
              required: "Аватар обязателен",
            })}
          />
          {errors.avatar && <p>{errors.avatar.message}</p>}
        </div>

        <Link to="/login" className="text-lg hover:text-gray-600">
          I already have an account
        </Link>

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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default UserSignupForm;
