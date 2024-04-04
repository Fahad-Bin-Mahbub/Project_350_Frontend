import { useState } from "react";
import { FaEllipsis, FaPlus } from "react-icons/fa6";
import TaskCard from "./TaskCard";

const CardSection = ({ SectionName, TaskCardsData, clickHandler }) => {
	const [cards, setCards] = useState(TaskCardsData);
	const AddCard = ({ onClick }) => {
		return (
			<div
				className="w-[312px] h-[32px] bg-[#D9D9D9] rounded-xl flex items-center justify-center mb-2"
				onClick={onClick}
			>
				<FaPlus className="mx-2" />
				<div className="text-[12px] text-black">Add Card</div>
			</div>
		);
	};
	const addNewCard = () => {
		setCards([
			{
				//TODO: Determine and add appropriate default values for the new card
				status: "Accepted",
				courseCode: "Course Code",
				semester: "1/1",
				part: "A",
				paperCount: 0,
				teacher: "Teacher Name",
				dueDate: new Date().toISOString().split("T")[0],
				clickHandler: clickHandler,
			},
			...cards,
		]);
	};

	SectionName = SectionName.toUpperCase();

	return (
		<div className="max-h-[92vh] min-h-[92vh] max-w-[360px] bg-[#E9E9E9] rounded-xl flex flex-col p-6 mx-3 mb-6 ">
			<div className="flex justify-between pb-4">
				<div className="text-sm text-black">{SectionName}</div>
				<div className="flex">
					{/* //TODO: Toggle the visibility of the plus icon according to the role */}
					<FaPlus className="mx-2" onClick={addNewCard} />
					<FaEllipsis />
				</div>
			</div>
			<div className="overflow-y-auto no-scrollbar rounded-xl">
				{cards.map((card, index) => (
					<TaskCard {...card} key={index} clickHandler={clickHandler} />
				))}
				<AddCard onClick={addNewCard} />
			</div>
		</div>
	);
};

export default CardSection;
