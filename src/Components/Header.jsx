// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Logo from "../Public/Logo.svg";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/UserContext";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="w-full bg-white border-b-2 shadow-sm block">
      <div className="flex justify-between items-center h-16 max-w-3xl mx-auto px-4">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>

        <div className="flex items-center gap-2">
          {user ? (
            <Link className="flex gap-2" to="/user">
              <p className="font-sans"> {user.user_nicename} </p>
              <img
                src="https://dogs.origamid.dev/assets/usuario-106ce8c2.svg"
                alt=""
              />
            </Link>
          ) : (
            <Link className="flex gap-2" to="/login">
              <p className="font-sans"> Login / Criar </p>
              <img
                src="https://dogs.origamid.dev/assets/usuario-106ce8c2.svg"
                alt=""
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
