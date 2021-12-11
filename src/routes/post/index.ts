import Route from "../../core/route";
import Express from "express";

const script = (req: Express.Request, res: Express.Response) => {
	return res.redirect("/");
};

export default class Home extends Route {
	/**
	 * @name PostIndex
	 *
	 * @param {string} path
	 * @param {string} method
	 * @param {function} middleware
	 */
	constructor() {
		super("/", "post", script);
	}
}
