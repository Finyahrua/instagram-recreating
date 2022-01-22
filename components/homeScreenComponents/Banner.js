import React from "react";
import { View, Text,TouchableOpacity} from "react-native";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
const Banner = () => {
  const [loaded] = useFonts({
    Billabong: require("../../assets/fonts/FontsFree-Net-Billabong.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Ionicons name="ios-menu-outline" size={30} color="gray" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "Billabong",
          fontSize: 40,
          marginHorizontal: 100,
          color: "gray",
        }}
      >
        Instagram
      </Text>
      <TouchableOpacity>
        <Feather name="mail" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Banner;
