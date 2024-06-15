import { createContext, useContext } from "react";

export const AuthContext = createContext<any>(null);

export function useAuth() {
	return useContext(AuthContext);
}
