export const taskCardData = [
	{
		status: "Submitted",
		courseCode: "CSE461",
		session: "2024-1",
		part: "A",
		paperCount: 3,
		teacher: "Ayesha Tasnim",
		dueDate: "2024-03-24",
	},
	{
		status: "on going",
		courseCode: "CSE450",
		session: "2024-1",
		part: "A",
		paperCount: 3,
		teacher: "Farida Chowdhury",
		dueDate: "2024-03-26",
	},
	{
		status: "Submitted",
		courseCode: "CSE460",
		session: "2024-1",
		part: "B",
		paperCount: 3,
		teacher: "Ishtiak Zahid",
		dueDate: "2024-02-24",
	},
	{
		status: "checked",
		courseCode: "CSE103",
		session: "2024-1",
		part: "A",
		paperCount: 3,
		teacher: "Enamul Haque",
		dueDate: "2024-01-01",
	},
	{
		status: "assigned",
		courseCode: "PHY203",
		session: "2024-1",
		part: "B",
		paperCount: 3,
		teacher: "John Doe",
		dueDate: "2024-03-01",
	},
	{
		status: "assigned",
		courseCode: "PHY203",
		session: "2024-1",
		part: "B",
		paperCount: 3,
		teacher: "Jhonny Doe",
		dueDate: "2024-03-20",
	},
	{
		status: "assigned",
		courseCode: "PHY203",
		session: "2024-1",
		part: "B",
		paperCount: 3,
		teacher: "Jafor Iqbal",
		dueDate: "2024-02-02",
	},
	{
		status: "assigned",
		courseCode: "PHY203",
		session: "2024-1",
		part: "B",
		paperCount: 3,
		teacher: "Saifur Rahman",
		dueDate: "2024-03-26",
	},
];

export const getComments = async () => {
	return [
		{
			id: "1",
			body: "Can't make it in the due date, extend the deadline please.",
			username: "Ishrar Chowdhury",
			userId: "1",
			createdAt: "2024-03-24T23:00:33.010",
		},
		{
			id: "2",
			body: "Sure, I will extend the deadline.",
			username: "Fathoor Rabbani",
			userId: "2",
			createdAt: "2024-03-24T23:00:33.010",
		},
	];
};

export const getSessionData = async () => {
	return ["2024-1", "2023-2", "2023-1"];
};

export const BASE_URL = "http://localhost:5000";
// export const BASE_URL = "https://examtrack.up.railway.app";
