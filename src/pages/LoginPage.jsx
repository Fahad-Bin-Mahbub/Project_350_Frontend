import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, ButtonToolbar, Form } from "rsuite";
import loginbg from "../assets/login_bg.svg";
import logo from "../assets/sust-logo_login.png";
import { useAuth } from "../context/Auth";
import { BASE_URL } from "../data/data";

// TODO: place the card center of the page
const LoginPage = () => {
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const { auth, updateAuth } = useAuth();
	const navigate = useNavigate();
	const [isAdmin, setIsAdmin] = useState(false);
	// const baseUrl = "https://examtrack.up.railway.app";
	// const baseUrl = "http://localhost:5000";
	const baseUrl = BASE_URL;

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

		if (data.success) {
			if (data.user.roles.includes("admin")) {
				navigate("/admin/dashboard");
				toast.success(`Welcome ${data.user.email}`);
				localStorage.setItem("token", data.token);
				updateAuth({
					// ...auth,
					user: data.user,
				});

				window.localStorage.setItem("auth", JSON.stringify(data));
			} else toast.info("Invalid Email/Password");
		} else toast.info("Invalid Email/Password");
		setEmail("");
		setPass("");
	};

	const doGoogleLogin = async () => {
		// TODO: call api for google login
		window.location.href = `${baseUrl}/auth/google`;
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
						{isAdmin && (
							<div className="mb-8">
								<Form fluid>
									<Form.Group controlId="email">
										<Form.ControlLabel>Email</Form.ControlLabel>
										<Form.Control
											name="email"
											type="email"
											placeholder="Enter your email"
											onChange={(value) => setEmail(value)}
										/>
									</Form.Group>
									<Form.Group controlId="password">
										<Form.ControlLabel>Password</Form.ControlLabel>
										<Form.Control
											name="password"
											type="password"
											autoComplete="off"
											onChange={(value) => setPass(value)}
										/>
									</Form.Group>
								</Form>
							</div>
						)}
						<div>
							<ButtonToolbar>
								{isAdmin && (
									<Button
										className="text-white hover:text-white focus:text-white bg-primary hover:bg-primary focus:bg-primary"
										block
										onClick={doLogin}
									>
										Sign in
									</Button>
								)}
								{!isAdmin && (
									<Button
										block
										className="flex items-center justify-center border bg-gray-100"
										startIcon={<FcGoogle />}
										onClick={doGoogleLogin}
									>
										Sign in with Google
									</Button>
								)}
								<Button
									className="text-white hover:text-white focus:text-white bg-primary hover:bg-primary focus:bg-primary"
									block
									onClick={() => setIsAdmin(!isAdmin)}
								>
									{isAdmin ? "User Login" : "Admin Login"}
									{/* Are you Admin? */}
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
