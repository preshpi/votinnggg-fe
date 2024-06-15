import { useState } from "react";
import { createContext, useContext } from "react";

export const SidebarContext = createContext<any>(null);

export function useSidebar() {
	return useContext(SidebarContext);
}

type Props = {
	children: any;
};
export const SidebarViewProvider = ({ children }: Props) => {
	const [showSidebar, setShowSidebar] = useState<boolean>(true);

	const value = {
		showSidebar,
		setShowSidebar,
	};

	return (
		<SidebarContext.Provider value={value}>
			{children}
		</SidebarContext.Provider>
	);
};
