import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Form, Input, Modal } from "rsuite";
import { BASE_URL } from "../../data/data";
import Button from "../Button";
import { SessionSelection, TeacherSelection } from "../SlidePaneFormComponents";

const AddCiModal = () => {
	const [ci, setCi] = useState("");
	const [email, setEmail] = useState("");
	const [session, setSession] = useState("");
	// const baseUrl = "https://examtrack.up.railway.app";
	const baseUrl = BASE_URL;

	const addCi = async (e) => {
		// if (ci == "") return;
		e.preventDefault();
		console.log(ci, session, email);

		axios
			.post(
				`${baseUrl}/api/head/create-ci`,
				{
					session,
					email,
				},
				{
					withCredentials: true,
				}
			)
			.then((response) => {
				const { status, data } = response;
				console.log(status, data);

				if (status == 200) {
					toast.success(`${ci} Chief Invigilator created successfully`);
				} else {
					toast.error("Could not create Chief Invigilator");
				}
			})
			.catch((error) => {
				console.log(error);
				toast.error("Could not create Chief Invigilator");
			});
		setCi("");
		handleClose();
	};

	const handleClose = () => {
		setOpen(false);
		console.log(closed);
	};
	const handleOpen = () => {
		setOpen(true);
		console.log(open);
	};
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button onClick={handleOpen} className="w-44" title="Add CI" />

			<Modal
				backdrop
				open={open}
				onClose={handleClose}
				className="bg-gray-200 rounded-lg m-auto mt-20"
				size={"sm"}
				dialogAs="div"
			>
				<div className=" bg-gray-200 p-8 rounded-xl">
					<div className="flex justify-center p-11 bg-gray-200">
						<h1 className="text-3xl font-semibold text-[#0A2463]">
							Add Chief Invigilator
						</h1>
					</div>

					<div className="flex justify-center">
						<Form fluid className="mb-4">
							<Form.Group controlId="session">
								<Form.ControlLabel className="text-xl my-auto">
									Session
								</Form.ControlLabel>
								<Form.Control
									accepter={SessionSelection}
									name="session"
									placeholder={`Select Session`}
									// value={formik.values.session}
									onChange={(value) => {
										// formik.setFieldValue("session", value);
										setSession(value);
									}}
								/>
							</Form.Group>
							<Form.Group controlId="assignee">
								<Form.ControlLabel className=" text-xl">
									Chief Invigilator
								</Form.ControlLabel>
								<Form.Control
									accepter={TeacherSelection}
									name="chief-invigilator"
									placeholder={`Assign Chief Invigilator`}
									// value={formik.values.teacher._id}
									onChange={(value) => {
										// setChanged(true);
										// formik.setFieldValue("teacher", value);
										//TODO: ekhane value return korbe id oita theke teacher er nam ber korba
										console.log(value);
										setEmail(value.email);
										console.log(value);
									}}
									size="lg"
								/>
							</Form.Group>
							{/* <div> */}
							<div className="flex gap-2">
								<button
									onClick={() => setOpen(false)}
									className="btn w-40 h-8 rounded-2xl text-[#0A2463] border-[#0A2463] border-2 bg-gray-300 hover:bg-gray-300"
								>
									Cancel
								</button>
								<Input
									type="submit"
									onClick={addCi}
									value="Add CI"
									className="btn w-40 h-8 rounded-2xl bg-[#0A2463] text-white hover:bg-primary"
								/>
								{/* </div> */}
							</div>
						</Form>
					</div>
				</div>
			</Modal>
		</div>
	);
};

export default AddCiModal;
