import { useState } from "react";
import { FaEllipsis, FaPlus } from "react-icons/fa6";
import TaskCard from "./TaskCard";

const CardSection = ({ SectionName, TaskCardsData }) => {
	const [cards, setCards] = useState(TaskCardsData);
	const AddCard = ({ onClick }) => {
		return (
			<div
				className="w-[312px] h-[32px] bg-gray-200 rounded-xl flex items-center justify-center"
				onClick={onClick}
			>
				<FaPlus className="mx-2" />
				<div className="text-[12px] text-black">Add Card</div>
			</div>
		);
	};
	const addNewCard = () => {
		console.log("clicked");
		setCards([
			{
				status: "accepted",
				courseCode: "CSE",
				semester: "1/1",
				teacher: "EH",
			},
			...cards,
		]);
	};

	SectionName = SectionName.toUpperCase();

	return (
		<div className="w-[360px] h-[840px] bg-gray-100 rounded-xl flex flex-col p-6 ">
			<div className="flex justify-between pb-6">
				<div className="text-sm text-black">{SectionName}</div>
				<div className="flex">
					{/* //TODO: Toggle the visibility of the plus icon according to the role */}
					<FaPlus className="mx-2" onClick={addNewCard} />
					<FaEllipsis />
				</div>
			</div>
			<div className="overflow-x-hidden no-scrollbar">
				{cards.map((card, index) => (
					<TaskCard {...card} key={index} />
				))}
				<AddCard onClick={addNewCard} />
				{/* <button onClick={addNewCard}>Add</button> */}
			</div>
		</div>
	);
};

export default CardSection;
