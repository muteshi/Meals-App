import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card";

export const RestaurantScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.container}>
        <RestaurantCard />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1,
    padding: 10,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  text: {
    paddingLeft: 5,
    alignContent: "center",
    alignItems: "center",
  },
});
