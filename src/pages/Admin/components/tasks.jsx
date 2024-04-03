import DataTable from "react-data-table-component";
// import Button from "../../../components/Button";
import { LiaEditSolid } from "react-icons/lia";
import { BiSearch } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import AddTaskModal from "../../../components/admin modals/AddTaskModal";
import { useState } from 'react';
const Tasks = () => {
	// const [isModalOpen, setIsModalOpen] = useState(false);

	// const toggleModal = () => {
	// 	setIsModalOpen(!isModalOpen);
	// };
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
						Tasks
					</div>
					<div className="text-black text-sm">
						Here is a list of all task cards
					</div>
				</div>
				<div className="flex gap-4 items-center flex-wrap">
					<div className="pt-2 mx-auto text-gray-600">
						<input
							className="border-2 border-gray-300 bg-white h-10 p-3 rounded-full text-sm focus:outline-none"
							type="search"
							name="search"
							placeholder="Search"
						/>
					</div>
					{/* <Button className="btn w-44" title="Add Task" /> */}
					<AddTaskModal></AddTaskModal>
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

export default Tasks;
