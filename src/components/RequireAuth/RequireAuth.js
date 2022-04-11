import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  const loaction = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: loaction }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
