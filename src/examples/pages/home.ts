import { PageType } from "../../core/types";

const indexObject = {
	title: "Home",
	message: "All the examples included in this Repo",
};

const indexPage: PageType = {
	path: "/",
	method: "get",
	handler: (req, res) => {
		res.render("examples/index", indexObject);
	},
};

export default indexPage;
