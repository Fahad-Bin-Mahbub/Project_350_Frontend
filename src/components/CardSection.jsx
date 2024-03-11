import { useState } from "react";
import { FaEllipsis, FaPlus } from "react-icons/fa6";
import TaskCard from "./TaskCard";

const AddCard = () => {
	return (
		<div className="w-312 h-32 bg-gray-200 rounded-xl flex items-center justify-center">
			<FaPlus className="mx-2" />
			<div className="text-12 text-black">Add Card</div>
		</div>
	);
};

const CardSection = ({ SectionName, TaskCardsData }) => {
	const addNewCard = () => {
		setCards([
			...cards,
			{
				status: "accepted",
				courseCode: "CSE103",
				semester: "1/1",
				teacher: "EH",
			},
		]);
	};

	SectionName = SectionName.toUpperCase();

	const [cards, setCards] = useState(TaskCardsData);

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
				{cards.map((card) => (
					<TaskCard {...card} />
				))}
				<AddCard onclick={addNewCard} />
			</div>
		</div>
	);
};

export default CardSection;
