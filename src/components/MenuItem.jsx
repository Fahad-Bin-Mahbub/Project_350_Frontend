import React from "react";
import { Avatar } from "rsuite";

const MenuItem = ({ name, email, imageUrl }) => {
	return (
		<div className="flex">
			<Avatar circle src={imageUrl} />
			<div className="mx-3">
				<div className="">{name}</div>
				<div className="italic">{email}</div>
			</div>
		</div>
	);
};

export default MenuItem;
