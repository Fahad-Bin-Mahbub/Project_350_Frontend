import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import { useState } from "react";
import { Button, Input, InputGroup } from "rsuite";

// TODO: place the card center of the page
const LoginPage = () => {
	const [visible, setVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const handleChange = () => {
		setVisible(!visible);
	};

	const doLogin = () => {
		// TODO: call api for login
		if (email === "" || pass === "") return;

		setEmail("");
		setPass("");
	};

	const doGoogleLogin = () => {
		// TODO: call api for google login
	};

	return (
		<div className="h-screen bg-gray-300 ">
			<div className="mx-auto max-w-sm  bg-gray-600 px-5 py-6 rounded-xl">
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
