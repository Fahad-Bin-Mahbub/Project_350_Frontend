import React, { useEffect, useState } from "react";
import { set } from "rsuite/esm/utils/dateUtils";
import { getComments } from "../data/data";
import Comment from "./Comment";
import CommentFrom from "./CommentFrom";

const Comments = (userid) => {
	const [comments, setComments] = useState([]);
	const addComment = (text) => {
		setComments([
			{
				id: comments.length + 1,
				body: text,
				userId: userid,
				username: "Ishrar Chowdhury",
				createdAt: new Date().toISOString(),
			},
			...comments,
		]);
	};

	useEffect(() => {
		getComments().then((data) => {
			setComments(data);
		});
	}, []);

	return (
		<div className="w-full border-t flex flex-col">
			<div className="w-full my-2">
				<div className="text-center text-xl font-semibold flex items-center my-4">
					Comments
				</div>
			</div>
			<div className="w-full h-[25dvh] flex flex-col overflow-y-auto flex-grow">
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</div>
			<div className="">
				<CommentFrom handleSubmit={addComment} />
			</div>
		</div>
	);
};

export default Comments;
