const { body } = require("express-validator");
const db = require("../db/queries");

// exports.getUsers = [
// 	(req, res) => {
// 		console.log("Usernames will be logged here - wip");

// 		res.send("");
// 	},
// ];
async function getUsers(req, res) {
	const usernames = await db.getAllUsernames();
	console.log("Usernames: ", usernames);
	res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

// exports.userCreateGet = [
// 	(req, res) => {
// 		res.render("../views/newUser.ejs");
// 	},
// ];
async function userCreateGet(req, res) {
	res.render("../views/newUser.ejs");
}

// exports.userCreatePost = [
// 	(req, res) => {
// 		console.log("Username to be saved: ", req.body.username);
// 	},
// ];
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
