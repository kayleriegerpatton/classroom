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
  // extract id from request

  // /api/users/123 returns: {id: 123}
  console.log(req.params);

  // /api/users/123?foo=bar returns: {foo: bar}
  console.log(req.query);

  res.json({ message: "run getUserById fn" });
};

module.exports = { getAllUsers, getUserById };
