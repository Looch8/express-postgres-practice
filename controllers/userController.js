const { body } = require("express-validator");

exports.getUsers = [
	(req, res) => {
		console.log("Usernames will be logged here - wip");

		res.send("");
	},
];

exports.userCreateGet = [
	(req, res) => {
		res.render("../views/newUser.ejs");
	},
];
exports.userCreatePost = [
	(req, res) => {
		console.log("Username to be saved: ", req.body.username);
	},
];
