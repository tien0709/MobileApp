import React, { useLayoutEffect, useState, useEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import BellIcon from "../../components/Bell/Bell";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";


export default function QRCreateScreen(props) {
  const { navigation, route} = props;
  const email = route?.params?.email;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tạo mã QR</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#fff',
        height: 110,
       },
      //headerTransparent: "true",
      headerRight: () => < BellIcon/>,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);


  const handlePressButton = (buttonName) => {
    if(buttonName === 'Home'){
      navigation.navigate("Home",{email});
    }
    else if(buttonName === 'Discovery'){
      navigation.navigate("Discovery", {email});
    }
   // else if(buttonName === 'QR'){
   //   navigation.navigate("QR", {email});
   // }
    else if(buttonName === 'Forums'){
     navigation.navigate("Forums",{email});
    }
    else if(buttonName === 'Contibute'){
      navigation.navigate("Contribute", {email});
    }
};



  return (
    <View style={styles.Viewcontainer}>
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}

