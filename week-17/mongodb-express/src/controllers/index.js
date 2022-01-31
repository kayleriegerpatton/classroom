// '/' endpoint
const getAllCharacters = (req, res) => {
  req.db
    .collection("characters")
    .find()
    .toArray((error, results) => {
      if (error) {
        return res.status(500).json({ message: "Failed to get all." });
      }
      return res.json(results);
    });
};

module.exports = getAllCharacters;
