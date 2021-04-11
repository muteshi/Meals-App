import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card, Title } from "react-native-paper";

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_960_720.jpg",
      "https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg",
    ],
    isClosedTemporarily,
    address = "Kitengela, Kajiado Kenya",
    isOpenNow = true,
    rating = 3,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Title style={styles.title}>{name}</Title>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    backgroundColor: "white",
    padding: 5,
  },
  title: {
    padding: 5,
  },
});
