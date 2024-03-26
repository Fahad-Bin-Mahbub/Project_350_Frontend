import React, { useContext, useState } from "react";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { Drawer, Form, Input, Placeholder, Tag } from "rsuite";
import FormControlLabel from "rsuite/esm/FormControlLabel";
import { useTaskCard } from "../context/TaskCardProvider";
import StatusTag from "./StatusTag";

const Textarea = React.forwardRef((props, ref) => (
	<Input {...props} as="textarea" ref={ref} />
));

const SlidePane = () => {
	const { taskCardData } = useTaskCard();
	// console.log(taskCardData);
	const { status, courseCode, semester, part, paperCount, teacher } =
		taskCardData;
	// return (
	// 	<>
	// 		<ul className="menu p-4 w-[680px] min-h-full bg-base-200 text-base-content">
	// 			{/* Sidebar content here */}
	// 			<div className="flex justify-between px-8 py-3">
	// 				<button className="btn btn-sm bg-[#E6F8F1] border-[#40856A] text-[#40856A]">
	// 					{status}
	// 				</button>
	// 				<button>x</button>
	// 			</div>
	// 			<div className="border border-slate-300 w-full"></div>
	// 			<form action="" className="flex flex-col gap-12 py-16 px-12">
	// 				<div>
	// 					<input
	// 						type="text"
	// 						placeholder={courseCode}
	// 						className="input input-ghost w-full text-4xl font-medium"
	// 					/>
	// 				</div>
	// 				<div className="grid grid-cols-2 items-center">
	// 					<label className="w-20 font-bold text-base">Assignee</label>
	// 					<div className="inline-flex justify-between">
	// 						<FaUserCircle size={44} style={{ color: "#C3C3C3" }} />
	// 						<input
	// 							type="text"
	// 							placeholder={teacher}
	// 							className="input input-ghost w-full max-w-xs"
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div className="grid grid-cols-2 items-center">
	// 					<label className="w-20 font-bold text-base">Due Date</label>
	// 					<div className="inline-flex justify-between items-center">
	// 						{/* //TODO: pass date as prop */}
	// 						<input
	// 							type="date"
	// 							placeholder="No Due Date"
	// 							className="input input-ghost w-full max-w-xs mt-1"
	// 						/>
	// 					</div>
	// 				</div>
	// 				<div className="grid grid-cols-2 items-center">
	// 					<label className="w-20 font-bold text-base">Exam</label>
	// 					<input
	// 						type="text"
	// 						placeholder={semester}
	// 						className="input input-ghost w-full max-w-xs"
	// 					/>
	// 				</div>
	// 				<div className="grid grid-cols-2 items-center">
	// 					<label className="w-20 font-bold text-base">Part</label>

	// 					{/* //TODO: set selected value from the props */}
	// 					<select className="input input-ghost w-full max-w-xs">
	// 						<option value="A">A</option>
	// 						<option value="B">B</option>
	// 					</select>
	// 				</div>
	// 				<div className="grid grid-cols-2 items-center">
	// 					<label className="w-20 font-bold text-base">Total papers</label>
	// 					<input
	// 						type="text"
	// 						placeholder={paperCount}
	// 						className="input input-ghost w-full max-w-xs"
	// 					/>
	// 				</div>
	// 			</form>
	// 			<div>
	// 				<div
	// 					tabIndex={0}
	// 					className="collapse border border-base-300 bg-white"
	// 				>
	// 					<div className="collapse-title text-xl font-medium">Comments</div>
	// 					<div className="collapse-content">
	// 						<p>
	// 							tabIndex={0} attribute is necessary to make the div focusable
	// 						</p>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</ul>
	// 	</>
	// );
	const [cc, setCc] = useState(courseCode);
	const [t, setT] = useState(teacher);
	const [pc, setPc] = useState(paperCount);
	const [s, setS] = useState(semester);
	const [date, setDate] = useState("2021-09-01");
	const [p, setP] = useState(part);

	return (
		<div>
			<Drawer.Header>
				<Drawer.Title>
					<StatusTag status={status} />
				</Drawer.Title>
			</Drawer.Header>
			<Drawer.Body>
				<Form fluid className="my-10 ">
					<Form.Group controlId="course-code">
						<Form.Control
							name="Course"
							placeholder={`Course`}
							value={cc}
							onChange={(value) => setCc(value)}
							className="h-24 text-5xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="assignee" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Assignee
						</Form.ControlLabel>
						<Form.Control
							name="Assignee"
							placeholder={`Assignee`}
							value={t}
							onChange={(value) => setT(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="due-date" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Due Date
						</Form.ControlLabel>
						<Form.Control
							name="due"
							placeholder={`No Due Date`}
							type="date"
							value={date}
							onChange={(value) => setDate(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="exam" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Exam
						</Form.ControlLabel>
						<Form.Control
							name="exam"
							placeholder={`semester`}
							value={s}
							onAbort={(value) => setS(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<Form.Group controlId="Part" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Part
						</Form.ControlLabel>
						<Form.Control
							name="part"
							placeholder={`part`}
							value={p}
							onChange={(value) => setP(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>

					<Form.Group controlId="Paper Count" className="flex">
						<Form.ControlLabel className="w-[50%] text-xl my-auto">
							Paper Count
						</Form.ControlLabel>
						<Form.Control
							name="paper-count"
							placeholder={`0`}
							value={pc}
							onChange={(value) => setPc(value)}
							className="text-2xl font-medium focus:outline-none border-none"
						/>
					</Form.Group>
					<div>
						<div className="hS-[80%] overflow-y-auto">
							<div className="bg-red-100 w-full flex px-2 items-center">
								<div className="flex">
									<div className="text-2xl mr-2 size-11 rounded-full bg-yellow-500 text-center content-center flex-none">
										IC
									</div>
									<div className="text-xl mx-2 font-bold">ishrar chowdhury</div>
								</div>
								<div className="text-xl mx-2">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Tenetur quidem perferendis fuga modi ullam sequi nihil illo.
									Quo, maxime, atque ut aperiam quaerat corporis alias, ea
									provident iusto sit neque.
								</div>
								<div className="text-xl mx-2">time</div>
							</div>
						</div>
					</div>
					<Form.Group controlId="textarea">
						<Form.ControlLabel>Textarea</Form.ControlLabel>
						<Form.Control rows={5} name="textarea" accepter={Textarea} />
					</Form.Group>
				</Form>
			</Drawer.Body>
		</div>
	);
};

export default SlidePane;
