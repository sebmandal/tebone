// imports
import * as fs from "fs";

// setting the routes as a variable
const routes = fs.readdirSync("./dist/routes").map((file) => {
	const route = file.replace(".js", "");
	return require(`../routes/${route}`).default;
});

export default routes;
