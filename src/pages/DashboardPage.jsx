import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import { taskCardData } from "../data/data.js";
const DashboardPage = () => {
	return (
		<>
			<div className="bg-blue-950">
				<Sidebar>
					<div className="w-[1463px] h-screen bg-white rounded-s-badge flex-col">
						<NavBar />
						<div className=" flex overflow-auto pl-3">
							<div className="flex">
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
								<CardSection
									TaskCardsData={taskCardData}
									SectionName={"All cards"}
								/>
							</div>
						</div>
					</div>
				</Sidebar>
			</div>
			<footer></footer>
		</>
	);
};

export default DashboardPage;
