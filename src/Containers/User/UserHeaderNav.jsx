import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";

const UserHeaderNav = () => {
  const { logout } = useUser();
  const [mobile, setMobile] = useState(null);

  return (
    <nav className="flex justify-end gap-4">
      <NavLink
        to="/user/feed"
        className="bg-slate-200 
        rounded-md
        h-10 w-10 
        flex items-center justify-center
        border border-transparent border-solid
        duration-100 cursor-pointer focus:bg-white
        focus:shadow-md
        focus:shadow-gray-400
        focus:border-zinc-800
        focus:outline-none

        hover:bg-white 
        hover:shadow-md
        hover:shadow-gray-400
        hover:border-zinc-800
        hover:border-zinc-800
        hover:outline-none 
         active:bg-white 
        active:shadow
         active:shadow-yellow-200 
        active:border-yellow-500"
      >
        <img className="inline-block" src="/src/Public/feed.svg" alt="Feed" />
        {mobile && "Minhas Fotos"}
      </NavLink>

      <NavLink
        to="/user/estatistica"
        className="bg-slate-200 
        rounded-md
        h-10 w-10 
        flex items-center justify-center
        border border-transparent border-solid
        duration-100 cursor-pointer"
      >
        <img
          className="inline-block"
          src="/src/Public/estatisticas.svg"
          alt="Feed"
        />
        {mobile && "Estatistica"}
      </NavLink>

      <NavLink
        to="/user/postar"
        className="bg-slate-200 
        rounded-md
        h-10 w-10 
        flex items-center justify-center
        border border-transparent border-solid
        duration-100 cursor-pointer"
      >
        <img
          className="inline-block"
          src="/src/Public/adicionar.svg"
          alt="Feed"
        />
        {mobile && "Postar Foto"}
      </NavLink>

      <NavLink
        to="/login"
        className="bg-slate-200 
        rounded-md
        h-10 w-10 
        flex items-center justify-center
        border border-transparent border-solid
        duration-100 cursor-pointer"
      >
        <img className="inline-block" src="/src/Public/sair.svg" alt="Feed" />{" "}
        <button onClick={logout}>{mobile && "Sair"}</button>{" "}
      </NavLink>
    </nav>
  );
};

export default UserHeaderNav;
