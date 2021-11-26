const getAllUsers = (req, res) => {
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

const getUserById = (req, res) => {
  res.json({ message: "run getUserById fn" });
};

module.exports = { getAllUsers, getUserById };
