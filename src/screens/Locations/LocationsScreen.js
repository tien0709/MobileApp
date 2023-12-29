import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput } from "react-native";
import styles from "./styles";
import { getLocations, getCategoryName } from "../../data/MockDataAPI";
import LogoBK from "../../components/LogoBK/LogoBK";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";
import { ScrollView } from "react-native-gesture-handler";

export default function LocationsScreen(props) {
  const { navigation, route } = props;
  const item = route?.params?.item;
  const locationsArray = getLocations(item.id);
  const name = item.name;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: item.name,//route.params?.title,
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
      headerTransparent: "true",
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
    navigation.navigate("Location", { item });
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

  const renderLocations = ({ item }) => (
    //console.log(item.tile),
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressLocation(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableHighlight>
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
