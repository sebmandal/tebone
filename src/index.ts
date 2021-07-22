// Express config
import express from "express";
import path from "path";
import pug from "pug";
const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(express.static("../public"));

// Dotenv config
import dotenv from "dotenv";
dotenv.config();

// Actual script, loops through each page and runs the script that comes with it
import * as pages from "./core/pages";
Object.entries(pages).forEach(([string, page]) => {
	if (page.method === "GET") {
		return app.get(page.path, page.handler);
	} else if (page.method === "POST") {
		return app.post(page.path, page.handler);
	} else if (page.method === "PUT") {
		return app.put(page.path, page.handler);
	} else if (page.method === "DELETE") {
		return app.delete(page.path, page.handler);
	} // no else {} because it needs to be one of these four, as specified in ./core/types.ts
});

app.listen(process.env.port || 3000);
