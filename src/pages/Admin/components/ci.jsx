import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSearch } from "react-icons/bi";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";
import AddCiModal from "../../../components/admin modals/AddCiModal";
import { BASE_URL } from "../../../data/data";

const Ci = () => {
	const baseUrl = BASE_URL;
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

	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`${baseUrl}/api/head/get-all-ci`, {
					withCredentials: true,
				});
				const { status, data } = response;
				console.log(data);

				if (status === 200) {
					const newData = [];
					for (const item of data.data) {
						let name = "";
						let email = "";
						let department = "";
						const userId = item.user;

						const response1 = await axios.get(
							`${baseUrl}/api/user/get-user/${userId}`
						);
						const userData = response1.data.data;
						console.log("userData " + userData);
						console.log(userData);

						name = `${userData.firstName} ${userData.lastName}`;
						email = userData.email;
						const deptId = userData.department;

						const response2 = await axios.get(
							`${baseUrl}/api/head/get-dept/${deptId}`,
							{ withCredentials: true }
						);
						const departmentData = response2.data.data;

						department = departmentData.name;

						newData.push({
							session: item.session,
							name: name,
							email,
							department,
							action: "View",
						});
					}
					setTableData(newData);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	console.log(tableData);

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
				data={tableData}
				selectableRows
				// pagination
			/>
		</div>
	);
};

export default Ci;
