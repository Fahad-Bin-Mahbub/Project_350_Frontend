import React from "react";
import { Avatar } from "rsuite";

const MenuItem = ({ name, email, imageUrl }) => {
	return (
		<div className="flex">
			<Avatar
				circle
				src="https://lh3.googleusercontent.com/a/ACg8ocK-rAqSP9Q0BIMWlECKcn1UUjp-8VpE6RK465ocUfCe3Ne9-iQ=s96-c}"
			/>
			<div>
				<div className="text-black">{name}</div>
				<div>{email}</div>
			</div>
		</div>
	);
};

export default MenuItem;
