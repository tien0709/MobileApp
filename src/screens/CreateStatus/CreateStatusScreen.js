import React, { useLayoutEffect, useState } from "react";
import { Text, View, Image, TextInput } from "react-native";
import styles from "./styles";
import { getUserbyEmail, CreateStatus } from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import CreateButton from "../../components/CreateButton/CreateButton";
import NavigationBar from "../../components/NaviBar/navibar";


export default function CreateStatusScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;
  const [value, setValue] = useState('');  

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Tạo bài viết</Text>
        </View>
      ),
      headerStyle: {
        // backgroundColor: (
          // <LinearGradient colors={['#000', '#fff']} />
        // ), // Gradient từ đen sang trắng
        backgroundColor: '#fff',
        height: 110,
       },
      //headerTransparent: "true",
      headerRight: () => (
        console.log(value),//bắt buộc có nều không value =""=>> tại sao nhỉ
        <CreateButton
          onPress={() => CreateStatus(value, email)}
        />
      ),
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [value]);


  const handlePressButton = (buttonName) => {
    if(buttonName === 'Home'){
      navigation.navigate("Home", {email});
    }
    else if(buttonName === 'Discovery'){
      navigation.navigate("Discovery", {email});
    }
    else if(buttonName === 'QR'){
      navigation.navigate("QR", {email});
    }
    else if(buttonName === 'Forums'){
      navigation.navigate("Forums", {email});
    }
    else if(buttonName === 'Contibute'){
      navigation.navigate("Contribute", {email});
    }
};
 

  let user = getUserbyEmail(email);

  return (
      <View style={styles.Viewcontainer}>
        <View style={styles.EventContainer}>
          <View style={styles.UserContainer}>
              <Image style={styles.photo} source={{ uri: user.photo_url }} />
              <View>
                <Text style={styles.eventName}>{user.name}</Text>
                <Text style={styles.eventEmail}>{user.email}</Text>
              </View>
          </View>
          <TextInput
                    multiline = { true}
                    style={styles.searchInput}
                    placeholder=" Bạn đang nghĩ gì...? "
                    onChangeText={(text) => setValue(text)}
                />
        </View>
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
