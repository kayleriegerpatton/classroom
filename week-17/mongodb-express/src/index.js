// External imports
const express = require("express");
const { MongoClient } = require("mongodb");

// internal imports
const dbMiddleware = require("./middleware/dbMiddleware");
const routes = require("./routes");

const PORT = 3001;

// create new db library instance
// * ADD DATABASE NAME TO URL
const mongoClient = new MongoClient("mongodb://localhost:27017/LOTRDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// attach db instance to request
app.use(dbMiddleware(mongoClient));
app.use(routes);

const init = async () => {
  try {
    //   connect to database
    await mongoClient.connect();
    console.log("INFO: Database connection successful.");

    // listen to port
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`ERROR: Database connection failed | ${error.message}`);
  }
};

init();
