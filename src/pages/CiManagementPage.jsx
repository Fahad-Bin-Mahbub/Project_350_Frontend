import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useNavbarTitle } from "../context/NavbarTitleProvider";
import Ci from "./Admin/components/ci";

const CiManagementPage = () => {
	const { updateNavbarTitle } = useNavbarTitle();
	useEffect(() => {
		updateNavbarTitle("Manage CI");
	}, []);
	return (
		<div className="bg-blue-950 ">
			<Sidebar>
				<div className="w-full h-screen bg-white rounded-s-badge flex-col overflow-hidden">
					<NavBar title="Manage CI" />
					<div className="flex flex-col overflow-auto h-[92%] ">
						<Ci />
					</div>
				</div>
			</Sidebar>
		</div>
	);
};

export default CiManagementPage;
