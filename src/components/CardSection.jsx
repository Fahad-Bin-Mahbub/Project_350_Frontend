import axios from "axios";
import { useEffect, useState } from "react";
import { FaEllipsis, FaPlus } from "react-icons/fa6";
import { useAuth } from "../context/Auth";
import { useNavbarTitle } from "../context/NavbarTitleProvider";
import { useSection } from "../context/SectionProvider";
import { BASE_URL } from "../data/data.js";
import TaskCard from "./TaskCard";

const CardSection = ({ SectionName, TaskCardsData, clickHandler }) => {
	//   console.log(TaskCardsData);
	const [cards, setCards] = useState(TaskCardsData);
	const { navbarTitle } = useNavbarTitle();
	const [session, setSession] = useState();
	const [year, setYear] = useState();
	const { auth } = useAuth();
	const baseUrl = BASE_URL;

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
				status: "Assigned",
				courseCode: "",
				session: session,
				year: year,
				part: "A",
				paperCount: 0,
				teacher: "teacher",
				dueDate: new Date().toISOString().split("T")[0],
				clickHandler: clickHandler,
			},
			...cards,
		]);
	};

	useEffect(() => {
		setCards(TaskCardsData);
	}, [TaskCardsData]);

	useEffect(() => {
		const getSessionData = async () => {
			try {
				const id = auth.user._id;
				const response = await axios.get(
					`${baseUrl}/api/ci/get-session/${id}`,
					{ withCredentials: true }
				);
				const { status, data } = response;
				if (status === 200) {
					setSession(data.data);
				} else {
					console.log("Failed to fetch session");
				}
			} catch (error) {
				console.log("Failed to fetch session", error);
			}
		};

		getSessionData();
		switch (SectionName.toUpperCase()) {
			case "1ST YEAR":
				setYear(1);
				break;
			case "2ND YEAR":
				setYear(2);
				break;
			case "3RD YEAR":
				setYear(3);
				break;
			case "4TH YEAR":
				setYear(4);
				break;
			default:
				break;
		}
	}, []);

	SectionName = SectionName.toUpperCase();
	// console.log(SectionName, year, session);

	return (
		<div className="max-h-[92vh] min-h-[92vh] max-w-full min-w-[360px] bg-[#E9E9E9] rounded-xl flex flex-col p-6 mx-3 mb-6 ">
			<div className="flex justify-between pb-4">
				<div className="text-sm text-black">{SectionName}</div>
				{navbarTitle != "Dashboard" && (
					<div className="flex justify-center content-center items-center">
						<div className="hover:bg-gray-300 rounded-full items-center p-1">
							<FaPlus onClick={addNewCard} />
						</div>
						<div className="hover:bg-gray-300 rounded-full items-center p-1">
							<FaEllipsis />
						</div>
					</div>
				)}
			</div>
			<div className="overflow-y-auto no-scrollbar rounded-xl">
				{cards.map((card, index) => (
					<TaskCard {...card} key={index} clickHandler={clickHandler} />
				))}
				{cards.length == 0 && (
					<div className="flex items-center justify-center ">
						{" "}
						No Cards Available
					</div>
				)}
				{navbarTitle != "Dashboard" && <AddCard onClick={addNewCard} />}
			</div>
		</div>
	);
};

export const AddCardSection = () => {
	const { sectionData, updateSectionData } = useSection();
	// const [newSectionName, setNewSectionName] = useState("New Section");
	return (
		<div
			className="w-10 min-h-[92vh] bg-[#D9D9D9] rounded-xl mb-2 flex hover:bg-[#d9d9d9c7] cursor-pointer"
			onClick={() => {
				updateSectionData(["New Section", ...sectionData]);
			}}
		>
			<FaPlus className="mx-auto mt-7" />
		</div>
	);
};

export default CardSection;
