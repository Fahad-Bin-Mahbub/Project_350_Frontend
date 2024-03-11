// import React from "react";
import { FaCalendarDays, FaEllipsis } from "react-icons/fa6";

const TaskTag = ({ TagName }) => {
	return (
		<div
			className={`w-61 h-24 ${
				randomColors[Math.floor(Math.random() * (randomColors.length - 1))]
			} text-8 rounded-full items-center justify-center mr-3 text-black content-center py-1.5`}
		>
			<div>{TagName}</div>
		</div>
	);
};

const randomColors = ["bg-tag-1", "bg-tag-2", "bg-tag-3", "bg-tag-4"];

const statusColors = {
	ACCEPTED: "bg-accepted",
	"IN PROGRESS": "bg-ongoing",
	DELIVERED: "bg-delivered",
	CHECKED: "bg-checked",
};

// TODO: pass the date prop to the TaskCard
const TaskCard = ({ status, courseCode, semester, teacher }) => {
	status = status.toUpperCase();
	courseCode = courseCode.toUpperCase();

	return (
		//whole card
		<div className="w-312 h-172 bg-white rounded-2xl py-5 px-6 flex flex-col my-2">
			{/* //TODO: make Notification badge */}
			{/* <div className="size-2 bg-secondary rounded-full fixed top-0 right-0"></div> */}
			<div className="justify-between flex">
				<div className="text-left flex">
					{/* status */}
					<div
						className={`size-2 ${statusColors[status]} rounded-full mt-1 mr-2`}
					></div>
					<div className="text-10 text-grey">{status}</div>
				</div>
				{/* three dots */}
				<div>
					<FaEllipsis />
				</div>
			</div>
			{/* course code */}
			<div className="text-left text-top my-2.5 text-black font-medium">
				{courseCode}
			</div>
			{/* tags */}
			<div className="flex">
				<TaskTag TagName={semester} />
				<TaskTag TagName="Part A" />
			</div>
			<div className="flex-grow"></div>
			<div className="flex justify-between items-center">
				<div className="size-7 rounded-full bg-rose-500 flex justify-center text-center items-center text-8 text-white">
					{teacher}
				</div>
				{/* //TODO: display different item by role */}
				<div className="text-10 text-right">
					<div className="">Due</div>
					{/* //TODO: Change text color according to the date */}
					<div className="text-alert">March 19</div>
				</div>
				{/* <FaCalendarDays /> */}
			</div>
		</div>
	);
};

export default TaskCard;
