import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useUser } from "../hooks/UserContext";

// eslint-disable-next-line react/prop-types
function PrivateRoutes ({children}) {
  const {user} = useUser()

  return user ? children : <Navigate to='/login' />
}

export default PrivateRoutes;