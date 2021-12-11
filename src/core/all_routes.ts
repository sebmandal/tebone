// imports
import * as fs from "fs";

const routes: any = [];

// setting the GET sroutes as a variable
const getRoutes = fs.readdirSync("./dist/routes/get").map((file) => {
	const route = file.replace(".js", "");
	return routes.push(require(`../routes/get/${route}`).default);
});

// setting the POST routes as a variable
const postRoutes = fs.readdirSync("./dist/routes/post").map((file) => {
	const route = file.replace(".js", "");
	return routes.push(require(`../routes/post/${route}`).default);
});

export default routes;
