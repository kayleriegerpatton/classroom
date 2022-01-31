const axios = require("axios");

// args sent from front end
// context available across all resolvers ie logged in
const character = async (parent, { id }, context, info) => {
  const config = {
    method: "get",
    url: `https://the-one-api.dev/v2/character/${id}`,
    headers: {
      Authorization: "Bearer BrpGqSmrq0YKVVPwlYYF",
    },
  };

  const { data } = await axios(config);

  console.log(parent);

  return data.docs[0];
};

module.exports = character;
