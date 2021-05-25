import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./LocationService";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState("Nairobi");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchQuery) => {
    setLoading(true);
    setKeyword(searchQuery);
  };

  useEffect(() => {
    if (keyword.length === 0) return;
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setLoading(false);
        setLocation(result);
      })
      .catch((error) => {
        setLoading(false);

        setError(error);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        loading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
