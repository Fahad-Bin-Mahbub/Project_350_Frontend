import React, { useContext, useState } from "react";

const SessionContext = React.createContext();

export const useSession = () => {
	return useContext(SessionContext);
};

export const SessionProvider = ({ children }) => {
	const [sessionSelection, setSessionSelection] = useState("");

	const updateSession = (newSession) => {
		setSessionSelection(newSession);
	};

	return (
		<SessionContext.Provider value={{ sessionSelection, updateSession }}>
			{children}
		</SessionContext.Provider>
	);
};
