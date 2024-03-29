import React, { useState } from "react";
import { FaCalendar, FaUserCircle } from "react-icons/fa";
import { DateInput, DatePicker, Drawer, Form, SelectPicker } from "rsuite";
import { useTaskCard } from "../context/TaskCardProvider";
import Comments from "./Comments";
import StatusTag from "./StatusTag";

const Datepicker = React.forwardRef((props, ref) => (
	<DatePicker
		appearance="subtle"
		oneTap
		size="lg"
		format="dd-MM-yyyy"
		{...props}
		caretAs={FaCalendar}
		ref={ref}
		className="text-2xl font-medium focus:outline-none border-none"
	/>
));

const semesterSelcetion = React.forwardRef((props, ref) => {
	const data = ["1/1", "1/2", "2/1", "2/2", "3/1", "3/2", "4/1", "4/2"].map(
		(item) => ({ label: item, value: item })
	);
	return (
		<SelectPicker
			appearance="subtle"
			data={data}
			className="text-2xl font-medium focus:outline-none border-none"
			block
			size="lg"
		/>
	);
});

const paperSelcetion = React.forwardRef((props, ref) => {
	const data = ["A", "B"].map((item) => ({ label: item, value: item }));
	return (
		<SelectPicker
			appearance="subtle"
			data={data}
			className="text-2xl font-medium focus:outline-none border-none"
			block
			size="lg"
		/>
	);
});

const SlidePane = () => {
	const { taskCardData } = useTaskCard();
	// console.log(taskCardData);
	const { status, courseCode, semester, part, paperCount, teacher } =
		taskCardData;

	const [cc, setCc] = useState(courseCode);
	const [t, setT] = useState(teacher);
	const [pc, setPc] = useState(paperCount);
	const [s, setS] = useState(semester);
	const [date, setDate] = useState(new Date());
	const [p, setP] = useState(part);
	const [stat, setStat] = useState(status);

	return (
		<div className="h-screen">
			<Drawer.Header>
				<Drawer.Title>
					<StatusTag status={stat} />
				</Drawer.Title>
			</Drawer.Header>
			<Drawer.Body className="no-scrollbar">
				<Form fluid>
					<Form.Group controlId="course-code">
						<Form.Control
							name="Course"
							placeholder={`Course`}
							value={cc}
							onChange={(value) => setCc(value)}
							className="h-24 text-5xl font-medium focus:outline-none border-none focus:border-none"
						/>
					</Form.Group>
					<Form.Group controlId="assignee" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl">
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
					<Form.Group controlId="due-date" className="flex mb-0">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Due Date
						</Form.ControlLabel>
						<Form.Control
							accepter={Datepicker}
							name="due"
							value={date}
							onChange={(value) => setDate(value)}
							// className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="exam" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Exam
						</Form.ControlLabel>
						<Form.Control
							accepter={semesterSelcetion}
							name="exam"
							placeholder={`semester`}
							value={s}
							onChange={(value) => setS(value)}
							// className="text-2xl font-medium focus:outline-none border-none"
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
