import { useContext } from "react";
import { AuthContext } from "../HOCs/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
