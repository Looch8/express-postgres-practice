const { body } = require("express-validator");
const db = require("../db/queries");

async function getUsers(req, res) {
	const usernames = await db.getAllUsernames();
	console.log("Usernames: ", usernames);
	res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
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
