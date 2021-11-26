// import Router from express
const { Router } = require("express");

const router = Router();

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;
