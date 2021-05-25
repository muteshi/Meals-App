const { mocks, addMockImages } = require("./mock");
const functions = require("firebase-functions");
const url = require("url");

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) data.results = data.results.map(addMockImages);
    return response.json(data);
  }
  client
    .placesNearby({
      params: {
        location,
        radius: 15000,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(addMockImages);
      return response.json(res.data);
    })
    .catch((err) => {
      response.status(400);
      return response.send(err.response.data.error_message);
    });
};
