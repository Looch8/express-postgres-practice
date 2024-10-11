const express = require("express");
const app = express();
const port = 3000;

const userRoute = require("./routes/user");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
