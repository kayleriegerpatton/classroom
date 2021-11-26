// import Router from express
const { Router } = require("express");
const { getAllUsers, getUserById } = require("../../controllers/users");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;
