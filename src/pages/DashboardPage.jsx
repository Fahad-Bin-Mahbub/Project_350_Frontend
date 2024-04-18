import axios from "axios";
import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useAuth } from "../context/Auth.jsx";
import { useSection } from "../context/SectionProvider.jsx";

const DashboardPage = () => {
  const [isOpenPane, setIsOpenPane] = useState(false);
  const { sectionData, updateSectionData } = useSection();
  const [all, setAll] = useState();
  const [taskCardData1, setTaskCardData1] = useState([]);
  const [taskCardData2, setTaskCardData2] = useState([]);
  const [taskCardData3, setTaskCardData3] = useState([]);
  const [taskCardData4, setTaskCardData4] = useState([]);
  const [auth] = useAuth();
  const baseUrl = "https://examtrack.up.railway.app";
  const sections = ["1st Year", "2nd Year", "3rd Year", "4th Year"];

  useEffect(() => {
    updateSectionData([]);

    const options = {
      method: "GET",
      url: `${baseUrl}/api/task/get-teacher-tasks`,
    };

    axios.request(options).then((response) => {
      const { status, data } = response;
      if (status == 200) {
        setAll(data.data);
      }
    });

    console.log(all);
    const teacher = `${auth.firstName} ${auth.lastName}`;

    all.map((item) => {
      if (item.year == 1) {
        setTaskCardData1(...taskCardData1, {
          status: item.status,
          courseCode: item.courseCode,
          part: item.part,
          paperCount: item.paperCount,
          teacher: teacher,
          dueDate: item.dueDate.split("T")[0],
        });
      } else if (item.year == 2) {
        setTaskCardData2(...taskCardData2, {
          status: item.status,
          courseCode: item.courseCode,
          part: item.part,
          paperCount: item.paperCount,
          teacher: teacher,
          dueDate: item.dueDate.split("T")[0],
        });
      } else if (item.year == 3) {
        setTaskCardData3(...taskCardData3, {
          status: item.status,
          courseCode: item.courseCode,
          part: item.part,
          paperCount: item.paperCount,
          teacher: teacher,
          dueDate: item.dueDate.split("T")[0],
        });
      } else {
        setTaskCardData4(...taskCardData4, {
          status: item.status,
          courseCode: item.courseCode,
          part: item.part,
          paperCount: item.paperCount,
          teacher: teacher,
          dueDate: item.dueDate.split("T")[0],
        });
      }
    });
  }, []);

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
              {sections.map((section, index) => {
                if (index == 0) {
                  <CardSection
                    key={section}
                    SectionName={section}
                    TaskCardsData={taskCardData1}
                    clickHandler={() => {
                      setIsOpenPane(true);
                    }}
                  />;
                } else if (index == 1) {
                  <CardSection
                    key={section}
                    SectionName={section}
                    TaskCardsData={taskCardData2}
                    clickHandler={() => {
                      setIsOpenPane(true);
                    }}
                  />;
                } else if (index == 2) {
                  <CardSection
                    key={section}
                    SectionName={section}
                    TaskCardsData={taskCardData3}
                    clickHandler={() => {
                      setIsOpenPane(true);
                    }}
                  />;
                } else {
                  <CardSection
                    key={section}
                    SectionName={section}
                    TaskCardsData={taskCardData4}
                    clickHandler={() => {
                      setIsOpenPane(true);
                    }}
                  />;
                }
              })}
              {sections.length == 0 && (
                <div className="flex items-center justify-center content-center m-auto ">
                  <div className="text-2xl text-black">
                    Select Session to view tasks
                  </div>
                </div>
              )}
            </div>
          </div>
        </Sidebar>
      </div>
      <footer></footer>
    </>
  );
};

export default DashboardPage;
