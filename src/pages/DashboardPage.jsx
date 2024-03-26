import { useState } from "react";
import { Drawer } from "rsuite";
import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { taskCardData } from "../data/data.js";

const DashboardPage = () => {
	const [isOpenPane, setIsOpenPane] = useState(false);

	return (
		<>
			<div className="bg-blue-950 w-screen">
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
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
								clickHandler={() => {
									setIsOpenPane(true);
								}}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
							<CardSection
								TaskCardsData={taskCardData}
								SectionName={"All cards"}
							/>
						</div>
					</div>
				</Sidebar>
			</div>
			<footer></footer>
		</>
	);
};

export default DashboardPage;
