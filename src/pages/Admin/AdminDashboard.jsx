import React, { useState } from "react";
import NavBar from "./../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import "./AdminDashboard.css";
import AddTeacherModal from "../../components/admin modals/AddTeacherModal";
import DataTable from "react-data-table-component";

const AdminDashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

    const columns=[
        {
            name: "Course Code",
            selector:(row)=> row.courseCode,
        },
        {
            name: "Assignee",
            selector:(row)=> row.assignee,
        },
        {
            name: "Email Address",
            selector:(row)=> row.email,
        },
        {
            name: "Department",
            selector:(row)=> row.department,
        },
        {
            name: "Role",
            selector:(row)=> row.role,
        },
        {
            name: "Action",
            selector:(row)=> row.action,
        },
    ]
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
	const openModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>
			<div className="h-full">
				<NavBar />
				<div className="flex h-[100vh] admin-dashboard">
					<Sidebar />
					{/* className="flex-grow flex flex-col justify-center items-center" */}
					<div className="m-8">
						<section className="task-section w-[1130px]">
							<div className="flex justify-between">
								<div>
									<h3 className="text-2xl font-semibold">Tasks</h3>
									<h5 className="text-base font-normal">
										Here is a list of all task cards
									</h5>
								</div>
								<div className="flex gap-4">
									<div>
										<label className="input input-bordered flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="currentColor"
												className="w-4 h-4 opacity-70"
											>
												<path
													fillRule="evenodd"
													d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
													clipRule="evenodd"
												/>
											</svg>
											<input
												type="text"
												className="grow"
												placeholder="Search"
											/>
										</label>
									</div>
									<div>
										<button className="btn bg-[#0A2463] text-white w-[160px] rounded-2xl">
											Add task
										</button>
									</div>
								</div>
							</div>
							<div>
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
									// pagination
								/>
							</div>
							<div className="task-table-container">
								<div className="overflow-x-auto mt-4">
									<table className="table">
										{/* head */}
										<thead>
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<th>Course Code</th>
												<th>Assignee </th>
												<th>Email Address</th>
												<th>Department</th>
												<th>Role</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{/* row 1 */}
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<td>
													<div className="flex items-center gap-3">
														<div className="avatar">
															<div className="mask mask-squircle w-12 h-12">
																<img
																	src="/tailwind-css-component-profile-2@56w.png"
																	alt="Avatar Tailwind CSS Component"
																/>
															</div>
														</div>
														<div>
															<div className="font-bold">Hart Hagerty</div>
															<div className="text-sm opacity-50">
																United States
															</div>
														</div>
													</div>
												</td>
												<td>
													Zemlak, Daniel and Leannon
													<br />
													<span className="badge badge-ghost badge-sm">
														Desktop Support Technician
													</span>
												</td>
												<td>Purple</td>
												<th>
													<button className="btn btn-ghost btn-xs">
														details
													</button>
												</th>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>
						{/* department  section*/}
						<section className="department-section w-[1130px]">
							<div className="flex justify-between">
								<div>
									<h3 className="text-2xl font-semibold">Department</h3>
									<h5 className="text-base font-normal">
										Here is a list of all departments
									</h5>
								</div>
								<div className="flex gap-4">
									<div>
										<label className="input input-bordered flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="currentColor"
												className="w-4 h-4 opacity-70"
											>
												<path
													fillRule="evenodd"
													d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
													clipRule="evenodd"
												/>
											</svg>
											<input
												type="text"
												className="grow"
												placeholder="Search"
											/>
										</label>
									</div>
									<div>
										<button className="btn bg-[#0A2463] text-white w-[160px] rounded-2xl">
											Add department
										</button>
									</div>
								</div>
							</div>
							<div className="department-table-container">
								<div className="overflow-x-auto mt-4">
									<table className="table">
										{/* head */}
										<thead>
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<th>Department</th>
												<th>Department Head</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{/* row 1 */}
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<td>
													<div className="flex items-center gap-3">
														<div className="avatar">
															<div className="mask mask-squircle w-12 h-12">
																<img
																	src="/tailwind-css-component-profile-2@56w.png"
																	alt="Avatar Tailwind CSS Component"
																/>
															</div>
														</div>
														<div>
															<div className="font-bold">Hart Hagerty</div>
															<div className="text-sm opacity-50">
																United States
															</div>
														</div>
													</div>
												</td>
												<td>
													Zemlak, Daniel and Leannon
													<br />
													<span className="badge badge-ghost badge-sm">
														Desktop Support Technician
													</span>
												</td>
												<td>Purple</td>
												<th>
													<button className="btn btn-ghost btn-xs">
														details
													</button>
												</th>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>
						{/* teacher section*/}
						<section className="teacher-section w-[1130px]">
							<div className="flex justify-between">
								<div>
									<h3 className="text-2xl font-semibold">Teachers</h3>
									<h5 className="text-base font-normal">
										Here is a list of all teachers
									</h5>
								</div>
								<div className="flex gap-4">
									<div>
										<label className="input input-bordered flex items-center gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 16 16"
												fill="currentColor"
												className="w-4 h-4 opacity-70"
											>
												<path
													fillRule="evenodd"
													d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
													clipRule="evenodd"
												/>
											</svg>
											<input
												type="text"
												className="grow"
												placeholder="Search"
											/>
										</label>
									</div>
									<div>
										<button
											className="btn bg-[#0A2463] text-white w-[160px] rounded-2xl"
											onClick={openModal}
										>
											Add teacher
										</button>
										{isModalOpen && <AddTeacherModal />}
									</div>
								</div>
							</div>
							<div className="teacher-table-container">
								<div className="overflow-x-auto mt-4">
									<table className="table">
										{/* head */}
										<thead>
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<th>Name</th>
												<th>Email</th>
												<th>Role</th>
												<th>Department</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{/* row 1 */}
											<tr>
												<th>
													<label>
														<input type="checkbox" className="checkbox" />
													</label>
												</th>
												<td>
													<div className="flex items-center gap-3">
														<div className="avatar">
															<div className="mask mask-squircle w-12 h-12">
																<img
																	src="/tailwind-css-component-profile-2@56w.png"
																	alt="Avatar Tailwind CSS Component"
																/>
															</div>
														</div>
														<div>
															<div className="font-bold">Hart Hagerty</div>
															<div className="text-sm opacity-50">
																United States
															</div>
														</div>
													</div>
												</td>
												<td>
													Zemlak, Daniel and Leannon
													<br />
													<span className="badge badge-ghost badge-sm">
														Desktop Support Technician
													</span>
												</td>
												<td>Purple</td>
												<th>
													<button className="btn btn-ghost btn-xs">
														details
													</button>
												</th>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
