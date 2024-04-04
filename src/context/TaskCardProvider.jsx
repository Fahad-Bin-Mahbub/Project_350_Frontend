import React, { useContext, useState } from "react";

const TaskCardContext = React.createContext();

export const useTaskCard = () => {
	return useContext(TaskCardContext);
};

export const TaskCardProvider = ({ children }) => {
	const [taskCardData, setTaskCardData] = useState({
		status: "Status",
		courseCode: "Course Code",
		semester: "1/1",
		part: "A",
		paperCount: 0,
		teacher: "Teacher Name",
		dueDate: new Date(),
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
