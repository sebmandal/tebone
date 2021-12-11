import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.render("home", {
		title: "Home",
		message: "All the examples included in this Repo",
	});
};

export default class Home extends Route {
	/**
	 * @name GetIndex
	 *
	 * @param {string} path
	 * @param {string} method
	 * @param {function} middleware
	 */
	constructor() {
		super("/", "get", script);
	}
}
