import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSearch } from "react-icons/bi";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import AddDepartmentModal from "../../../components/admin modals/AddDepartmentModal";
const Department = () => {
  // UI-guys: all department listed in departments. Console log departments to see data format.
  const [departments, setDepartments] = useState([]);
  const baseUrl = "https://examtrack.up.railway.app";

  useEffect(() => {
    const options = {
      method: "GET",
      url: `${baseUrl}/api/admin/get-all-departments`,
    };

    axios.request(options).then((response) => {
      const { status, data } = response;
      if (status == 200) {
        data.map((item) => {
          setDepartments(...departments, item.name);
        });
        console.log(departments);
      }
    });
  }, []);

  const columns = [
    {
      name: "Course Code",
      selector: (row) => row.courseCode,
    },
    {
      name: "Assignee",
      selector: (row) => row.assignee,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <div className="flex">
            <LiaEditSolid size={20} />
            <MdDeleteOutline size={20} />
          </div>
        );
      },
    },
  ];
  const data = [
    {
      courseCode: "CSE 101",
      assignee: "Enam Hossain",
      email: "enamhossain@student.sust.edu",
      department: "CSE",
      role: "Teacher",
      action: "View",
    },
    {
      courseCode: "CSE 102",
      assignee: "Enam Hossain",
      email: "enamhossain@student.sust.edu",
      department: "CSE",
      role: "Teacher",
      action: "View",
    },
  ];
  return (
    <div className="w-full p-10 flex flex-col gap-4">
      <div className="flex items-center justify-between p-3">
        <div>
          <div className="font-bold font-inter text-black text-[20px]">
            Departments
          </div>
          <div className="text-black text-sm">
            Here is a list of all task cards
          </div>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          <div className="pt-2 relative mx-auto text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-10 p-3 rounded-full text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <BiSearch className="absolute right-0 top-0 mt-5 mr-4" />
          </div>
          {/* <Button className="w-44" title="Add Department" /> */}
          <AddDepartmentModal></AddDepartmentModal>
        </div>
      </div>
      <DataTable
        columns={columns}
        className=" min-h-fit-content"
        customStyles={{
          rows: {
            style: {
              position: "relative",
              paddingTop: "20px",
              paddingBottom: "20px",
            },
          },
          headRow: {
            style: {
              backgroundColor: "#E3E9ED",
              color: "#2F4551",
            },
          },
        }}
        data={data}
        selectableRows
        // pagination
      />
    </div>
  );
};

export default Department;
