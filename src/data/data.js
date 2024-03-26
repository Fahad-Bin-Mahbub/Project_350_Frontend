export const taskCardData = [
	{
		status: "Submitted",
		courseCode: "CSE461",
		semester: "1/1",
		part: "A",
		paperCount: 3,
		teacher: "AT",
	},
	{
		status: "on going",
		courseCode: "CSE450",
		semester: "1/2",
		part: "A",
		paperCount: 3,
		teacher: "FC",
	},
	{
		status: "Submitted",
		courseCode: "CSE460",
		semester: "2/1",
		part: "B",
		paperCount: 3,
		teacher: "IZ",
	},
	{
		status: "checked",
		courseCode: "CSE103",
		semester: "2/2",
		part: "A",
		paperCount: 3,
		teacher: "EH",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/1",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "3/2",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/1",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
	{
		status: "accepted",
		courseCode: "PHY203",
		semester: "4/2",
		part: "B",
		paperCount: 3,
		teacher: "SC",
	},
];

export const getComments = async () => {
	return [
		{
			id: 1,
			body: "This is a comment",
			userId: 1,
			username: "Ishrar Chowdhury",
			createdAt: new Date().toISOString(),
		},
		{
			id: 2,
			body: "This is a comment",
			userId: 1,
			username: "Ishrar Chowdhury",
			createdAt: new Date().toISOString(),
		},
		{
			id: 3,
			body: "This is a comment",
			userId: 1,
			username: "Ishrar Chowdhury",
			createdAt: new Date().toISOString(),
		},
		{
			id: 4,
			body: "This is a comment",
			userId: 1,
			username: "Ishrar Chowdhury",
			createdAt: new Date().toISOString(),
		},
	];
};
