import { FaEllipsis } from "react-icons/fa6";

const CardSection = () => {
	return (
		<div className="w-360 h-840 bg-gray-100 rounded-xl flex flex-col p-6">
			<div className="flex justify-between pb-6">
				<div className="text-sm text-black">Section Name</div>
				<div>
					<FaEllipsis />
				</div>
			</div>
		</div>
	);
};

export default CardSection;
