import { PageType } from "../core/types";

const API_Info = {
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

const API_Example: PageType = {
	path: "/api/employees",
	method: "GET",
	handler: (req, res) => {
		const employees = API_Info.employees;
		const employee = employees[parseInt(req.query.id)];

		res.header("Content-Type", "application/json");

		if (employee) {
			return res.send(JSON.stringify(employee, null, 2));
		} else {
			return res.send(JSON.stringify(employees, null, 2));
		}
	},
};

export default API_Example;
