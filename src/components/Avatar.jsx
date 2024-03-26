import React from "react";

const Avatar = ({ content, color = "bg-rose-500" }) => {
	content = content
		.split(" ")
		.map((word) => word[0])
		.join("");
	// console.log(content);

	return (
		<div
			className={
				`size-7 rounded-full flex justify-center text-center items-center text-sm text-white ` +
				color
			}
		>
			{content}
		</div>
	);
};

export default Avatar;
