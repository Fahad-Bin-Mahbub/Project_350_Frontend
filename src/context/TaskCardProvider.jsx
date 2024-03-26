import React, { useContext, useState } from "react";

const TaskCardContext = React.createContext();

export const useTaskCard = () => {
	return useContext(TaskCardContext);
};

export const TaskCardProvider = ({ children }) => {
	const [taskCardData, setTaskCardData] = useState({
		status: "accepted",
		courseCode: "test",
		semester: "4/2",
		part: "B",
		paperCount: 1,
		teacher: "SC",
	});

	const updateTaskCardData = (newTaskCardData) => {
		setTaskCardData(newTaskCardData);
	};

	return (
		<TaskCardContext.Provider value={{ taskCardData, updateTaskCardData }}>
			{children}
		</TaskCardContext.Provider>
	);
};
