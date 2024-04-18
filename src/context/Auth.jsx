import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({
		user: JSON.parse(localStorage.getItem("auth")),
	});
	const updateAuth = (newAuth) => {
		setAuth(newAuth);
	};

	// useEffect(() => {
	// 	const data = JSON.parse(localStorage.getItem("auth"));
	// 	if (data) {
	// 		console.log("Inside provider auth");
	// 		console.log("Parsed Data" + JSON.stringify(data));
	// 		setAuth(data);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);
	return (
		<AuthContext.Provider value={{ auth, updateAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, useAuth };
