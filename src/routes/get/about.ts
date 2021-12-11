import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("about", {
		title: "About us.",
	});
};

export default class AboutUs extends Route {
	/**
	 * @name GetAbout
	 *
	 * @param {string} path
	 * @param {string} method
	 * @param {function} middleware
	 */
	constructor() {
		super("/about", "get", script);
	}
}
