import React from "react";
import { List } from "react-native-paper";

export const Accordion = ({ categories, title }) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title={title}>
      {categories.map((category, index) => (
        <List.Accordion
          title={category.title}
          left={(props) => <List.Icon {...props} icon={category.icon} />}
          //   expanded={expanded}
          //   onPress={handlePress}
          key={index}
        >
          {category.items.map((item, index) => (
            <List.Item title={item} key={index} />
          ))}
        </List.Accordion>
      ))}
    </List.Section>
  );
};
