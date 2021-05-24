const functions = require("firebase-functions");
const { geocodeRequest } = require("./geocde");
const { placesRequest } = require("./places");

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response);
});
