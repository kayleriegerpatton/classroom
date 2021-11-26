// /view/users
const renderUsers = (req, res) => {
  res.json({ message: "run renderUsers fn" });
};

// /view/books
const renderBooks = (req, res) => {
  res.json({ message: "run renderBooks fn" });
};

module.exports = { renderUsers, renderBooks };
