import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { contextProvider } from "../context/Context";

function ProtectedRoute() {
  const { state } = useContext(contextProvider);
  if (!state.user) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
