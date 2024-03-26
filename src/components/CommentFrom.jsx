import React, { useState } from "react";
import { Button, Form, Input } from "rsuite";

const Textarea = React.forwardRef((props, ref) => (
	<Input {...props} as="textarea" ref={ref} />
));

const CommentFrom = ({ handleSubmit }) => {
	const [text, setText] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();
		if (text.length === 0) return;
		handleSubmit(text);
		setText("");
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
