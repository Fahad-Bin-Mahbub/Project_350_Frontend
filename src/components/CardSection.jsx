import { useEffect, useState } from "react";
import { FaEllipsis, FaPlus } from "react-icons/fa6";
import { useNavbarTitle } from "../context/NavbarTitleProvider";
import { useSection } from "../context/SectionProvider";
import TaskCard from "./TaskCard";

const CardSection = ({ SectionName, TaskCardsData, clickHandler }) => {
  //   console.log(TaskCardsData);
  const [cards, setCards] = useState(TaskCardsData);
  const { navbarTitle } = useNavbarTitle();
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

  useEffect(() => {
    setCards(TaskCardsData);
  }, [TaskCardsData]);

  SectionName = SectionName.toUpperCase();
  console.log(cards);

  return (
    <div className="max-h-[92vh] min-h-[92vh] max-w-[360px] min-w-[360px] bg-[#E9E9E9] rounded-xl flex flex-col p-6 mx-3 mb-6 ">
      <div className="flex justify-between pb-4">
        <div className="text-sm text-black">{SectionName}</div>
        {navbarTitle != "Dashboard" && (
          <div className="flex justify-center content-center items-center">
            {/* //TODO: Toggle the visibility of the plus icon according to the role */}
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
  const [newSectionName, setNewSectionName] = useState("New Section");
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
