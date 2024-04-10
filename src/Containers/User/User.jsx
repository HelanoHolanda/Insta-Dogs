// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../../Components/Feed";
import UserPhotoPost from "./UserPhotoPost";
import { useUser } from "../../hooks/UserContext";
import Head from "../../Components/Head";

// eslint-disable-next-line react/prop-types
const User = () => {
  const { data } = useUser();
  return (
    <section className="max-w-3xl mx-auto px-4">
      <Head title="Minha Pagina" />
      <UserHeader />
      <Routes>
        <Route path="/*" element={<Feed user={data} />} />
        <Route path="postar" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
};

export default User;
