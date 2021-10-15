// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = "https://api.github.com/repos/twitter/chill/issues";

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Github Repo Issues \n----------");
    const showData = function (each) {
      console.log(each.url);
      console.log(each.user.login);
    };

    // TODO: Loop through the response
    data.forEach(showData);
    // TODO: Console log each issue's URL and each user's login
  });
