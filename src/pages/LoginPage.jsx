import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import axios from "axios";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, ButtonToolbar, Form, Input, InputGroup } from "rsuite";
import account from "../assets/icons/account.svg";
import loginbg from "../assets/login_bg.svg";
import logo from "../assets/sust-logo_login.png";
import { useAuth } from "../context/Auth";

// TODO: place the card center of the page
const LoginPage = () => {
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();
	const baseUrl = "https://examtrack.up.railway.app";

	const handleChange = () => {
		setVisible(!visible);
	};

	const doLogin = async (e) => {
		// TODO: call api for login
		if (email === "" || pass === "") return;
		e.preventDefault();
		const { data } = await axios.post(`${baseUrl}/api/admin/login`, {
			email,
			password: pass,
		});
		console.log(data);
		if (data.success) {
			if (data.user.roles.includes("admin")) navigate("/admin/dashboard");
			toast.success(`Welcome ${data.user.email}`);
			localStorage.setItem("token", data.token);
			setAuth({
				...auth,
				user: data.user,
			});
			window.localStorage.setItem("auth", JSON.stringify(data));
			// To-do: handle unauthorized access
		}
		// To-do: handle unauthorized access
		setEmail("");
		setPass("");
	};

	const doGoogleLogin = async () => {
		// TODO: call api for google login
		const currentUrl = window.location.href;
		const encodedParam = encodeURI(`?redirectUrl=${currentUrl}`);
		window.location.href = `${baseUrl}/auth/google${encodedParam}`;
	};

	return (
		<div className="flex w-full h-screen">
			<div className="w-1/2 bg-white flex flex-col">
				<div className="ml-14 mt-14">
					<img src={logo} alt="SUST Logo" />
				</div>
				<div className="my-auto">
					<div className="mx-auto max-w-sm w-1/2">
						<div className="mb-14">
							<div className="text-5xl mb-8">PaperWatch</div>
							<div>Welcome back! Please enter your details.</div>
						</div>
						<div className="mb-8">
							<Form fluid>
								<Form.Group controlId="email">
									<Form.ControlLabel>Email</Form.ControlLabel>
									<Form.Control
										name="email"
										type="email"
										placeholder="Enter your email"
									/>
								</Form.Group>
								<Form.Group controlId="password">
									<Form.ControlLabel>Password</Form.ControlLabel>
									<Form.Control
										name="password"
										type="password"
										autoComplete="off"
									/>
								</Form.Group>
							</Form>
						</div>
						<div>
							<ButtonToolbar>
								<Button
									className="text-white hover:text-white focus:text-white bg-primary hover:bg-primary focus:bg-primary"
									block
									onClick={doLogin}
								>
									Sign in
								</Button>
								<Button
									block
									className="flex items-center justify-center border bg-gray-100"
									startIcon={<FcGoogle />}
									onClick={doGoogleLogin}
								>
									Sign in with Google
								</Button>
							</ButtonToolbar>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[50%] bg-gray-100 flex items-center justify-center">
				<div className="max-w-sm">
					<img src={loginbg} className="block mx-auto" />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
