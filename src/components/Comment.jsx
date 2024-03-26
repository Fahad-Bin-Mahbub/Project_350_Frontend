import React from "react";
import Avatar from "./Avatar";

const Comment = ({ comment, userName }) => {
	const timePassed = new Date() - new Date("2024-03-26 16:00");
	// console.log(timePassed);
	var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
	console.log(days, hours, minutes);

	const getTimePassed = () => {
		if (days > 0) {
			return ` ${days} days ago`;
		} else if (hours > 0) {
			return ` ${hours} hours ago`;
		} else {
			return ` ${minutes} minutes ago`;
		}
	};

	return (
		<div>
			<div className="w-full flex items-center gap-2">
				<div>
					<Avatar content={userName} />
				</div>
				<div className="font-bold text-gray-500 flex-none">{userName}</div>
				<div className="text-xs text-gray-500 flex-none">
					&middot;
					{getTimePassed()}
				</div>
			</div>
			<div className="text-sm pl-9">{comment}</div>
		</div>
	);
};

export default Comment;
