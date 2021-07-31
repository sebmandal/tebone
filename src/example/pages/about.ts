import { PageType } from "../../core/types";

const aboutObject = {
	title: "About us",
};

const aboutPage: PageType = {
	path: "/about",
	method: "get",
	handler: (req, res) => {
		res.render("examples/about", aboutObject);
	},
};

export default aboutPage;
