import { PageType } from "../core/types";

const AboutInfo = {
	title: "About us",
};

const AboutPage: PageType = {
	path: "/about",
	method: "GET",
	handler: (req, res) => {
		res.render("about", AboutInfo);
	},
};

export default AboutPage;
