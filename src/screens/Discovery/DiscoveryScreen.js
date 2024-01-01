import React, { useLayoutEffect  } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, ScrollView,  } from "react-native";
import styles from "./styles";
import { categories_2 } from "../../data/dataArrays";
import { locations } from "../../data/dataArrays";
import LogoBK from "../../components/LogoBK/LogoBK";
import NavigationBar from "../../components/NaviBar/navibar";
import ToolBar2 from "../../components/ToolBar2/toolbar2";
import BackButton from "../../components/BackButton/BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DiscoveryScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;

  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTransparent: "true",
      headerStyle: {
        backgroundColor: '#fff',
        height: 110,
       },
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>BK Discovery</Text>
        </View>
      ),
      headerRight: () => <LogoBK />,
    });
  }, []);



  const onPressEvent = (item) => {
    const title = item.name;
    const category = item;
    navigation.navigate("Location", { item, email });
  };


  const renderEvent = ({ item }) => (
    <TouchableOpacity  underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressEvent(item)}>
      <View style={styles.eventItemContainer}>
        <Image style={styles.eventPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.eventName}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const handlePressToolbar = (item) => {
      navigation.navigate("Locations", {item, email}); 
  };
  
  const handlePressButton = (buttonName) => {
      if(buttonName === 'Home'){
        navigation.navigate("Home", {email});
      }
      //else if(buttonName === 'Discovery'){
      //  navigation.navigate("Discovery");
      //}
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

  const filteredLocations = locations.slice(5, 10);

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
