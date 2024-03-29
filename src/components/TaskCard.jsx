// import React from "react";
import { FaCalendarDays, FaEllipsis } from "react-icons/fa6";
import { Badge } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useTaskCard } from "../context/TaskCardProvider";
import Avatar from "./Avatar";
import TaskTag from "./TaskTag";

const statusColors = {
	ACCEPTED: "bg-[#4682B4]",
	"ON GOING": "bg-[#2297F1]",
	SUBMITTED: "bg-[#40856A]",
	CHECKED: "bg-[#FFB627]",
};

const randomColors = {
	A: "bg-tag-A",
	B: "bg-tag-B",
	"1/1": "bg-tag-1",
	"1/2": "bg-tag-2",
	"2/1": "bg-tag-3",
	"2/2": "bg-tag-4",
	"3/1": "bg-tag-5",
	"3/2": "bg-tag-6",
	"4/1": "bg-tag-7",
	"4/2": "bg-tag-8",
};

// TODO: pass the date prop to the TaskCard
const TaskCard = ({
	status,
	courseCode,
	semester,
	part,
	paperCount,
	teacher,
	dueDate,
	clickHandler,
}) => {
	const formatDate = (date) => {
		const monthName = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		const month = monthName[date.getMonth()];

		return `${month} ${date.getDate()}`;
	};

	courseCode = courseCode.toUpperCase();
	part = part.toUpperCase();
	status = status.toUpperCase();
	dueDate = formatDate(new Date(dueDate));

	const { taskCardData, updateTaskCardData } = useTaskCard();

	return (
		//whole card
		<div
			className="w-[312px] h-[172px] bg-white rounded-2xl py-5 px-6 flex flex-col my-2"
			onClick={() => {
				clickHandler();
				updateTaskCardData({
					status,
					courseCode,
					semester,
					part,
					paperCount,
					teacher,
					dueDate,
				});
			}}
		>
			{/* //TODO: make Notification badge */}
			<div className="justify-between flex">
				<div className="text-left flex">
					{/* status */}
					<div
						className={`size-2 ${statusColors[status]} rounded-full mt-1 mr-2`}
					></div>
					<div className="text-[10px] text-grey">{status}</div>
				</div>
				{/* three dots */}
				<div className="flex">
					<FaEllipsis />
					{/* <div className="size-2 bg-secondary rounded-full absolute top-0 right-0"></div> */}
				</div>
			</div>
			{/* course code */}
			<div className="text-left text-top my-2.5 text-black font-medium">
				{courseCode}
			</div>
			{/* tags */}
			<div className="flex">
				<TaskTag TagName={semester} tagColor={randomColors[semester]} />
				<TaskTag TagName={`Part ${part}`} tagColor={randomColors[part]} />
				<TaskTag TagName={`${paperCount}`} tagColor="bg-tag-count" />
			</div>
			<div className="flex-grow"></div>
			<div className="flex justify-between items-center">
				<Avatar content={teacher} />
				{/* //TODO: display different item by role */}
				<div className="text-[10px] text-right">
					<div className="">Due</div>
					{/* //TODO: Change text color according to the date */}
					<div className="text-alert">{dueDate}</div>
				</div>
				{/* <FaCalendarDays /> */}
			</div>
		</div>
	);
};

export default TaskCard;
