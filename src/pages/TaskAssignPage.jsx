import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection, { AddCardSection } from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useNavbarTitle } from "../context/NavbarTitleProvider.jsx";
import { useSection } from "../context/SectionProvider.jsx";
import { taskCardData } from "../data/data.js";
import(useNavbarTitle);

const TaskAssignPage = () => {
	const [isOpenPane, setIsOpenPane] = useState(false);
	const { sectionData } = useSection();
	console.log(sectionData);
	const sections = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
	const { navbarTitle, updateNavbarTitle } = useNavbarTitle();
	useEffect(() => {
		updateNavbarTitle("Assign Tasks");
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
							{sections?.map((section) => (
								<CardSection
									key={section}
									SectionName={section}
									TaskCardsData={taskCardData}
									clickHandler={() => {
										setIsOpenPane(true);
									}}
								/>
							))}
						</div>
					</div>
				</Sidebar>
			</div>
			<footer></footer>
		</>
	);
};

export default TaskAssignPage;
