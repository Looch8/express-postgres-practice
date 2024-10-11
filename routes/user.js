const express = require("express");
const router = express();
const controller = require("../controllers/userController");

router.get("/", controller.getUsers);
router.get("/new", controller.userCreateGet);
router.post("/new", controller.userCreatePost);

module.exports = router;
