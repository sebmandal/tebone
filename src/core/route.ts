import Express from "express";

export default class Route {
	path: string;
	method: string;
	script: (req: Express.Request | any, res: Express.Response) => void;

	constructor(
		path: string,
		method:
			| "all"
			| "get"
			| "post"
			| "put"
			| "delete"
			| "patch"
			| "options"
			| "head",
		handler: (req: any, res: any) => void
	) {
		this.path = path;
		this.method = method;
		this.script = handler;
	}

	run(app: any) {
		app[this.method](this.path, this.script);
	}
}
