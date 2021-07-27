export interface PageType {
	path: string;
	method: "get" | "post" | "put" | "delete";
	handler: (req: any, res: any) => void;
}

//todo Coming Soon!!!!

// export class Page {
// 	path: string;
// 	method: "get" | "post" | "put" | "delete";
// 	handler: (req: any, res: any) => void;

// 	constructor(
// 		path: string,
// 		method: "get" | "post" | "put" | "delete",
// 		handler: (req: any, res: any) => void
// 	) {
// 		this.path = path;
// 		this.method = method;
// 		this.handler = handler;
// 	}
// }
