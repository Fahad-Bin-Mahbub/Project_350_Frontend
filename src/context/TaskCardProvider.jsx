import React, { useContext, useState } from "react";

const TaskCardContext = React.createContext();

export const useTaskCard = () => {
	return useContext(TaskCardContext);
};

export const TaskCardProvider = ({ children }) => {
	const [taskCardData, setTaskCardData] = useState({
		id: "1",
		status: "Status",
		courseCode: "Course Code",
		session: "2024-1",
		part: "A",
		paperCount: 0,
		teacher: null,
		dueDate: new Date(),
	});
	// console.log(new Date().getMonth());

	const updateTaskCardData = (newTaskCardData) => {
		setTaskCardData(newTaskCardData);
	};

	return (
		<TaskCardContext.Provider value={{ taskCardData, updateTaskCardData }}>
			{children}
		</TaskCardContext.Provider>
	);
};
