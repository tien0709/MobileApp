/*import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import { categories } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import LogoBK from "../../components/LogoBK/LogoBK";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
//import {DrawerStack} from "../../navigations/AppNavigation";
import NavigationBar from "../../components/NaviBar/navibar";
export default function DiscoveryScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
        alignSelf: "center",
        flex: 1,
      },
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <LogoBK />,
    });
  }, []);

  const onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("NavigationFromHome", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} Units</Text>
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
  };

  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderCategory} keyExtractor={(item) => `${item.id}`} />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
*/


import React, { useLayoutEffect  } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, Pressable, ScrollView, SectionList } from "react-native";
import styles from "./styles";
import { categories_2 } from "../../data/dataArrays";
import { categories } from "../../data/dataArrays";
import { Events } from "../../data/dataArrays";
import { locations } from "../../data/dataArrays";
import { getNumberOfRecipes } from "../../data/MockDataAPI";
import LogoBK from "../../components/LogoBK/LogoBK";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName } from "../../data/MockDataAPI";
//import {DrawerStack} from "../../navigations/AppNavigation";
import NavigationBar from "../../components/NaviBar/navibar";
import ToolBar2 from "../../components/ToolBar2/toolbar2";
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackButton from "../../components/BackButton/BackButton";

export default function DiscoveryScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerTitle: "BK Discovery",
      headerRight: () => <LogoBK />,
    });
  }, []);



  const onPressEvent = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("Event");
  };


  const renderEvent = ({ item }) => (
      <View style={styles.eventItemContainer}>
        <Image style={styles.eventPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.eventName}>{item.title}</Text>
        <TouchableHighlight  style={styles.button} underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(item)}>
            <Text style={styles.buttonText}>View</Text>
        </TouchableHighlight>
      </View>
  );

  const handlePressToolbar = (item) => {
      navigation.navigate("Locations", {item}); 
  };
  
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
  };

  //const filteredEvents = Events.filter(item => item.id === 0);
  //const firstFilteredEvent = filteredEvents.length > 0 ? filteredEvents[0] : null;
  const filteredLocations = locations.slice(5, 10);

    // Hàm render mỗi item trong từng section


  return (
    <View style={styles.Viewcontainer}>    
          <ScrollView style={styles.container}>
            <Image source={require("../../../assets/bg_discovery.png")} resizeMode="cover"/>
            <View style={styles.searchContainer}>
              <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
              <TextInput
                style={styles.searchInput}
                placeholder="Tìm kiếm địa điểm"
                //onChangeText={handleSearch}
                //value={value}
              />
            </View>
            <ToolBar2 data = {categories_2} onPress={handlePressToolbar}/>
            <Text style={styles.Text}>Địa điểm phổ biến</Text>
            <FlatList data={filteredLocations} renderItem={renderEvent} keyExtractor={(item) => `${item.Id}`} horizontal={true}/>
          </ScrollView>
          <View>      
              <NavigationBar onPressButton={handlePressButton}/> 
          </View>
    </View>


  );
}
