import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchQuery) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchQuery];
    if (!locationMock) reject("Not found!");
    resolve(locationMock);
  });
};

export const locationTransform = ({ results = [] }) => {
  const camelizedData = camelize(results);
  const { geometry = {} } = camelizedData[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
