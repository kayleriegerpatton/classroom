const { Router } = require("express");

const getAllCharacters = require("../controllers");

const router = Router();

router.get("/", getAllCharacters);

module.exports = router;
