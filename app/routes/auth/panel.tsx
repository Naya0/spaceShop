import React from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router";
import { useAppSelector } from "~/features/hooks";
import type { AppDispatch } from "~/features/store";
import { logout } from "~/features/user/userSlice";

const UserPanel = () => {
  const user = useAppSelector((state) => state.user.currentUser);

  if (!user) redirect("/login");

  const dispatch = useDispatch<AppDispatch>();
  const logount = () => {
    dispatch(logout());
    redirect("/");
  };

  return (
    <div className="relative pt-[60px] w-5/6 m-auto">
      <div className="w-full">
        <h1>Кабинет пользователя</h1>
      </div>
      <div className="flex gap-8 mt-3">
        <div className="flex flex-col items-center w-max">
          <img
            src={user?.avatar}
            alt={user?.name}
            className="w-50 h-50 rounded-full object-cover "
          />
          <span className="font-medium">{user?.name}</span>
          <button
            className="text-xs text-gray-900 hover:text-gray-500 hover:cursor-pointer"
            onClick={logount}
          >
            Logout
          </button>
        </div>
        <div>
          <div>
            <span>User Email: </span>
            <span>{user?.email}</span>
          </div>
          <div>
            <span>User role: </span>
            <span>{user?.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
