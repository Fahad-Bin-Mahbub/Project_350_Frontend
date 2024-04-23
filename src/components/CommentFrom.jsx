import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, Input } from "rsuite";
import { useAuth } from "../context/Auth";
import { useTaskCard } from "../context/TaskCardProvider";
import { BASE_URL } from "../data/data";

const Textarea = React.forwardRef((props, ref) => (
	<Input {...props} as="textarea" ref={ref} />
));

Textarea.displayName = "Textarea";

const CommentFrom = ({ handleSubmit }) => {
	const [text, setText] = useState("");
	const { taskCardData } = useTaskCard();
	const { auth } = useAuth();

	const onSubmit = async (e) => {
		e.preventDefault();
		if (text.length === 0) return;
		handleSubmit(text);
		setText("");
		try {
			const id = taskCardData.id;
			// console.log(id);
			const response = await axios.post(
				`${BASE_URL}/api/comment/create/${id}`,
				{
					content: text,
				},
				{
					withCredentials: true,
				}
			);
			const { status, data } = response;
			if (status === 201) {
				toast.success("Commented successfully");
				console.log("create comment response data", data);
				// setChanged(false);
				// setIsNewCard(false);
			} else {
				toast.error("Could not comment");
			}
		} catch (error) {
			toast.error("Error: Could not comment");
		}
	};
	return (
		<Form onSubmit={onSubmit} fluid className="flex-none">
			<Form.Group controlId="textarea">
				<Form.Control
					rows={5}
					name="textarea"
					accepter={Textarea}
					value={text}
					onChange={(value) => setText(value)}
				/>
				<div className="flex justify-end my-2">
					<button
						onClick={onSubmit}
						className="btn btn-primary px-10 rounded-xl text-gray-100 bg-blue-500 hover:bg-blue-500"
					>
						Send
					</button>
				</div>
			</Form.Group>
		</Form>
	);
};

export default CommentFrom;
