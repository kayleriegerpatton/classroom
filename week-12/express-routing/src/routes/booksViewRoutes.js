// import Router from express
const { Router } = require("express");

const router = Router();

router.get("/", renderBooks);

module.exports = router;
