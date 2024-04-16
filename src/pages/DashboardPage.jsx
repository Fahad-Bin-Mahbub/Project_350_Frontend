import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection, { AddCardSection } from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useSection } from "../context/SectionProvider.jsx";
import { taskCardData } from "../data/data.js";

const DashboardPage = () => {
	const [isOpenPane, setIsOpenPane] = useState(false);
	const { SectionData } = useSection();

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
							<AddCardSection />
							{SectionData.map((section) => (
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

export default DashboardPage;
