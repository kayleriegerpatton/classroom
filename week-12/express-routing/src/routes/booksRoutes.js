// import Router from express
const { Router } = require("express");

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);

module.exports = router;
