import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Button, Drawer, Form, IconButton, Whisper } from "rsuite";
import { useAuth } from "../context/Auth";
import { useNavbarTitle } from "../context/NavbarTitleProvider";
import { useTaskCard } from "../context/TaskCardProvider";
import { BASE_URL } from "../data/data";
import Comments from "./Comments";
import {
	Datepicker,
	MenuPopover,
	PaperSelection,
	SessionSelection,
	TeacherSelection,
} from "./SlidePaneFormComponents";
import StatusTag from "./StatusTag";

const SlidePane = ({ closeHandler }) => {
	const { taskCardData } = useTaskCard();
	const [changed, setChanged] = React.useState(false);
	const [isNewCard, setIsNewCard] = useState(true);
	const {
		status,
		year,
		courseCode,
		session,
		part,
		paperCount,
		teacher,
		dueDate,
	} = taskCardData;
	const { auth } = useAuth();
	const baseUrl = BASE_URL;

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
			teacher: teacher._id,
			date: dueDate,
		},
		onSubmit: (values) => {},
	});

	// console.log(formik.values.session);

	const tempRef = React.useRef();
	const handleStatusSelection = (status) => {
		// setChanged(true);
		formik.setFieldValue("status", status);
		// TODO: call api to update status
		tempRef.current.close();
	};

	const handleCreateCard = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`${baseUrl}/api/task/create`,
				{
					status: formik.values.status,
					courseCode: formik.values.courseCode,
					session: formik.values.session,
					part: formik.values.part,
					paperCount: formik.values.paperCount,
					teacher: formik.values.teacher,
					year: year,
					dueDate: formik.values.date,
				},
				{
					withCredentials: true,
				}
			);

			const { status } = response;
			if (status === 201) {
				toast.success("Task assigned successfully");
				setChanged(false);
				setIsNewCard(false);
			} else {
				toast.error("Could not assign task");
			}
		} catch (error) {
			toast.error("Could not assign task");
		}
		closeHandler(false);
	};

	const handleSaveChanges = async (e) => {
		//TODO: save changes to the database and API call
		e.preventDefault();
		try {
			const checkResponse = await axios.get(
				`${baseUrl}/api/task/get-unique-task`,
				{
					params: {
						courseCode: courseCode,
						part: part,
						session: session,
					},
					withCredentials: true,
				}
			);
			console.log(courseCode, part, session, checkResponse.status);
			if (checkResponse.status === 200) {
				const id = checkResponse.data.data._id;
				const response = await axios.put(
					`${baseUrl}/api/task/update/${id}`,
					{
						status: formik.values.status,
						courseCode: formik.values.courseCode,
						session: formik.values.session,
						part: formik.values.part,
						paperCount: formik.values.paperCount,
						teacher: formik.values.teacher,
						year: year,
						dueDate: formik.values.date,
					},
					{
						withCredentials: true,
					}
				);
				if (response.status === 200) {
					toast.success("Task updated successfully");
					setChanged(false);
				} else {
					toast.error("Could not update task");
				}
			} else {
				toast.error("Could not update task");
			}
		} catch (error) {
			toast.error("Could not update task");
		}
		closeHandler(false);
	};

	useEffect(() => {
		// console.log("teacher = " + teacher);
		setIsNewCard(typeof teacher === "string");
	}, []);

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
					{isNewCard ? (
						<Button onClick={handleCreateCard} appearance="subtle">
							Assign Task
						</Button>
					) : (
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
							placeholder={`Enter Course Code`}
							value={formik.values.courseCode}
							onChange={(value) => {
								setChanged(true);
								formik.setFieldValue("courseCode", value);
							}}
							className="h-24 text-5xl  font-medium focus:outline-none border-none focus:border-none text-opacity-50"
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
							readOnly
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
