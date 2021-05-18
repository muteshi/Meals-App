import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not found!");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const newResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(newResults);
};
