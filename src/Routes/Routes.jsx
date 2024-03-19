// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home/Home";
import Login from "../Containers/Login/Login";
import Register from "../Containers/Register/Register";
import LostPassword from "../Containers/LostPassword/LostPassword";
import DefaultLayouts from "../Layouts/DefaultLayouts";
import User from "../Containers/User/User";
import UserPhotoPost from "../Containers/User/UserPhotoPost";
import UserStates from "../Containers/User/UserStates";
import Feed from "../Components/Feed";

const Routes1 = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lostpassword" element={<LostPassword />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/feed" element={<Feed />} />
          <Route path="/user/postar" element={<UserPhotoPost />} />
          <Route path="/user/estatistica" element={<UserStates />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Routes1;
