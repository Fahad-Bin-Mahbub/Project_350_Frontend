import axios from "axios";
import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useAuth } from "../context/Auth.jsx";
import { useNavbarTitle } from "../context/NavbarTitleProvider.jsx";
import { useSection } from "../context/SectionProvider.jsx";
import { BASE_URL } from "../data/data.js";

const DashboardPage = () => {
	const [isOpenPane, setIsOpenPane] = useState(false);
	const { sectionData, updateSectionData } = useSection();
	const [taskCardData1, setTaskCardData1] = useState([]);
	const [taskCardData2, setTaskCardData2] = useState([]);
	const [taskCardData3, setTaskCardData3] = useState([]);
	const [taskCardData4, setTaskCardData4] = useState([]);
	const { auth } = useAuth();
	const { navbarTitle, updateNavbarTitle } = useNavbarTitle();
	// const baseUrl = "https://examtrack.up.railway.app";
	// const baseUrl = "http://localhost:5000";
	const baseUrl = BASE_URL;
	const sections = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

	useEffect(() => {
		updateSectionData([]);
		updateNavbarTitle("Dashboard");
		console.log(JSON.stringify(auth));

		axios
			.get(`${baseUrl}/api/task/get-teacher-tasks`, { withCredentials: true })
			.then((response) => {
				const { status, data } = response;
				console.log(data.data);
				if (status === 200) {
					data.data.forEach((item) => {
						const taskCardData = {
							id: item._id,
							status: item.status,
							courseCode: item.courseCode,
							session: item.session,
							part: item.part,
							paperCount: item.paperCount,
							teacher: item.teacher,
							dueDate: item.dueDate.split("T")[0],
						};
						// console.log(taskCardData);
						console.log(item.year);
						switch (item.year) {
							case 1:
								setTaskCardData1((prevData) => [...prevData, taskCardData]);
								break;
							case 2:
								setTaskCardData2((prevData) => [...prevData, taskCardData]);
								break;
							case 3:
								setTaskCardData3((prevData) => [...prevData, taskCardData]);
								break;
							case 4:
								setTaskCardData4((prevData) => [...prevData, taskCardData]);
								break;
							default:
								break;
						}
					});
				}
			})
			.catch((error) => {
				console.error("Error fetching teacher tasks:", error);
			});
	}, []);
	// console.log("TaskCardData1", taskCardData1);
	// console.log("TaskCardData2", taskCardData2);
	// console.log("TaskCardData3", taskCardData3);
	// console.log("TaskCardData4", taskCardData4);
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
								<SlidePane closeHandler={setIsOpenPane} />
							</Drawer>
							{sections.map((section, index) => (
								<CardSection
									key={section}
									SectionName={section}
									TaskCardsData={
										index === 0
											? taskCardData1
											: index === 1
											? taskCardData2
											: index === 2
											? taskCardData3
											: taskCardData4
									}
									clickHandler={() => {
										setIsOpenPane(true);
									}}
								/>
							))}
							{sections.length === 0 && (
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
