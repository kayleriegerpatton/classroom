// '/' endpoint
const getAll = (req, res) => {
  req.db
    //   *add db collection name
    .collection("")
    .find()
    .toArray((error, results) => {
      if (error) {
        return res.status(500).json({ message: "Failed to get all." });
      }
      return res.json(results);
    });
};

module.exports = getAll;
