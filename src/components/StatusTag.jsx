import React from "react";
import { FaCheck, FaCopy, FaRepeat, FaUserCheck } from "react-icons/fa6";

const statusColors = {
	ASSIGNED: "text-[#4682B4] border-[#4682B4]",
	"ON GOING": "text-[#2297F1] border-[#2297F1]",
	SUBMITTED: "text-[#40856A] border-[#40856A]",
	CHECKED: "text-[#FFB627] border-[#FFB627]",
};

const statusBgColors = {
	ASSIGNED: "bg-[#F1FAF6]",
	"ON GOING": "bg-[#DFF1FF]",
	SUBMITTED: "bg-[#E6F8F1]",
	CHECKED: "bg-[#FFF0D2]",
};

const statusIcons = {
	ASSIGNED: "FaCheck",
	"ON GOING": "FaRepeat",
	SUBMITTED: "FaCopy",
	CHECKED: "FaUserCheck",
};

const StatusTag = ({ status = "submitted" }) => {
	status = status.toUpperCase();
	return (
		<div
			className={`w-32 h-8 content-center ${statusColors[status]} ${statusBgColors[status]} border ${statusColors[status]} rounded-xl text-center flex flex-none justify-center items-center text-sm font-bold`}
		>
			<div className="pr-1">
				{status === "SUBMITTED" ? (
					<FaCheck />
				) : status === "ON GOING" ? (
					<FaRepeat />
				) : status === "CHECKED" ? (
					<FaCopy />
				) : status === "ASSIGNED" ? (
					<FaUserCheck />
				) : (
					<></>
				)}
			</div>
			{status}
		</div>
	);
};

export default StatusTag;
