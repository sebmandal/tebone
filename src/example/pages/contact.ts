import Route from "../../core/route";
import Express from "express";

const renderObject = {
	title: "Get in touch!",
};

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("example/contact", renderObject);
};

export default class Contact extends Route {
	/**
	 * super()
	 * parameter 1: the URL path (/contact)
	 * parameter 2: the Express routing method (GET)
	 * parameter 3: the Express middleware/handler function (script)
	 **/
	constructor() {
		super("/contact", "get", script);
	}
}
