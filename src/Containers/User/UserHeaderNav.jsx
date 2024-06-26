// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import UseMedia from "../../hooks/UseMedia";
import adicionar from "../../Public/adicionar.svg";
import feed from "../../Public/feed.svg";
import sair from "../../Public/sair.svg";
const UserHeaderNav = () => {
  const { logout } = useUser();

  const mobile = UseMedia("(max-width: 40rem)");

  const [mobileisopen, setMobileisopen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileisopen(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`bg-slate-200 
          rounded-md
          h-10 w-10 
          flex items-center justify-center justify-self-end
          border border-transparent border-solid after:content-[''] 
          after:block 
          after:w-5 
          after:h-0.5 
          after:bg-current
           after:rounded-lg 
            after:shadow-4xl
            after:shadow-3xl
             hover:outline-none
              focus:outline-none
               hover:bg-white
                focus:bg-white 
                hover:shadow-hoverandfocus 
                focus:shadow-hoverandfocus
                 hover:border-bg-footer
                  focus:border-bg-footer
                   hover:text-bg-footer
                    focus:text-bg-footer
                    after:duration-200
                    
                    ${
                      mobileisopen &&
                      "outline-none z-50 bg-white shadow-hoverandfocus border-bg-footer text-bg-footer after:rotate-(-90) after:w-bols after:h-bols after:shadow-bols"
                    }`}
          onClick={() => setMobileisopen(!mobileisopen)}
        ></button>
      )}

      <nav
        className={` ${
          mobileisopen &&
          "duration-300 opacity-100 origin-initial pointer-events-auto z-50 "
        } ${
          mobile
            ? "block absolute top-[65px] right-[-10px] px-4 bg-white shadow-boxmobile rounded translate-x-mobile opacity-0 pointer-events-none"
            : "flex justify-end gap-4"
        }`}
      >
        <NavLink
          to="/user"
          className={` ${
            mobile
              ? "flex gap-1 items-center  bg-none w-full border-none cursor-pointer border-b-zinc-200 py-2 hover:text-bg-footer"
              : "bg-slate-200 rounded-md h-10 w-10 flex items-center justify-center border border-transparent border-solid duration-100 cursor-pointer focus:bg-white focus:shadow-md  focus:shadow-gray-400 focus:border-zinc-800 focus:outline-none hover:bg-white hover:shadow-md hover:shadow-gray-4 hover:border-zinc-800 hover:outline-none  active:bg-white  active:shadow active:shadow-yellow-200  active:border-yellow-500"
          } `}
        >
          <img className="inline-block" src={feed} alt="Feed" />
          {mobile && "Minhas Fotos"}
        </NavLink>

        <NavLink
          to="/user/postar"
          className={` ${
            mobile
              ? "flex gap-1 items-center bg-none w-full border-none cursor-pointer border-b border-b-solid border-b-ee1 py-2 2 hover:text-bg-footer"
              : "bg-slate-200 rounded-md h-10 w-10 flex items-center justify-center border border-transparent border-solid duration-100 cursor-pointer focus:bg-white focus:shadow-md  focus:shadow-gray-400 focus:border-zinc-800 focus:outline-none hover:bg-white hover:shadow-md hover:shadow-gray-4 hover:border-zinc-800 hover:outline-none  active:bg-white  active:shadow active:shadow-yellow-200  active:border-yellow-500"
          } `}
        >
          <img className="inline-block" src={adicionar} alt="Feed" />
          {mobile && "Postar Foto"}
        </NavLink>

        <NavLink
          to="/login"
          onClick={logout}
          className={` ${
            mobile
              ? "flex gap-1 items-center bg-none w-full border-none cursor-pointer border-b border-b-solid border-b-ee1 py-2 2 hover:text-bg-footer"
              : "bg-slate-200 rounded-md h-10 w-10 flex items-center justify-center border border-transparent border-solid duration-100 cursor-pointer focus:bg-white focus:shadow-md  focus:shadow-gray-400 focus:border-zinc-800 focus:outline-none hover:bg-white hover:shadow-md hover:shadow-gray-4 hover:border-zinc-800 hover:outline-none  active:bg-white  active:shadow active:shadow-yellow-200  active:border-yellow-500"
          } `}
        >
          <img className="inline-block" src={sair} alt="Feed" />{" "}
          <button> {mobile && "Sair"}</button>{" "}
        </NavLink>
      </nav>
    </>
  );
};

export default UserHeaderNav;
