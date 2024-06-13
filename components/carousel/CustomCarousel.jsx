import { View, StyleSheet } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = ({ bottomSheetHandler }) => {
  const slides = [
    require("../../assets/images/carousel_1.png"),
    require("../../assets/images/carousel_2.png"),
    require("../../assets/images/carousel_3.png"),
  ];

  const imagesHandler = (id) => {
    if (id === 2) {
      bottomSheetHandler();
    }
  };

  return (
    <View style={styles.container}>
      <SliderBox
        images={slides}
        dotColor="white"
        inactiveDotColor="#808080"
        autoplay
        sliderBoxHeight={300}
        ImageComponentStyle={styles.image}
        onCurrentImagePressed={(id) => imagesHandler(id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 330,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    borderRadius: 15,
    width: 280,
    height: 280,
    resizeMode: "contain",
  },
});

export default Carousel;
