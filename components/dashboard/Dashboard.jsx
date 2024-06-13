import { Text, View } from "react-native";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { styles } from "./dashboard.style";
import Button from "../button/Button";
import { BottomSheet, ListItem } from "@rneui/themed";
import CustomCarousel from "../carousel/CustomCarousel";

const Dashboard = ({ email, setUserData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];
  const bottomSheetHandler = () => {
    setIsVisible(true);
  };
  return (
    <View style={styles.container}>
      <Navbar email={email} setUserData={setUserData} />

      <CustomCarousel bottomSheetHandler={bottomSheetHandler} />

      <Button
        title={"Bottom Sheet"}
        width="100%"
        onPress={bottomSheetHandler}
      />

      <BottomSheet modalProps={{}} isVisible={isVisible}>
        {list.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={l.containerStyle}
            onPress={l.onPress}
          >
            <ListItem.Content>
              <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};

export default Dashboard;
