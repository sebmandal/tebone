import { PageType } from "../../core/types";

const contactObject = {
	title: "Get in touch",
};

const contactPage: PageType = {
	path: "/contact",
	method: "get",
	handler: (req, res) => {
		res.render("examples/contact", contactObject);
	},
};

export default contactPage;
