import React, { useEffect, useState } from "react";
import ClosedSidebar from "../components/ClosedSidebar";
import OpenSidebar from "../components/OpenSidebar";

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		const closeSidebarOnOutsideClick = (event) => {
			if (isOpen && !event.target.closest(".menu")) {
				setIsOpen(false);
			}
		};
		document.body.addEventListener("click", closeSidebarOnOutsideClick);
		return () => {
			document.body.removeEventListener("click", closeSidebarOnOutsideClick);
		};
	}, [isOpen]);
	return (
		<div>
			{isOpen ? (
				<OpenSidebar toggleSidebar={toggleSidebar} />
			) : (
				<ClosedSidebar toggleSidebar={toggleSidebar} />
			)}
		</div>
	);
};

export default Sidebar;
