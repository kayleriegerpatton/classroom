// import Router from express
const { Router } = require("express");

const userViewRoutes = require("./userViewRoutes");
const booksViewRoutes = require("./booksViewRoutes");

const router = Router();

router.use("/users", userViewRoutes);
router.use("/books", booksViewRoutes);

module.exports = router;
