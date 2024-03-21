// import React from "react";
import { FaCalendarDays, FaEllipsis } from "react-icons/fa6";
import TaskTag from "./TaskTag";

const statusColors = {
	ACCEPTED: "bg-accepted",
	"IN PROGRESS": "bg-ongoing",
	DELIVERED: "bg-delivered",
	CHECKED: "bg-checked",
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
}) => {
	status = status.toUpperCase();
	courseCode = courseCode.toUpperCase();
	part = part.toUpperCase();

	return (
		//whole card
		<div className="w-[312px] h-[172px] bg-white rounded-2xl py-5 px-6 flex flex-col my-2">
			{/* //TODO: make Notification badge */}
			{/* <div className="size-2 bg-secondary rounded-full fixed top-0 right-0"></div> */}
			<div className="justify-between flex">
				<div className="text-left flex">
					{/* status */}
					<div
						className={`size-2 ${statusColors[status]} rounded-full mt-1 mr-2`}
					></div>
					<div className="text-[10px] text-grey">{status}</div>
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
				<TaskTag TagName={semester} tagColor={randomColors[semester]} />
				<TaskTag TagName={`Part ${part}`} tagColor={randomColors[part]} />
				<TaskTag TagName={`${paperCount}`} tagColor={randomColors[part]} />
			</div>
			<div className="flex-grow"></div>
			<div className="flex justify-between items-center">
				<div className="size-7 rounded-full bg-rose-500 flex justify-center text-center items-center text-[8px] text-white">
					{teacher}
				</div>
				{/* //TODO: display different item by role */}
				<div className="text-[10px] text-right">
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
