import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input, InputGroup } from "rsuite";

// TODO: place the card center of the page
const InvitationAcceptPage = () => {
	const baseUrl = "https://examtrack.up.railway.app";

	const doAcceptInvitation = async () => {};

	return (
		<div className="h-screen bg-gray-300 flex items-center justify-center ">
			<div className="mx-auto max-w-sm w-1/2 bg-gray-600 px-5 py-6 rounded-xl">
				<div className="pb-8">
					<div className="text-2xl text-white">Welcome to PaperWatch</div>
				</div>
				<div className="grid gap-4 py-5">
					<p className="text-white pb-5">
						You are invited to join the PaperWatch. Accept the invitation to
						login.
					</p>
					<Button
						color="green"
						appearance="primary"
						className="w-full text-white bg-green-600"
						onClick={doAcceptInvitation}
					>
						Accept Invite
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InvitationAcceptPage;
