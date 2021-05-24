import camelize from "camelize";

export const locationRequest = (searchQuery) => {};

export const locationTransform = ({ results = [] }) => {
  const camelizedData = camelize(results);
  const { geometry = {} } = camelizedData[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
