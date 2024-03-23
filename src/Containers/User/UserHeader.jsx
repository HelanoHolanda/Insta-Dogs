// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import H1 from "../../Components/H1";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/user/postar":
        setTitle("Postar Foto");
        break;
      case "/user/estatistica":
        setTitle("Estatisticas");
        break;
      default:
        setTitle("Minhas Fotos");
    }
  }, [location]);

  return (
    <header className="grid grid-cols-twocolumns items-center mb-8 mt-4 relative">
      <H1>{title}</H1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
