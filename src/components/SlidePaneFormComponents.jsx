import React, { useEffect } from "react";
import { FaCalendar } from "react-icons/fa";
import { DatePicker, Dropdown, Popover, SelectPicker } from "rsuite";
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
	const data = [
		{
			id: "0269648",
			name: "Ayesha Tasnim",
			email: "ayesha@teacher.sust.edu",
			imageUrl: "https://random-image-pepebigotes.vercel.app/api/random-image",
		},
		{
			id: "029128",
			name: "Farida Chowdhury",
			email: "farida@teacher.sust.edu",
			imageUrl: "https://random-image-pepebigotes.vercel.app/api/random-image",
		},
		{
			id: "129368",
			name: "Ishtiak Zahid",
			email: "ishtiak@teacher.sust.edu",
			imageUrl: "https://random-image-pepebigotes.vercel.app/api/random-image",
		},
		{
			id: "914862",
			name: "Enamul Haque",
			email: "enamul@teacher.sust.edu",
			imageUrl: "https://random-image-pepebigotes.vercel.app/api/random-image",
		},
	].map((item) => ({
		email: item.email,
		name: item.name,
		imageUrl: item.imageUrl,
		label: item.name,
		value: item.id,
	}));
	return (
		<SelectPicker
			{...props}
			data={data}
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
