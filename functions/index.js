const functions = require("firebase-functions");
const { payRequest } = require("./pay");
const { placesRequest } = require("./places");
const { geocodeRequest } = require("./geocde");

const stripeClient = require("stripe")(functions.config().stripe.key);
const { Client } = require("@googlemaps/google-maps-services-js");
const googleClient = new Client({});

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, googleClient);
});

exports.placesNearby = functions.https.onRequest((request, response) => {
  placesRequest(request, response, googleClient);
});

exports.pay = functions.https.onRequest((request, response) => {
  payRequest(request, response, stripeClient);
});
