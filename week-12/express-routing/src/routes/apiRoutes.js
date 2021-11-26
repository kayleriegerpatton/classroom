// import Router from express
const { Router } = require("express");

const usersRoutes = require("./usersRoutes");
const booksRoutes = require("./booksRoutes");

const router = Router();

router.use("/users", usersRoutes);
router.use("/books", booksRoutes);

module.exports = router;
