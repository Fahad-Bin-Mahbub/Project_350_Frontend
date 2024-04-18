import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input } from "rsuite";
import { BASE_URL } from "../../data/data";
import Button from "../Button";

function AddTeacherModal() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [department, setDepartment] = useState("");
	// const baseUrl = "https://examtrack.up.railway.app";
	const baseUrl = BASE_URL;

	const addTeacher = async (e) => {
		e.preventDefault();
		console.log(name, email, role, department);

		if (email == "" || role == "" || department == "") return;
		let firstName = "",
			lastName = "";
		if (name) {
			const arr = name.split(" ");
			firstName = arr[0];
			for (let i = 1; i < arr.length; i++) {
				lastName += arr[i];
				lastName += " ";
			}
		}

		const options = {
			method: "GET",
			url: `${baseUrl}/api/admin/get-department-id/${department}`,
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		};

		console.log(options);

		axios
			.request(options)
			.then((response) => {
				const { status, data } = response;
				console.log(status, data);
				if (status == 200) {
					const id = data.id;
					console.log(id);

					const noptions = {
						method: "POST",
						url: `${baseUrl}/api/invite`,
						headers: {
							"content-type": "application/json",
							authorization: `Bearer ${localStorage.getItem("token")}`,
						},
						data: {
							firstName,
							lastName,
							email,
							role,
							department: id,
						},
					};

					axios.request(noptions).then((nresponse) => {
						const { status } = nresponse;
						console.log(status);

						if (status == 200) {
							toast.success("Invitation sent successfully");
						}
					});
				} else toast.error("No such department");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Sending invitation failed");
			});
		setName("");
		setEmail("");
		setRole("");
		setDepartment("");
	};

	return (
		<div>
			<Button
				onClick={() => document.getElementById("add-teacher-modal").showModal()}
				className="w-44"
				title="Add Teacher"
			/>
			<dialog id="add-teacher-modal" className="modal">
				<div className="modal-box bg-gray-200">
					<div className="flex justify-center p-11">
						<h1 className="text-3xl font-semibold text-[#0A2463]">
							Add Teacher
						</h1>
					</div>

					<div className="flex justify-center">
						<form>
							{/* Name */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Name
								</label>
								<Input
									type="text"
									placeholder="Name"
									onChange={(value) => setName(value)}
									className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								/>
							</div>
							{/* Email */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Email
								</label>
								<Input
									type="text"
									placeholder="Email"
									onChange={(value) => setEmail(value)}
									className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								/>
							</div>
							{/* Role */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Role
								</label>
								{/* <input type="text" placeholder="Role" className="input input-bordered w-[365px] h-11 rounded-sm" /> */}
								<select
									onChange={(e) => setRole(e.target.value)}
									className="select select-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								>
									<option disabled selected>
										Role
									</option>
									<option value="teacher">Teacher</option>
									<option value="department_head">Head</option>
								</select>
							</div>
							{/* Department */}
							<div className="flex flex-col gap-y-1.5 pb-8">
								<label className="text-sm text-[#0A2463] font-medium">
									Department
								</label>
								<Input
									type="text"
									placeholder="Department"
									onChange={(value) => setDepartment(value)}
									className="input input-bordered w-[365px] h-11 rounded-sm bg-gray-300"
								/>
							</div>
							<div className="modal-action">
								<form method="dialog" className="flex gap-2">
									<button className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2 bg-gray-300  hover:bg-gray-300">
										Cancel
									</button>
									<input
										type="submit"
										onClick={addTeacher}
										value="Add teacher"
										className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white hover:bg-primary"
									/>
								</form>
							</div>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
}

export default AddTeacherModal;
