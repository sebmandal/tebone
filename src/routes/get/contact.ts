import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("contact", {
		title: "Get in touch!",
	});
};

export default class Contact extends Route {
	/**
	 * @name GetContact
	 *
	 * @param {string} path
	 * @param {string} method
	 * @param {function} middleware
	 */
	constructor() {
		super("/contact", "get", script);
	}
}
