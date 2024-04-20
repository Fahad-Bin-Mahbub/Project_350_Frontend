import { useFormik } from "formik";
import React from "react";
import { PiImageSquareLight } from "react-icons/pi";
import { Button, Drawer, Form, IconButton, Whisper } from "rsuite";
import { useAuth } from "../context/Auth";
import { useNavbarTitle } from "../context/NavbarTitleProvider";
import { useTaskCard } from "../context/TaskCardProvider";
import Comments from "./Comments";
import {
	Datepicker,
	MenuPopover,
	PaperSelection,
	SessionSelection,
	TeacherSelection,
} from "./SlidePaneFormComponents";
import StatusTag from "./StatusTag";

const SlidePane = () => {
	const { taskCardData } = useTaskCard();
	const [changed, setChanged] = React.useState(false);
	const { status, courseCode, session, part, paperCount, teacher, dueDate } =
		taskCardData;
	const { auth } = useAuth();

	// console.log(auth.user);
	// const isAdmin = auth.user.roles.includes("admin");
	// const isHead = auth.user.roles.includes("department_head");
	// const isCI = auth.user.roles.includes("ci");
	// const isTeacher = auth.user.roles.includes("teacher");
	const { navbarTitle } = useNavbarTitle();
	const isDashboard = navbarTitle === "Dashboard";

	const formik = useFormik({
		initialValues: {
			status: status,
			courseCode: courseCode,
			session: session,
			part: part,
			paperCount: paperCount,
			//TODO: ekhane teacher er id pass korba
			teacher: teacher,
			date: dueDate,
		},
		onSubmit: (values) => {},
	});
	// console.log(session);

	// console.log(formik.values.session);

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
					{!isDashboard ? (
						<StatusTag status={formik.values.status} />
					) : (
						<Whisper
							placement="rightStart"
							trigger="click"
							ref={tempRef}
							speaker={<MenuPopover onSelect={handleStatusSelection} />}
						>
							<IconButton icon={<StatusTag status={formik.values.status} />} />
						</Whisper>
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
							className="h-24 text-5xl font-medium focus:outline-none border-none focus:border-none text-opacity-50"
							readOnly={isDashboard}
						/>
					</Form.Group>
					<Form.Group controlId="assignee" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl">
							Assignee
						</Form.ControlLabel>
						<Form.Control
							accepter={TeacherSelection}
							name="Assignee"
							placeholder={`Assign Teacher`}
							value={formik.values.teacher}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("teacher", value);
								//TODO: ekhane value return korbe id oita theke teacher er nam ber korba
								console.log(value);
							}}
							size="lg"
							readOnly={isDashboard}
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
							readOnly={isDashboard}
						/>
					</Form.Group>

					<Form.Group controlId="session" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Session
						</Form.ControlLabel>
						<Form.Control
							accepter={SessionSelection}
							name="session"
							placeholder={`Select Session`}
							value={formik.values.session}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("session", value);
							}}
							readOnly={isDashboard}
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
							readOnly={isDashboard}
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
							readOnly={isDashboard}
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
