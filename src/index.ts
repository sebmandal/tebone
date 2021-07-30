// Get config from .env file
import dotenv from "dotenv";
dotenv.config();

// Import modules
import express from "express";
import path from "path";

// Set up Express app (views, static files, etc.)
const app = express();
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static("./public"));

// Automatically configure page routes
import pages from "./core/pages";
Object.entries(pages).forEach(([, { method, path, handler }]) => {
	return app[method](path, handler);
});

// Start the Express server
app.listen(process.env.PORT || 3000);
