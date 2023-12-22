import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default function LogoBK() {
  return (
    <View style={styles.logoContainer}>
      <Image source={require("../../../assets/bk.png")} style={styles.logo} />
    </View>
  );
}

