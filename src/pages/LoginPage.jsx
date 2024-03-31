import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, InputGroup } from "rsuite";

// TODO: place the card center of the page
const LoginPage = () => {
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const navigate = useNavigate();

	const handleChange = () => {
		setVisible(!visible);
	};

	const doLogin = async () => {
		// TODO: call api for login
		if (email === "" || pass === "") return;
		const { data } = await axios.post("http://localhost:5000/api/admin/login", {
			email,
			password: pass,
		});
		console.log(data);
		if (data.success) {
			if (data.data.roles.includes("admin")) navigate("/admin/dashboard");
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
		window.location.href = `http://localhost:5000/auth/google${encodedParam}`;
	};

	return (
		<div className="h-screen bg-gray-300 flex items-center justify-center ">
			<div className="mx-auto max-w-sm w-1/2 bg-gray-600 px-5 py-6 rounded-xl">
				<div className="pb-8">
					<div className="text-2xl text-white">Login</div>
				</div>
				<div className="grid gap-4">
					<div className="grid gap-2">
						{/* <Label htmlFor="email">Email</Label> */}
						<InputGroup inside>
							<Input
								id="email"
								type="email"
								placeholder="email@example.com"
								required
								value={email}
								onChange={(value) => setEmail(value)}
							/>
						</InputGroup>
					</div>
					<div className="grid gap-2">
						<div className="flex items-center">
							{/* <Label htmlFor="password">Password</Label> */}
							{/* <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
						</div>
						<InputGroup inside>
							<Input
								type={visible ? "text" : "password"}
								required
								placeholder="Password"
								value={pass}
								onChange={(value) => setPass(value)}
							/>
							<InputGroup.Button onClick={handleChange}>
								{visible ? <EyeIcon /> : <EyeSlashIcon />}
							</InputGroup.Button>
						</InputGroup>
					</div>
					<div className="my-5">
						<Button
							type="submit"
							className="w-full text-white "
							onClick={doLogin}
						>
							Login
						</Button>
						<Button
							variant="outline"
							className="w-full text-white"
							onClick={doGoogleLogin}
						>
							Login with Google
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
