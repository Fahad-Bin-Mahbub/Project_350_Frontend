import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { BASE_URL } from "../data/data";

const Helper = () => {
	const { id } = useParams();
	console.log(id);
	// const baseUrl = "https://examtrack.up.railway.app";
	// const baseUrl = "http://localhost:5000";
	const baseUrl = BASE_URL;
	const navigate = useNavigate();
	const { auth, updateAuth } = useAuth();

	useEffect(() => {
		//call api to fetch user   info using this id and navigate accordingly.
		const options = {
			method: "GET",
			url: `${baseUrl}/api/user/get-user/${id}`,
		};

		axios.request(options).then((response) => {
			const { status, data } = response;
			console.log(status, data);
			if (status == 200) {
				updateAuth({
					// ...auth,
					user: data.data,
				});
				window.localStorage.setItem("auth", JSON.stringify(data.data));
				navigate("/dashboard");
			} else {
				navigate("/");
			}
		});
	}, []);
};

export default Helper;
