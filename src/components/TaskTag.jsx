const TaskTag = ({ TagName, tagColor }) => {
	return (
		<div
			className={`w-[61px] h-[24] ${tagColor} text-[8px] rounded-full items-center justify-center mr-3 text-black content-center py-1.5`}
		>
			<div>{TagName}</div>
		</div>
	);
};

export default TaskTag;
