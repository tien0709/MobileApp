import React from "react";
import { View, Image, Button } from "react-native";
import styles from "./styles";


export default function SplashScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={require("../../../assets/splash.png")} />
      <View style={styles.buttonContainer}>
        <Button
            title="Get Started"
            onPress={() => {
              navigation.navigate("Login");
            }}
            color="#ffffff"
        />
      </View>
    </View>
  );
}
