import { PageType } from "../../core/types";

const indexObject = {
	title: "Home",
};

const indexPage: PageType = {
	path: "/",
	method: "get",
	handler: (req, res) => {
		res.render("examples/index", indexObject);
	},
};

export default indexPage;
