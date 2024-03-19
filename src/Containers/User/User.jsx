// eslint-disable-next-line no-unused-vars
import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <section className="max-w-3xl mx-auto px-4">
      <UserHeader />
      <Outlet />
    </section>
  );
};

export default User;
