import { AuthContext } from "@/services/auth/authContext";
import { useContext } from "react";

export function useAuth() {
  return useContext(AuthContext);
}
