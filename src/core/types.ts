export interface PageType {
	path: string;
	method: "GET" | "POST" | "PUT" | "DELETE";
	handler: (req: any, res: any) => void;
}
