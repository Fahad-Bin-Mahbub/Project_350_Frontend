import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Tasks from "./components/tasks";
import Department from "./components/department";
import Teachers from "./components/teachers";
import { useAuth } from "../../context/Auth";
const AdminDashboard = () => {
	const {auth} = useAuth();

	return (
		<div className="bg-blue-950">
			<Sidebar>
				<div className="w-full h-screen bg-white rounded-s-badge flex-col overflow-auto">
					<NavBar />
					<div className="flex flex-col overflow-auto">
						<Tasks />
						<Department />
						<Teachers />
					</div>
				</div>
			</Sidebar>
		</div>
	);
};

export default AdminDashboard;
