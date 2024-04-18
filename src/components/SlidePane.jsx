import { useFormik } from "formik";
import React from "react";
import { Button, Drawer, Form, IconButton, Whisper } from "rsuite";
import { useTaskCard } from "../context/TaskCardProvider";
import { ROLE } from "../data/data";
import Comments from "./Comments";
import {
	Datepicker,
	MenuPopover,
	PaperSelection,
	SemesterSelection,
} from "./SlidePaneFormComponents";
import StatusTag from "./StatusTag";

const SlidePane = () => {
	const { taskCardData } = useTaskCard();
	const [changed, setChanged] = React.useState(false);
	const { status, courseCode, semester, part, paperCount, teacher, dueDate } =
		taskCardData;
	const role = ROLE;

	const formik = useFormik({
		initialValues: {
			status: status,
			courseCode: courseCode,
			semester: semester,
			part: part,
			paperCount: paperCount,
			teacher: teacher,
			date: dueDate,
		},
		onSubmit: (values) => {},
	});

	const tempRef = React.useRef();
	const handleStatusSelection = (status) => {
		setChanged(true);
		formik.setFieldValue("status", status);
		tempRef.current.close();
	};

	const handleSaveChanges = () => {
		//TODO: save changes to the database and API call
		console.log(formik.values);
	};

	return (
		<div className="h-screen">
			<Drawer.Header>
				<Drawer.Title className="flex justify-between items-center">
					{role == "teacher" ? (
						<Whisper
							placement="rightStart"
							trigger="click"
							ref={tempRef}
							speaker={<MenuPopover onSelect={handleStatusSelection} />}
						>
							<IconButton icon={<StatusTag status={formik.values.status} />} />
						</Whisper>
					) : (
						<StatusTag status={formik.values.status} />
					)}
					{changed && (
						<Button onClick={handleSaveChanges} appearance="subtle">
							Save Changes
						</Button>
					)}
				</Drawer.Title>
			</Drawer.Header>
			<Drawer.Body className="no-scrollbar">
				<Form fluid className="pb-3">
					<Form.Group controlId="course-code">
						<Form.Control
							name="Course"
							placeholder={`Course`}
							value={formik.values.courseCode}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("courseCode", value);
							}}
							className="h-24 text-5xl font-medium focus:outline-none border-none focus:border-none"
							readOnly={role == "teacher"}
						/>
					</Form.Group>
					<Form.Group controlId="assignee" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl">
							Assignee
						</Form.ControlLabel>
						<Form.Control
							name="Assignee"
							placeholder={`Assignee`}
							value={formik.values.teacher}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("teacher", value);
							}}
							size="lg"
							readOnly={role == "teacher"}
						/>
					</Form.Group>
					<Form.Group controlId="due-date" className="flex mb-0">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Due Date
						</Form.ControlLabel>
						<Form.Control
							accepter={Datepicker}
							name="due"
							value={new Date(formik.values.date)}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue(
									"date",
									new Date(value === null ? new Date() : value)
								);
							}}
							readOnly={role == "teacher"}
							sticky
						/>
					</Form.Group>
					<Form.Group controlId="exam" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Exam
						</Form.ControlLabel>
						<Form.Control
							accepter={SemesterSelection}
							name="exam"
							placeholder={`semester`}
							value={formik.values.semester}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("semester", value);
							}}
							readOnly={role == "teacher"}
						/>
					</Form.Group>
					<Form.Group controlId="Part" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Part
						</Form.ControlLabel>
						<Form.Control
							accepter={PaperSelection}
							name="part"
							placeholder={`part`}
							value={formik.values.part}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("part", value);
							}}
							readOnly={role == "teacher"}
						/>
					</Form.Group>

					<Form.Group controlId="Paper Count" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Paper Count
						</Form.ControlLabel>
						<Form.Control
							name="paper-count"
							placeholder={`0`}
							value={formik.values.paperCount}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("paperCount", value);
							}}
							size="lg"
							readOnly={role == "teacher"}
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
