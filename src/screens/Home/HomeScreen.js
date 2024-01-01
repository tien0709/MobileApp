import React, { useLayoutEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import { Events } from "../../data/dataArrays";
import LogoBK from "../../components/LogoBK/LogoBK";
import NavigationBar from "../../components/NaviBar/navibar";
import ToolBar from "../../components/ToolBar/toolbar";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;
  console.log("home:", email);
  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTransparent: "true",
      headerStyle: {
        backgroundColor: '#9DBFF3',
        height: 110,
      },
      headerLeft: () => (
       // <MenuImage
       //   onPress={() => {
       //     navigation.openDrawer();
       //   }}
      //  />
          <View style={styles.searchContainer}>
            <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
            <TextInput
              style={styles.searchInput}
              placeholder="search ... "
            />
          </View>

      ),
      headerTitle: "",
      headerRight: () => <LogoBK />,
    });
  }, []);



  const onPressEvent = (item) => {
    navigation.navigate("Event",{event:item, email});
  };

  const onPressEventViewAll = () => {
    navigation.navigate("Events",{email});
  };


  const renderEvent = ({ item }) => (
    <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(item)}>
      <View style={styles.eventItemContainer}>
        <Image style={styles.eventPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventInfo}>
          <Icon style={styles.logo} name="calendar-week" size={10} color="#000" />Bắt đàu trong: {item.time} 
        </Text>
        <Text style={styles.eventInfo}>
          <Icon style={styles.logo} name="user-friends" size={10} color="#000" />Tham gia: {item.num} 
        </Text>
      </View>
    </TouchableOpacity>
  );

  const handlePressButton = (buttonName) => {
     // if(buttonName === 'Home'){
     //   navigation.navigate("Home");
     // }
       if(buttonName === 'Discovery'){
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
      else if(buttonName === 'Event'){
        navigation.navigate("Events", {email});
      }
      else if(buttonName === 'QRCreate'){
        navigation.navigate("QRCreate", {email});
      }

  };

  const filteredEvents = Events.filter(item => item.id === 0);
  const firstFilteredEvent = filteredEvents.length > 0 ? filteredEvents[0] : null;

  return (
    <View style={styles.Viewcontainer}>
          <View >
            <LinearGradient
              colors={['#9DBFF3', '#E2EDFF']}
              style={styles.gradientBorder}
            >
            <ToolBar onPressButton={handlePressButton}/>
            </LinearGradient>
          </View>
          <ScrollView style={styles.container}>
            <Text style={styles.Text}>Sự kiện</Text>
            <View style={styles.eventContainer}>
              <LinearGradient
                colors={['#34AAFF', '#A0C5FA']}
                style={styles.gradientBorderEvent}
              >
                <Image source={require("../../../assets/calendar.png")}/>
                <View style={styles.eventText}>
                      <Text style={styles.eventText1}>Your Event</Text>
                      <Text style={styles.eventText2}>See your event here!</Text>
                      <Text style={styles.eventText3}>Sắp diễn ra: {Events.length}</Text>
                </View>
              </LinearGradient>
            </View>
            <Text style={styles.Text}>Đề xuất sự kiện</Text>
            <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(filteredEvents[0])}>
              <View style={styles.SpecialEventContainer}>
                <Image style={styles.eventPhoto} source={{ uri: firstFilteredEvent.photo_url }} />
                <Text style={styles.eventName}>{firstFilteredEvent.name}</Text>
                <Text style={styles.eventInfo}>
                  <Icon style={styles.logo} name="calendar-week" size={15} color="#000" /> Bắt đàu trong: {firstFilteredEvent.time} 
                </Text>
                <Text style={styles.eventInfo}>
                  <Icon style={styles.logo} name="user-friends" size={15} color="#000" /> Tham gia: {firstFilteredEvent.num}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.textRow}>
                <Text style={styles.Text}>Tất cả sự kiện</Text>
                <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEventViewAll(filteredEvents)}>
                     <Text style={styles.TextViewAll}>Tất cả</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={Events} renderItem={renderEvent} keyExtractor={(item) => `${item.id}`} horizontal={true}/>
          </ScrollView>
          <View>      
              <NavigationBar onPressButton={handlePressButton}/> 
          </View>
    </View>


  );
}
