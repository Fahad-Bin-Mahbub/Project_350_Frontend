import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { Drawer, Form } from "rsuite";
import FormControlLabel from "rsuite/esm/FormControlLabel";
import { useTaskCard } from "../context/TaskCardProvider";
import Comments from "./Comments";
import StatusTag from "./StatusTag";

const SlidePane = () => {
	const { taskCardData } = useTaskCard();
	// console.log(taskCardData);
	const { status, courseCode, semester, part, paperCount, teacher } =
		taskCardData;

	const [cc, setCc] = useState(courseCode);
	const [t, setT] = useState(teacher);
	const [pc, setPc] = useState(paperCount);
	const [s, setS] = useState(semester);
	const [date, setDate] = useState("2021-09-01");
	const [p, setP] = useState(part);

	return (
		<div>
			<Drawer.Header>
				<Drawer.Title>
					<StatusTag status={status} />
				</Drawer.Title>
			</Drawer.Header>
			<Drawer.Body>
				<Form fluid className="my-10 ">
					<Form.Group controlId="course-code">
						<Form.Control
							name="Course"
							placeholder={`Course`}
							value={cc}
							onChange={(value) => setCc(value)}
							className="h-24 text-5xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="assignee" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Assignee
						</Form.ControlLabel>
						<Form.Control
							name="Assignee"
							placeholder={`Assignee`}
							value={t}
							onChange={(value) => setT(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="due-date" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Due Date
						</Form.ControlLabel>
						<Form.Control
							name="due"
							placeholder={`No Due Date`}
							type="date"
							value={date}
							onChange={(value) => setDate(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="exam" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Exam
						</Form.ControlLabel>
						<Form.Control
							name="exam"
							placeholder={`semester`}
							value={s}
							onAbort={(value) => setS(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="Part" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Part
						</Form.ControlLabel>
						<Form.Control
							name="part"
							placeholder={`part`}
							value={p}
							onChange={(value) => setP(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>

					<Form.Group controlId="Paper Count" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Paper Count
						</Form.ControlLabel>
						<Form.Control
							name="paper-count"
							placeholder={`0`}
							value={pc}
							onChange={(value) => setPc(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
				</Form>
				<div className="w-full self-end">
					<Comments userId="1" />
				</div>
			</Drawer.Body>
		</div>
	);
};

export default SlidePane;
