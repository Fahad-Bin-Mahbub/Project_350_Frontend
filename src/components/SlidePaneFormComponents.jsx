import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { DatePicker, Dropdown, Popover, SelectPicker } from "rsuite";
import { useAuth } from "../context/Auth";
import { BASE_URL } from "../data/data.js";
import MenuItem from "./MenuItem";
import StatusTag from "./StatusTag";

export const Datepicker = React.forwardRef((props, ref) => (
	<DatePicker
		oneTap
		block
		size="lg"
		format="dd-MM-yyyy"
		{...props}
		caretAs={FaCalendar}
		ref={ref}
		placeholder="Due Date"
	/>
));

Datepicker.displayName = "Datepicker";

export const SessionSelection = React.forwardRef((props, ref) => {
	const data = [
		"2024-2",
		"2024-1",
		"2023-2",
		"2023-1",
		"2022-2",
		"2022-1",
		"2021-2",
		"2021-1",
	].map((item) => ({
		label: item,
		value: item,
	}));
	return (
		<SelectPicker {...props} data={data} block size="lg" ref={ref} readOnly />
	);
});

SessionSelection.displayName = "SessionSelection";

export const PaperSelection = React.forwardRef((props, ref) => {
	const data = ["A", "B"].map((item) => ({ label: item, value: item }));
	return (
		<SelectPicker
			{...props}
			data={data}
			block
			size="lg"
			ref={ref}
			searchable={false}
		/>
	);
});
PaperSelection.displayName = "PaperSelection";

export const MenuPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
	<Popover ref={ref} {...rest} full>
		<Dropdown.Menu onSelect={onSelect}>
			{/* <Dropdown.Item eventKey="checked">
				<StatusTag status="checked" />
			</Dropdown.Item> */}
			<Dropdown.Item eventKey="submitted">
				<StatusTag status="submitted" />
			</Dropdown.Item>
			<Dropdown.Item eventKey="on going">
				<StatusTag status="On going" />
			</Dropdown.Item>
			<Dropdown.Item eventKey="assigned">
				<StatusTag status="assigned" />
			</Dropdown.Item>
		</Dropdown.Menu>
	</Popover>
));
MenuPopover.displayName = "MenuPopover";

export const TeacherSelection = React.forwardRef((props, ref) => {
	const [teacherData, setTeacherData] = useState([]);
	const { auth } = useAuth();
	const deptId = auth.user.department;
	const baseUrl = BASE_URL;

	//   console.log(deptId);

	useEffect(() => {
		const fetchTeacherData = async () => {
			try {
				const response = await axios.get(
					`${baseUrl}/api/admin/get-all-teachers`,
					{ withCredentials: true }
				);
				const { status, data } = response;
				console.log(status, data.data);
				if (status === 200) {
					setTeacherData(
						data.data.map((item) => ({
							email: item.email,
							name: `${item.firstName} ${item.lastName}`,
							imageUrl: item.photo,
							label: `${item.firstName} ${item.lastName}`,
							value: item._id,
						}))
					);
				} else {
					console.error("Failed to fetch teacher data");
				}
			} catch (error) {
				console.error("Error fetching teacher data:", error);
			}
		};

		fetchTeacherData();
	}, []);

	return (
		<SelectPicker
			{...props}
			data={teacherData}
			block
			size="lg"
			ref={ref}
			renderMenuItem={(label, item) => {
				// console.log(item);
				return (
					<MenuItem
						name={item.name}
						email={item.email}
						imageUrl={item.imageUrl}
					/>
				);
			}}
		/>
	);
});

TeacherSelection.displayName = "TeacherSelection";
