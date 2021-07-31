import { PageType } from "../../core/types";

const employeeObject = {
	employees: [
		{
			name: "John Smith",
			email: "jsmith@gmail.com",
			age: 32,
		},
		{
			name: "Jane Doe",
			email: "jdoe@gmail.com",
			age: 34,
		},
	],
};

const employeeAPI: PageType = {
	path: "/api/employees",
	method: "get",
	handler: (req, res) => {
		const query: boolean = req.query.id;
		const employees = employeeObject.employees;
		const employee = employees[parseInt(req.query.id)] || {
			message: "This user does not exist.",
		};

		res.header("Content-Type", "application/json");

		return res.send(JSON.stringify(query ? employee : employees, null, 2));
	},
};

export default employeeAPI;
