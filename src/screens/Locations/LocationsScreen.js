import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { getLocations, getCategoryName } from "../../data/MockDataAPI";
import LogoBK from "../../components/LogoBK/LogoBK";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";

export default function LocationsScreen(props) {
  const { navigation, route } = props;
  const email = route?.params?.email;
  const item = route?.params?.item;
  const locationsArray = getLocations(item.id);
  const name = item.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18}} numberOfLines={2} textAlign="center">{item.name}</Text>
        </View>
      ),
      headerStyle: {
        backgroundColor: '#fff',
        height: 110,
       },
      //headerTransparent: "true",
      headerRight: () => <LogoBK />,
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, []);

  const onPressLocation = (item) => {
    navigation.navigate("Location", { item, email });
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
    //console.log(item.tile),
    <TouchableOpacity underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressLocation(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.Viewcontainer}>
        <FlatList
            ListHeaderComponent={
              <View style={styles.headerFlatlist}>
                <View style={styles.searchContainer}>
                  <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Tìm kiếm địa điểm"
                    //onChangeText={handleSearch}
                    //value={value}
                  />
                </View>
                <Text style={styles.text}>{name}</Text>
              </View>
            }
            vertical showsVerticalScrollIndicator={false} numColumns={2} data={locationsArray} renderItem={renderLocations} keyExtractor={(item) => `${item.Id}`} />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
