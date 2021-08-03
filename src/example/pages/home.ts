import Route from "../../core/route";
import Express from "express";

const renderObject = {
	title: "Home",
	message: "All the examples included in this Repo",
};

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("example/home", renderObject);
};

export default class Home extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/", "get", script);
	}
}
