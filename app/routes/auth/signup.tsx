import React from "react";
import UserPanel from "~/routes/auth/panel";
import UserSignupForm from "~/components/User/UserSignupForm";
import { useAppSelector } from "~/features/hooks";

const UserForm = () => {
  const user = useAppSelector((state) => state.user.currentUser);

  return (
    <div className="relative pt-[60px] w-5/6 m-auto">
    <UserSignupForm /> 
    </div>
  );
};
export default UserForm;
