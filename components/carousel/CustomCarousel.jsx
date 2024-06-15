import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Svg, { Circle } from "react-native-svg";

const Carousel = ({ bottomSheetHandler, setWebViewVisible }) => {
  const [showLoader, setShowLoader] = useState(false);

  const handlePress = () => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  };

  const slides = [
    require("../../assets/images/carousel_1.png"),
    require("../../assets/images/carousel_2.png"),
    require("../../assets/images/carousel_3.png"),
  ];

  const imagesHandler = (id) => {
    if (id === 2) {
      bottomSheetHandler();
    } else if (id === 0) {
      setWebViewVisible(true);
    } else {
      handlePress();
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

      {showLoader && (
        <View style={styles.loader}>
          <Svg
            height="308"
            width="308"
            viewBox="0 0 100 100"
            style={styles.svg}
          >
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
            />
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="3"
              fill="none"
              strokeDasharray="282.6"
              strokeDashoffset="188.4"
            />
          </Svg>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 330,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    borderRadius: 15,
    width: 280,
    height: 280,
    resizeMode: "contain",
  },
  loader: {
    position: "absolute",
    top: -12,
    transform: [{ rotate: "-90deg" }],
  },
});

export default Carousel;
