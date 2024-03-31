import React from "react";
import { FaCalendar } from "react-icons/fa";
import { DatePicker, Dropdown, Popover, SelectPicker } from "rsuite";
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

export const SemesterSelection = React.forwardRef((props, ref) => {
	const data = ["1/1", "1/2", "2/1", "2/2", "3/1", "3/2", "4/1", "4/2"].map(
		(item) => ({ label: item, value: item })
	);
	return <SelectPicker {...props} data={data} block size="lg" ref={ref} />;
});

export const PaperSelection = React.forwardRef((props, ref) => {
	const data = ["A", "B"].map((item) => ({ label: item, value: item }));
	return <SelectPicker {...props} data={data} block size="lg" ref={ref} />;
});

export const MenuPopover = React.forwardRef(({ onSelect, ...rest }, ref) => (
	<Popover ref={ref} {...rest} full>
		<Dropdown.Menu onSelect={onSelect}>
			<Dropdown.Item eventKey="checked">
				<StatusTag status="checked" />
			</Dropdown.Item>
			<Dropdown.Item eventKey="submitted">
				<StatusTag status="submitted" />
			</Dropdown.Item>
			<Dropdown.Item eventKey="on going">
				<StatusTag status="On going" />
			</Dropdown.Item>
			<Dropdown.Item eventKey="accepted">
				<StatusTag status="accepted" />
			</Dropdown.Item>
		</Dropdown.Menu>
	</Popover>
));
