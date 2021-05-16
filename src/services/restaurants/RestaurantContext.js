import React, { createContext, useEffect, useMemo, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./RestaurantService";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadRestaurants = () => {
    setLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((restaurantResults) => {
          setLoading(false);
          setRestaurants(restaurantResults);
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    loadRestaurants();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
