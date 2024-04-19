import React, { useContext, useState } from "react";

const NavbarTitleContext = React.createContext();

export const useNavbarTitle = () => {
	return useContext(NavbarTitleContext);
};

export const NavbarTitleProvider = ({ children }) => {
	const [navbarTitle, setNavbarTitle] = useState("");

	const updateNavbarTitle = (newNavbarTitleData) => {
		setNavbarTitle(newNavbarTitleData);
	};

	return (
		<NavbarTitleContext.Provider value={{ navbarTitle, updateNavbarTitle }}>
			{children}
		</NavbarTitleContext.Provider>
	);
};
