import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import { taskCardData } from "../data/data.js";
const DashboardPage = () => {
	return (
		<>
			<div className="bg-blue-950 w-screen">
				<Sidebar>
					<div className=" bg-white rounded-s-badge h-screen min-h-screen overflow-hidden">
						<NavBar />
						<div className=" flex px-3 w-full overflow-x-auto no-scrollbar">
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
							{/* <CardSection
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
							/> */}
						</div>
					</div>
				</Sidebar>
			</div>
			<footer></footer>
		</>
	);
};

export default DashboardPage;
