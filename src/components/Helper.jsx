import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Helper = () => {
	const { id } = useParams();
	console.log(id);
	const baseUrl = "https://examtrack.up.railway.app";
	const navigate = useNavigate();
	useEffect(() => {
		//call api to fetch user   info using this id and navigate accordingly.
		const options = {
			method: "GET",
			url: `${baseUrl}/api/user/get-user/${id}`,
		};

		axios.request(options).then((response) => {
			const { status } = response;
			if (status == 200) {
				navigate("/dashboard");
			}
		});
	}, []);
};

export default Helper;
