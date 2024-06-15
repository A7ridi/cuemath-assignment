import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { styles } from "./dashboard.style";
import { BottomSheet } from "@rneui/themed";
import CustomCarousel from "../carousel/CustomCarousel";
import CustomWebview from "../webview/CustomWebview";
import CurvedButton from "../button/CurvedButton";

const Dashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(false);

  const bottomSheetHandler = () => {
    setIsVisible(!isVisible);
  };

  if (webViewVisible) {
    return <CustomWebview setWebViewVisible={setWebViewVisible} />;
  }

  return (
    <View style={styles.container}>
      <Navbar />

      <CustomCarousel
        setWebViewVisible={setWebViewVisible}
        bottomSheetHandler={bottomSheetHandler}
      />

      <CurvedButton onPress={bottomSheetHandler} />

      <BottomSheet isVisible={isVisible} onBackdropPress={bottomSheetHandler}>
        <View style={styles.bottomSheetContainer}>
          <TouchableOpacity
            style={styles.buttonIcon}
            onPress={bottomSheetHandler}
          >
            <Image
              source={require("../../assets/images/carrot.png")}
              style={styles.icon}
            />
          </TouchableOpacity>

          <View style={styles.bottomSheetContent}>
            <Text style={styles.bottomSheetText}>
              This is a <Text style={{ fontWeight: "700" }}>bottom sheet</Text>,
              launched by tapping the lottie or swiping up
            </Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Dashboard;
