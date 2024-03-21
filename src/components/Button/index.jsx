import { BsArrowRight } from "react-icons/bs";

const Button = ({
	type,
	title,
	loading,
	className,
	light = false,
	onClick,
	icon = false,
	outline = false,
	buttonIcon,
}) => {
	return (
		<button
			type={type}
			disabled={loading}
			onClick={onClick}
			className={`${
				outline
					? "bg-transparent text-[#0A2463] border border-solid border-[#0A2463]"
					: "bg-[#0A2463] text-white hover:bg-[rgba(55,65,180,0.82)]"
			}  hover:font-bold font-inter h-10 transition-all cursor-pointer duration-500  flex items-center justify-center gap-3 rounded-xl p-4 w-full ${className} `}
		>
			{loading ? (
				<>Loading...</>
			) : (
				<>
					{" "}
					{buttonIcon}
					{title}
					{icon && <BsArrowRight size={20} />}
				</>
			)}
		</button>
	);
};

export default Button;
