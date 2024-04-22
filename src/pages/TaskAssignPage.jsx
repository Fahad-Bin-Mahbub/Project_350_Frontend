import axios from "axios";
import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useNavbarTitle } from "../context/NavbarTitleProvider.jsx";
import { useSection } from "../context/SectionProvider.jsx";
import { BASE_URL } from "../data/data.js";

const TaskAssignPage = () => {
  const [isOpenPane, setIsOpenPane] = useState(false);
  const { sectionData } = useSection();
  const [taskCardData1, setTaskCardData1] = useState([]);
  const [taskCardData2, setTaskCardData2] = useState([]);
  const [taskCardData3, setTaskCardData3] = useState([]);
  const [taskCardData4, setTaskCardData4] = useState([]);
  console.log(sectionData);
  const sections = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const { navbarTitle, updateNavbarTitle } = useNavbarTitle();
  const baseUrl = BASE_URL;

  useEffect(() => {
    updateNavbarTitle("Assign Tasks");

    axios
      .get(`${baseUrl}/api/task/get-creator-tasks`, { withCredentials: true })
      .then((response) => {
        const { status, data } = response;
        console.log(data.data);
        if (status === 200) {
          data.data.forEach((item) => {
            const taskCardData = {
              status: item.status,
              courseCode: item.courseCode,
              session: item.session,
              part: item.part,
              paperCount: item.paperCount,
              teacher: item.teacher,
              dueDate: item.dueDate.split("T")[0],
            };
            console.log(item.year);
            switch (item.year) {
              case 1:
                setTaskCardData1((prevData) => [...prevData, taskCardData]);
                break;
              case 2:
                setTaskCardData2((prevData) => [...prevData, taskCardData]);
                break;
              case 3:
                setTaskCardData3((prevData) => [...prevData, taskCardData]);
                break;
              case 4:
                setTaskCardData4((prevData) => [...prevData, taskCardData]);
                break;
              default:
                break;
            }
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching teacher tasks:", error);
      });
  }, []);

  console.log(taskCardData1, taskCardData2, taskCardData3, taskCardData4);

  return (
    <>
      <div className="bg-blue-950 ">
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
              {sections.map((section, index) => (
                <CardSection
                  key={section}
                  SectionName={section}
                  TaskCardsData={
                    index === 0
                      ? taskCardData1
                      : index === 1
                      ? taskCardData2
                      : index === 2
                      ? taskCardData3
                      : taskCardData4
                  }
                  clickHandler={() => {
                    setIsOpenPane(true);
                  }}
                />
              ))}
            </div>
          </div>
        </Sidebar>
      </div>
      <footer></footer>
    </>
  );
};

export default TaskAssignPage;
