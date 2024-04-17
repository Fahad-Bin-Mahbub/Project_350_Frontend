import { useEffect, useState } from "react";
import { Drawer } from "rsuite";
import CardSection, { AddCardSection } from "../components/CardSection";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar.jsx";
import SlidePane from "../components/SlidePane.jsx";
import { useAuth } from "../context/Auth.jsx";
import { useSection } from "../context/SectionProvider.jsx";
import { taskCardData } from "../data/data.js";
import axios from "axios";

const DashboardPage = () => {
  const [isOpenPane, setIsOpenPane] = useState(false);
  const { SectionData } = useSection();
  const [taskCardData, setTaskCardData] = useState([]);
  const [auth] = useAuth();
  const baseUrl = "https://examtrack.up.railway.app";

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${baseUrl}/api/task/get-teacher-tasks`,
    };

    axios.request(options).then((response) => {
      const { status, data } = response;
      const teacher = `${auth.firstName} ${auth.lastName}`;
      if (status == 200) {
        data.map((item) => {
          setTaskCardData(...taskCardData, {
            status: item.status,
            courseCode: item.courseCode,
            semester: item.semester,
            part: item.part,
            paperCount: item.paperCount,
            teacher: teacher,
            dueDate: item.dueDate.split("T")[0],
          });
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
              <AddCardSection />
              {SectionData.map((section) => (
                <CardSection
                  key={section}
                  SectionName={section}
                  TaskCardsData={taskCardData}
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

export default DashboardPage;
