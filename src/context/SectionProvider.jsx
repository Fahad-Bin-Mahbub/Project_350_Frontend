import React, { useContext, useState } from "react";

const SectionContext = React.createContext();

export const useSection = () => {
	return useContext(SectionContext);
};

export const SectionProvider = ({ children }) => {
	const [SectionData, setSectionData] = useState(["All Cards", "Exams"]);

	const updateSectionData = (newSectionData) => {
		setSectionData(newSectionData);
	};

	return (
		<SectionContext.Provider value={{ SectionData, updateSectionData }}>
			{children}
		</SectionContext.Provider>
	);
};
