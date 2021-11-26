// import Router from express
const { Router } = require("express");

const { renderBooks } = require("../../controllers/render");

const router = Router();

router.get("/", renderBooks);

module.exports = router;
