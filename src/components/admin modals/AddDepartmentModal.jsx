import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input, Modal } from "rsuite";
import Button from "../Button";

const AddDepartmentModal = () => {
	const [dept, setDept] = useState("");
	const baseUrl = "https://examtrack.up.railway.app";

	const addDepartment = async () => {
		if (dept == "") return;
		console.log(dept);

		const options = {
			method: "POST",
			url: `${baseUrl}/api/admin/create-department`,
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
			data: {
				name: dept,
			},
		};

		axios
			.request(options)
			.then((response) => {
				const { data } = response;
				console.log(data);

				if (data.success) {
					toast.success(`${dept} department created successfully`);
				} else {
					toast.error("Could not create department");
				}
			})
			.catch((error) => {
				console.log(error);
				toast.error("Could not create department");
			});
		setDept("");
	};

	return (
		<div>
			<Button
				onClick={() =>
					document.getElementById("add-department-modal").showModal()
				}
				className="w-44"
				title="Add Department"
			/>
			<dialog id="add-department-modal" className="modal">
				<div className="modal-box bg-gray-200">
					<div className="flex justify-center p-11">
						<h1 className="text-3xl font-semibold text-[#0A2463]">
							Add Department
						</h1>
					</div>

					<div className="flex justify-center">
						<form>
							{/* Department */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Department
								</label>
								<Input
									type="text"
									placeholder="Department"
									onChange={(value) => setDept(value)}
									className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								/>
							</div>
							{/* Department Head */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Department Head
								</label>
								<input
									type="text"
									placeholder="Department Head"
									className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								/>
							</div>
							<div className="modal-action">
								<form method="dialog" className="flex gap-2">
									<button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2 hover:bg-gray-300 bg-gray-300">
										Cancel
									</button>
									<input
										type="submit"
										onClick={addDepartment}
										value="Add department"
										className="btn w-40 h-8 rounded-2xl bg-primary text-white  hover:bg-primary"
									/>
								</form>
							</div>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

export default AddDepartmentModal;
