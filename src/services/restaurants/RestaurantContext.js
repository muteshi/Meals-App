import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "../location/LocationContext";
import { restaurantsRequest, restaurantsTransform } from "./RestaurantService";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const loadRestaurants = (loc) => {
    setLoading(true);
    setRestaurants([]);
    restaurantsRequest(loc)
      .then(restaurantsTransform)
      .then((results) => {
        setLoading(false);
        setError(null);
        setRestaurants(results);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    if (location) {
      const newLocation = `${location.lat},${location.lng}`;
      loadRestaurants(newLocation);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
        loadRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
