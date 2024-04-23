import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { set } from "rsuite/esm/utils/dateUtils";
import { useAuth } from "../context/Auth";
import { useTaskCard } from "../context/TaskCardProvider";
import { BASE_URL, getComments } from "../data/data";
import Comment from "./Comment";
import CommentFrom from "./CommentFrom";

const Comments = (userid) => {
	const [comments, setComments] = useState([]);
	const { auth } = useAuth();
	const { taskCardData } = useTaskCard();
	const [counter, setCounter] = useState(0);
	const commentsContainerRef = useRef(null); // Ref for comments container

	const addComment = (text) => {
		//TODO: need to change
		setComments([
			...comments,
			{
				id: comments.length + 1,
				content: text,
				author: {
					_id: auth.user._id,
					firstName: auth.user.firstName,
				},
				createdAt: new Date().toISOString(),
			},
		]);
	};

	useEffect(() => {
		const getCommentsFromApi = async () => {
			try {
				const id = taskCardData.id;
				const response = await axios.get(
					`${BASE_URL}/api/comment/get-task-comment/${id}`,
					{ withCredentials: true }
				);
				const { status, data } = response;
				if (status === 200) {
					setComments(data.data);
				} else {
					console.log("Failed to fetch comments");
				}
			} catch (error) {
				console.log("Failed to fetch comments", error);
			}
		};

		getCommentsFromApi();
	}, [counter]);

	useEffect(() => {
		// Scroll to the last comment when comments change
		if (commentsContainerRef.current) {
			commentsContainerRef.current.scrollTop =
				commentsContainerRef.current.scrollHeight;
		}
	}, [comments]);

	return (
		<div className="w-full border-t flex flex-col">
			<div className="w-full my-2">
				<div className="text-center text-xl font-semibold flex items-center my-4">
					Comments
				</div>
			</div>
			<div
				className="w-full max-h-[25dvh] flex flex-col overflow-y-auto flex-grow no-scrollbar"
				ref={commentsContainerRef} // Assign ref to comments container
			>
				{comments?.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
				{comments.length == 0 && (
					<div className="text-center text-base font-semibold text-gray-400 my-1">
						No comments yet
					</div>
				)}
			</div>
			<div className="">
				<CommentFrom handleSubmit={addComment} />
			</div>
		</div>
	);
};

export default Comments;
