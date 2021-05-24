import camelize from "camelize";
import { host } from "../../utils/env";

export const locationRequest = (searchQuery) => {
  return fetch(`${host}/geocode?city=${searchQuery}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = ({ results = [] }) => {
  const camelizedData = camelize(results);
  const { geometry = {} } = camelizedData[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
