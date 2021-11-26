// import Router from express
const { Router } = require("express");
const viewRoutes = require("./viewRoutes");
const apiRoutes = require("./apiRoutes");

const router = Router();

router.use("/api", apiRoutes);

router.use("/view", viewRoutes);

module.exports = router;
