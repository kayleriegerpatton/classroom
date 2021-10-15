const userContainer = $("#users");
const fetchButton = $("#fetch-button");

const renderUserDivs = function (data) {
  const constructUserDiv = function (eachUser) {
    // get login
    const userLogin = eachUser.login;

    // get user url
    const userURL = eachUser.html_url;

    // construct user div
    const userDiv = `<div>
    <h3>${userLogin}</h3>
    <p>${userURL}</p>
  </div>`;

    // append to userContainer
    userContainer.append(userDiv);
  };
  // iterate over user data
  data.forEach(constructUserDiv);
};

const getAPI = function () {
  const handleResponse = function (response) {
    return response.json();
  };
  // get data from API
  fetch("https://api.github.com/users?per_page=5")
    .then(handleResponse)
    .then(renderUserDivs);
};

fetchButton.on("click", getAPI);
