import Route from "../../core/route";
import Express from "express";

const renderObject = {
	title: "About us.",
};

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("example/about", renderObject);
};

export default class AboutUs extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/about)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/about", "get", script);
	}
}
