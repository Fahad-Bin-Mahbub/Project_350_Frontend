import React from "react";
import SlidePane from "../components/SlidePane";
import { Icons } from "../assets/icons";
import { PiExamFill } from "react-icons/pi";
const Exam = () => {
	return (
		<>
			<img src={Icons.icon_exam} alt="" />
			<PiExamFill />
			<SlidePane />
		</>
	);
};

export default Exam;
