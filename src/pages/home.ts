import { PageType } from "../core/types";

const IndexInfo = {
	title: "Home",
};

const IndexPage: PageType = {
	path: "/",
	method: "GET",
	handler: (req, res) => {
		res.render("index", IndexInfo);
	},
};

export default IndexPage;
