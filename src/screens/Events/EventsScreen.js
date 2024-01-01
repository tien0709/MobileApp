import React, { useLayoutEffect } from "react";
import { FlatList, Text, View,  Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import LogoBK from "../../components/LogoBK/LogoBK";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";
import { Events } from "../../data/dataArrays";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function EventsScreen(props) {
  const { navigation, route} = props;
  const email = route?.params?.email;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sự kiện</Text>
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
      headerRight: () => < LogoBK/>,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);

  const onPressEvent = (event) => {
    navigation.navigate("Event", { event, email });
  };

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

  const renderLocations = ({ item }) => (
        <View style={styles.EventContainer}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventInfo}>
                <Icon style={styles.logo} name="calendar-week" size={15} color="#000" /> Bắt đàu trong: {item.time} 
            </Text>
            <Text style={styles.eventInfo}>
                <Icon style={styles.logo} name="user-friends" size={15} color="#000" /> Tham gia: {item.num}
            </Text>
            <TouchableOpacity  style={styles.button} underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(item)}>
                <Text style={styles.buttonText}>Tham gia</Text>
            </TouchableOpacity>
        </View>
  );

  return (
    <View style={styles.Viewcontainer}>
        <FlatList style={styles.container}
            ListHeaderComponent={
              <View style={styles.headerFlatlist}>
              </View>
            }
        vertical showsVerticalScrollIndicator={false} numColumns={1} data={Events} renderItem={renderLocations} keyExtractor={(item) => `${item.id}`} />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
