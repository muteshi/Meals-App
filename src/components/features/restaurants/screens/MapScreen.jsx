import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import { LocationContext } from "../../../../services/location/LocationContext";
import { RestaurantContext } from "../../../../services/restaurants/RestaurantContext";
import { MapCallout } from "../components/MapCallout";
import { SearchMap } from "../components/SearchMap";

const MapContainer = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const RestaurantMap = ({ navigation }) => {
  const { restaurants } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);

  const [latDelta, setLatDelta] = useState(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northEastLat = viewport.northeast.lat;
    const southEastLat = viewport.southwest.lat;

    const latDelta = northEastLat - southEastLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <MapContainer
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name + restaurant.placeId}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetails", {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapContainer>
      <SearchMap />
    </>
  );
};

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  if (!location) {
    return (
      <MapContainer
        region={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.02,
        }}
      />
    );
  }
  return <RestaurantMap />;
};
