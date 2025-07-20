import { Navigate, Outlet } from "react-router";
import { useReadLocalStorage } from "usehooks-ts";
import storage, { STORAGE_KEYS } from "~/utils/storage";

export default function ProtectedRoute() {
  const accessToken = useReadLocalStorage<string>(STORAGE_KEYS.ACCESS_TOKEN, {
    deserializer: storage.stringDeserializer,
  });

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
