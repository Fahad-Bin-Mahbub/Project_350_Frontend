import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import { taskCardData } from "../data/data.js";
import Sidebar from "../pages/Sidebar";
const DashboardPage = () => {
	return (
		<>
			<header></header>
			<main className="flex bg-[#F2F2F2] w-full ">
				<Sidebar />
				<div className="w-full h-screen flex-col overflow-hidden">
					<NavBar />
					<div className=" flex overflow-auto">
						<div className="h-screen flex">
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
			</main>
			<footer></footer>
		</>
	);
};

export default DashboardPage;
