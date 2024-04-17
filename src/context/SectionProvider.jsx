import React, { useContext, useState } from "react";

const SectionContext = React.createContext();

export const useSection = () => {
	return useContext(SectionContext);
};

export const SectionProvider = ({ children }) => {
	const [sectionData, setSectionData] = useState(["All Cards", "Exams"]);

	const updateSectionData = (newSectionData) => {
		setSectionData(newSectionData);
	};

	return (
		<SectionContext.Provider value={{ sectionData, updateSectionData }}>
			{children}
		</SectionContext.Provider>
	);
};
