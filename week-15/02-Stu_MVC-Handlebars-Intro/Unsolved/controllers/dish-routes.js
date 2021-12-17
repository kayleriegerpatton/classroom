// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// Controller part of MVC, responsible for handling the server route. Serves data from the database models to the user interface.

const router = require("express").Router();

// TODO: Add a comment describing the purpose of the get route
// the GET route renders the 'all' page at the '/' endpoint.

router.get("/", async (req, res) => {
  //TODO: Add a comment describing the purpose of the render method
  // renders the 'all' html content, described by the all.handlebars file
  res.render("all");
});

module.exports = router;
