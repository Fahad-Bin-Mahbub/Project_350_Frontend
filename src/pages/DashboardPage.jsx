import axios from "axios";
import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useAuth } from "../context/Auth.jsx";
import { useSection } from "../context/SectionProvider.jsx";

const DashboardPage = () => {
	const [isOpenPane, setIsOpenPane] = useState(false);
	const { sectionData, updateSectionData } = useSection();
	const [taskCardData, setTaskCardData] = useState([]);
	const [auth] = useAuth();
	const baseUrl = "https://examtrack.up.railway.app";
	const sections = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

	useEffect(() => {
		updateSectionData([]);

		const options = {
			method: "GET",
			url: `${baseUrl}/api/task/get-teacher-tasks`,
		};

		axios.request(options).then((response) => {
			const { status, data } = response;
			const teacher = `${auth.firstName} ${auth.lastName}`;
			if (status == 200) {
				data.map((item) => {
					setTaskCardData(...taskCardData, {
						status: item.status,
						courseCode: item.courseCode,
						semester: item.semester,
						part: item.part,
						paperCount: item.paperCount,
						teacher: teacher,
						dueDate: item.dueDate.split("T")[0],
					});
				});
			}
		});
	}, []);

	return (
		<>
			<div className="bg-blue-950 ">
				<Sidebar>
					<div className=" bg-white rounded-s-badge h-screen min-h-screen overflow-hidden">
						<NavBar />
						<div className=" flex px-3 w-full overflow-x-auto no-scrollbar">
							<Drawer
								open={isOpenPane}
								onClose={() => setIsOpenPane(false)}
								size="md"
							>
								<SlidePane />
							</Drawer>
							{sections.map((section) => (
								<CardSection
									key={section}
									SectionName={section}
									TaskCardsData={taskCardData}
									clickHandler={() => {
										setIsOpenPane(true);
									}}
								/>
							))}
							{sections.length == 0 && (
								<div className="flex items-center justify-center content-center m-auto ">
									<div className="text-2xl text-black">
										Select Session to view tasks
									</div>
								</div>
							)}
						</div>
					</div>
				</Sidebar>
			</div>
			<footer></footer>
		</>
	);
};

export default DashboardPage;
