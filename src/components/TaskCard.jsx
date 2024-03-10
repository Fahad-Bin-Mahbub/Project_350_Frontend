import React from "react";

const TaskTag = ({ TagName }) => {
	return (
		<div className="w-61 h-24 bg-emerald-400 text-8 rounded-full items-center justify-center mr-3 text-black content-center py-1.5">
			<div>{TagName}</div>
		</div>
	);
};

const TaskCard = ({ status, courseCode, semester }) => {
	status = status.toUpperCase();
	courseCode = courseCode.toUpperCase();

	return (
		//whole card
		<div className="w-312 h-172 bg-white rounded-2xl py-5 px-6">
			<div className="justify-between flex">
				<div className="text-left flex">
					{/* status */}
					<div className="size-2 bg-green-800 rounded-full mt-1 mr-2"></div>
					<div className="text-10 text-grey">{status}</div>
				</div>
				{/* three dots */}
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-black"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
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

			<div className="text-10 text-right mt-5">
				<div className="">Due</div>
				<div className="text-black">March 19</div>
			</div>
		</div>
	);
};

export default TaskCard;
