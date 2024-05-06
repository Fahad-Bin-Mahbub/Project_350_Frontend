import React from "react";
import Avatar from "./Avatar";

const capitalize = (data) => {
	const strArr = data.toLowerCase().split(" ");
	// console.log(strArr);
	strArr.forEach((element, index) => {
		strArr[index] = element.charAt(0).toUpperCase() + element.slice(1);
	});
	return strArr.join(" ");
};

const Comment = ({ comment }) => {
	const timePassed = new Date() - new Date(comment.createdAt);
	// console.log(timePassed);
	var days = Math.floor(timePassed / (1000 * 60 * 60 * 24));
	var hours = Math.floor(
		(timePassed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	var minutes = Math.floor((timePassed % (1000 * 60 * 60)) / (1000 * 60));
	// console.log(days, hours, minutes);

	const getTimePassed = () => {
		if (days > 0) {
			return ` ${days} days ago`;
		} else if (hours > 0) {
			return ` ${hours} hours ago`;
		} else if (minutes > 0) {
			return ` ${minutes} minutes ago`;
		} else {
			return ` Just now`;
		}
	};

	return (
		<div className="my-2">
			<div className="w-full flex items-center gap-2">
				<div>
					<Avatar content={comment.author.firstName} />
				</div>
				<div className="font-bold text-lg text-gray-500 flex-none">
					{capitalize(comment.author.firstName)}
				</div>
				<div className="text-md font-bold text-gray-500 flex-none">
					&middot;
					{getTimePassed()}
				</div>
			</div>
			<div className="text-lg pl-9 pb-2 border-b">{comment.content}</div>
		</div>
	);
};

export default Comment;
