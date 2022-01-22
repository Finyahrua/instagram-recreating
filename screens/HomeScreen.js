import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Banner from "../components/homeScreenComponents/Banner";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#160726" }}>
      <Banner />
    </SafeAreaView>
  );
};

export default HomeScreen;
