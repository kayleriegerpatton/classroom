// external imports
const express = require("express");
const mongodb = require("mongodb").MongoClient;

// declare express server app and port
const app = express();
const port = 3001;

// declare database connection URI
const connectionStringURI = `mongodb://localhost:27017/inventoryDB`;

let db;

// connect to mongodb database
mongodb.connect(
  // connection uri
  connectionStringURI,
  // options
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();

    // connect to port
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

// middleware
app.use(express.json());

// /create route
app.post("/create", (req, res) => {
  // insert record to 'bookCollection' collection
  db.collection("bookCollection").insertOne(
    // pass title and author from req.body
    { title: req.body.title, author: req.body.author },

    (err, results) => {
      if (err) throw err;

      // return result if successful
      res.json(results);
    }
  );
});

// /create-many route
app.post("/create-many", function (req, res) {
  // insert to "bookCollection" collection 2 documents with titles:
  db.collection("bookCollection").insertMany(
    [{ title: "Oh the Places We Will Go!" }, { title: "Diary of Anne Frank" }],
    (err, results) => {
      if (err) throw err;

      // return results if successful
      res.json(results);
    }
  );
});

// /read route
app.get("/read", (req, res) => {
  // from 'bookCollection' find all documents, send back as array
  db.collection("bookCollection")
    .find({})
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});
