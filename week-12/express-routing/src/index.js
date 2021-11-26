const express = require("express");
const path = require("path");
const routes = require("./routes");

// create instance of express
const app = express();
const PORT = 3000;

app.use(routes);

// register static content
app.use(express.static("public"));

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
