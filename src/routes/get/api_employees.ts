import Route from "../../core/route";
import Express from "express";

/**
 * example database
 */
const employeeDatabase = {
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

const script = (req: Express.Request, res: Express.Response) => {
	/**
	 * checking if a query was provided,
	 * and creating a query variable of type <any> to avoid the annoying Typescript "id does not exist on type of req.query"
	 */
	const queryExists: boolean = req.query.id !== undefined;
	const query: any = req.query;

	/**
	 * checking if a user exists at the index (query.id) provided in the employee array
	 */
	const employees = employeeDatabase.employees;
	const employee = employees[parseInt(query["id"])] || {
		message: "This user does not exist.",
	};

	res.header("Content-Type", "application/json");
	return res.send(
		JSON.stringify(queryExists ? employee : employees, null, 2),
	);
};

export default class API extends Route {
	/**
	 * @name GetApiEmployees
	 *
	 * @param {string} path
	 * @param {string} method
	 * @param {function} middleware
	 */
	constructor() {
		super("/api/employees", "get", script);
	}
}
