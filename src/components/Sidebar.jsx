import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdLogout, MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";

const Sidebar = ({ children }) => {
	const menus = [
		{ name: "Dashboard", link: "/", icon: MdOutlineDashboard },
		{ name: "Account", link: "/", icon: AiOutlineUser },
		{ name: "Settings", link: "/", icon: RiSettings4Line },
		{ name: "Logout", link: "/", icon: MdLogout },
	];
	const [open, setOpen] = useState(false);
	return (
		<section className="flex min-h-screen">
			<div
				className={`bg-blue-950 flex flex-col justify-center ${
					open ? "w-72" : "w-16"
				} duration-500 text-gray-100 px-4`}
			>
				<div
					className={`flex justify-center mx-auto ${
						open ? "visible" : "hidden"
					}`}
				>
					<div className="w-20 h-20 rounded-full mt-8">
						<img src={logo} />
					</div>
				</div>
				<div className={`py-3 flex justify-end ${!open && "mt-24"}`}>
					<HiMenuAlt3
						size={26}
						className="cursor-pointer"
						onClick={() => setOpen(!open)}
					/>
				</div>
				<div className="mt-4 flex flex-col gap-4 relative">
					{menus?.map((menu, i) => (
						<Link
							to={menu?.link}
							key={i}
							className={` ${
								menu?.margin && "mt-5"
							} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-white hover:text-blue-950 rounded-md`}
						>
							<div>{React.createElement(menu?.icon, { size: "20" })}</div>
							<h2
								style={{
									transitionDelay: `${i}0ms`,
								}}
								className={`whitespace-pre duration-500 ${
									!open && "opacity-0 translate-x-28 overflow-hidden"
								}`}
							>
								{menu?.name}
							</h2>
							<h2
								className={`${
									open && "hidden"
								} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
							>
								{menu?.name}
							</h2>
						</Link>
					))}
				</div>
			</div>
			<div className="h-screen w-full overflow-x-auto">{children}</div>
		</section>
	);
};

export default Sidebar;
