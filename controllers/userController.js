const { body } = require("express-validator");
const db = require("../db/queries");

async function getUsers(req, res) {
	const search = req.query.search; // Extract search parameter from the query string
	let usernames;

	if (search) {
		// If a search query exists, fetch only matching usernames
		usernames = await db.searchUsername(search);
	} else {
		// Otherwise, fetch all usernames
		usernames = await db.getAllUsernames();
	}

	// Send the response
	res.render("index", { usernames });
}

async function userCreateGet(req, res) {
	res.render("../views/newUser.ejs");
}

async function userCreatePost(req, res) {
	const { username } = req.body;
	await db.insertUsername(username);
	res.redirect("/");
}

module.exports = {
	getUsers,
	userCreateGet,
	userCreatePost,
};
