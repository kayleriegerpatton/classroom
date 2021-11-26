const express = require("express");
const path = require("path");
const routes = require("./routes");

// create instance of express
const app = express();
const PORT = 3000;

app.use(routes);

// register static content
app.use(express.static("public"));

// Controller functions
const getUsers = (req, res) => {
  const users = [
    {
      firstName: "Bill",
      lastName: "Smith",
      email: "bill.smith@email.com",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@email.com",
    },
  ];
  res.json({ data: users });
};

const getBooks = (req, res) => {
  const books = [
    {
      title: "Book1",
      author: "author1",
      pages: "1234",
    },
    {
      title: "book 2",
      author: "author 2",
      pages: "1345",
    },
  ];
  res.json(books);
};

const renderHomePage = (req, res) => {
  //   join directory name, go up one level, and the file name
  const filePath = path.join(__dirname, "../", "public/index.html");
  res.sendFile(filePath);
};

const renderAboutUsPage = (req, res) => {
  //   join directory name, go up one level, and the file name
  const filePath = path.join(__dirname, "../", "public/about-us.html");
  res.sendFile(filePath);
};

// register GET paths
app.get("/", renderHomePage);
app.get("/about-us", renderAboutUsPage);
app.get("/users", getUsers);
app.get("/books", getBooks);

// DEMOS
// app.get("/", (req, res) => {
//   //   console.log(req);
//   res.send("hello from express");
// });

// // pull out goodbye controller function
// const goodbye = (req, res) => {
//   res.send("GOODBYE");
// };

// app.get("/goodbye", goodbye);

// connect to port
app.listen(PORT, () => {
  console.log(`Navigate to http://localhost:${PORT}`);
});
