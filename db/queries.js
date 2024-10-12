const pool = require("./pool");

async function getAllUsernames() {
	const { rows } = await pool.query("SELECT * FROM usernames");
	return rows;
}

async function insertUsername(username) {
	await pool.query("INSERT INTO usernames (username) VALUES ($1)", [
		username,
	]);
}

async function searchUsername(search) {
	const { rows } = await pool.query(
		"SELECT * FROM usernames WHERE username ILIKE $1", // ILIKE for case-insensitive search
		[`%${search}%`] // Use wildcard % for partial matching
	);
	return rows;
}

module.exports = {
	getAllUsernames,
	insertUsername,
	searchUsername,
};
