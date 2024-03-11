import { FaEllipsis, FaPlus } from "react-icons/fa6";
import TaskCard from "./TaskCard";

const CardSection = ({ SectionName, TaskCardsData }) => {
	SectionName = SectionName.toUpperCase();
	return (
		<div className="w-360 h-840 bg-gray-100 rounded-xl flex flex-col p-6 ">
			<div className="flex justify-between pb-6">
				<div className="text-sm text-black">{SectionName}</div>
				<div className="flex">
					{/* //TODO: Toggle the visibility of the plus icon according to the role */}
					<FaPlus className="mx-2" />
					<FaEllipsis />
				</div>
			</div>
			<div className="overflow-x-hidden no-scrollbar">
				{TaskCardsData.map((taskCardData) => (
					<TaskCard {...taskCardData} />
				))}
			</div>
		</div>
	);
};

export default CardSection;
