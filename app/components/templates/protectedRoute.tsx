import { Navigate, Outlet } from "react-router";
import { isAuthenticated } from "~/data/local";
import { useReactiveVar } from "@apollo/client";

export default function ProtectedRoute() {
  const isAuthenticatedValue = useReactiveVar(isAuthenticated);

  if (!isAuthenticatedValue) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
