import React, { useLayoutEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import { categories } from "../../data/dataArrays";
import { Events } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import LogoBK from "../../components/LogoBK/LogoBK";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
//import {DrawerStack} from "../../navigations/AppNavigation";
import NavigationBar from "../../components/NaviBar/navibar";
import ToolBar from "../../components/ToolBar/toolbar";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTransparent: "true",
      headerStyle: {
        // backgroundColor: (
          //<LinearGradient colors={['blue', 'green']} />
        //  <LinearGradient colors={['#BCD4F9', '#DFEBFC']} style={styles.gradientBorder}/>
        // ), // Gradient từ đen sang trắng
        backgroundColor: '#9DBFF3',
        height: 100,
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
              //onChangeText={handleSearch}
              //value={value}
            />
          </View>

      ),
      headerTitle: "",
      headerRight: () => <LogoBK />,
    });
  }, []);



  const onPressEvent = (item) => {
    navigation.navigate("Event",{item});
  };

  const onPressEventViewAll = () => {
    navigation.navigate("Events");
  };


  const renderEvent = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(item)}>
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
    </TouchableHighlight>
  );

  const handlePressButton = (buttonName) => {
      if(buttonName === 'Home'){
        navigation.navigate("Home");
      }
      else if(buttonName === 'Discovery'){
        navigation.navigate("Discovery");
      }
      else if(buttonName === 'QR'){
        navigation.navigate("QR");
      }
      else if(buttonName === 'Forum'){
        navigation.navigate("Forum");
      }
      else if(buttonName === 'Contibute'){
        navigation.navigate("Contribute");
      }
      else if(buttonName === 'Event'){
        navigation.navigate("Events");
      }
      else if(buttonName === 'QRCreate'){
        navigation.navigate("QR");
      }

  };

  const filteredEvents = Events.filter(item => item.id === 0);
  const firstFilteredEvent = filteredEvents.length > 0 ? filteredEvents[0] : null;

  return (
   /* <View style={styles.container}>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} 
        ListHeaderComponent={() => (
          <View>
            <ToolBar onPressButton={handlePressButton}/>
            <Text style={styles.Text}>Sự kiện</Text>
            <Text style={styles.Text}>Đề xuất sự kiện</Text>
            <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(filteredEvents)}>
              <View style={styles.SpecialEventContainer}>
                <Image style={styles.eventPhoto} source={{ uri: filteredEvents.photo_url }} />
                <Text style={styles.eventName}>{filteredEvents.name}</Text>
                <Text style={styles.categoriesInfo}>
                  <Icon style={styles.logo} name="calendar-week" size={15} color="#000" />Bắt đàu trong: {filteredEvents.time} Ngày
                </Text>
                <Text style={styles.categoriesInfo}>
                  <Icon style={styles.logo} name="user-friends" size={15} color="#000" />Tham gia: {filteredEvents.num}
                </Text>
              </View>
            </TouchableHighlight>
            <Text style={styles.Text}>Tất cả sự kiện</Text>
          </View>
        )}
      />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>*/
    <View style={styles.Viewcontainer}>
          <View>
            <LinearGradient
              colors={['#9DBFF3', '#E2EDFF']}
              style={styles.gradientBorder}
            >
            <ToolBar onPressButton={handlePressButton}/>
            </LinearGradient>
          </View>
          <ScrollView style={styles.container}>
            <Text style={styles.Text}>Sự kiện</Text>
            <Text style={styles.Text}>Đề xuất sự kiện</Text>
            <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(filteredEvents)}>
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
            </TouchableHighlight>
            <View style={styles.textRow}>
                <Text style={styles.Text}>Tất cả sự kiện</Text>
                <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEventViewAll(filteredEvents)}>
                     <Text style={styles.TextViewAll}>Tất cả</Text>
                </TouchableHighlight>
            </View>
            <FlatList data={Events} renderItem={renderEvent} keyExtractor={(item) => `${item.id}`} horizontal={true}/>
          </ScrollView>
          <View>      
              <NavigationBar onPressButton={handlePressButton}/> 
          </View>
    </View>


  );
}
