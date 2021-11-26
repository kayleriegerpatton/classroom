// import Router from express
const { Router } = require("express");
const { renderUsers } = require("../../controllers/render");

const router = Router();

router.get("/", renderUsers);

module.exports = router;
