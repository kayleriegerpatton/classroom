// /api/books/
const getAllBooks = (req, res) => {
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

// /api/books/:id
const getBookById = (req, res) => {
  res.json({ message: "run getBookById fn" });
};

module.exports = { getAllBooks, getBookById };
