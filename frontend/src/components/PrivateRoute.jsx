import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;