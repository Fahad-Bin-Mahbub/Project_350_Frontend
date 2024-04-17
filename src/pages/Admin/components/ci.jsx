import DataTable from "react-data-table-component";
import { BiSearch } from "react-icons/bi";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import AddCiModal from "../../../components/admin modals/AddCiModal";
const Ci = () => {
	const columns = [
		{
			name: "Session",
			selector: (row) => row.courseCode,
		},
		{
			name: "Name",
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
			courseCode: "2024-1",
			assignee: "Enam Hossain",
			email: "enamhossain@student.sust.edu",
			department: "CSE",
			action: "View",
		},
		{
			courseCode: "2023-2",
			assignee: "Enam Hossain",
			email: "enamhossain@student.sust.edu",
			department: "CSE",
			action: "View",
		},
	];
	return (
		<div className="w-full p-10 flex flex-col gap-4">
			<div className="flex items-center justify-between p-3">
				<div>
					<div className="font-bold font-inter text-black text-[20px]">
						Manage Chief Invigilator
					</div>
					<div className="text-black text-sm">
						Here is a list of all Chief Invigilator
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
					{/* <AddDepartmentModal></AddDepartmentModal> */}
					<AddCiModal />
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

export default Ci;