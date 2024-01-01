import React, { useLayoutEffect} from "react";
import { FlatList, Text, View, TouchableHighlight, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { getUser, getComment } from "../../data/MockDataAPI";
import BellIcon from "../../components/Bell/Bell";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function ForumCommentScreen(props) {
  const { navigation, route } = props;
  const item = route?.params?.item;
  const email = route?.params?.email;


  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Forum</Text>
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
  const renderStatus = ({ item }) => {
      let user = getUser(item.idAccount);
      return (
        <View style={styles.EventContainer}>
          <View style={styles.UserContainer}>
              <Image style={styles.photo} source={{ uri: user.photo_url }} />
              <View style={styles.contentContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.eventName}>{user.name}</Text>
                    <Text style={styles.eventDateCMT}>
                        {item.time}
                    </Text>
                  </View>
                  <Text style={styles.eventInfoCMT}>
                    {item.content} 
                  </Text>
              </View>
          </View>
          <View style={styles.voteContainerCMT}>
              <TouchableHighlight   style={styles.icon} underlayColor="rgba(73,182,77,0.9)" /*onPress={() => onPressComment(item.idStatus)}*/>
                  <Icon style={styles.logo} name="comment" size={20} color="#000"/>
              </TouchableHighlight>
              <Text style={styles.numText}>0</Text>
              <TouchableHighlight   underlayColor="rgba(73,182,77,0.9)" onPress={() => onPress(item)}>
                  <Icon style={styles.logo} name="heart" size={20} color="#000"/>
              </TouchableHighlight>
              <Text style={styles.numText}>{item.like}</Text>
          </View>
        </View>
      );
  };

  let user = getUser(item.idAccount);
  let cmts = getComment(item.id);

  return (
    <View style={styles.Viewcontainer}>
        <View style={styles.EventContainer}>
          <View style={styles.UserContainer}>
              <Image style={styles.photo} source={{ uri: user.photo_url }} />
              <Text style={styles.eventName}>{user.name}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.eventInfo}>
              {item.content} 
            </Text>
            <Text style={styles.eventDate}>
            {item.time}
            </Text>
            <View style={styles.voteContainer}>
              <TouchableOpacity   style={styles.icon} underlayColor="rgba(73,182,77,0.9)" >
                  <Icon style={styles.logo} name="comment" size={20} color="#000"/>
              </TouchableOpacity>
              <Text style={styles.numText}>{cmts.length}</Text>
              <TouchableHighlight   underlayColor="rgba(73,182,77,0.9)" onPress={() => onPress(item)}>
                  <Icon style={styles.logo} name="heart" size={20} color="#000"/>
              </TouchableHighlight>
              <Text style={styles.numText}>{item.like}</Text>
            </View>
          </View>
        </View>
        <FlatList style={styles.container}
            ListHeaderComponent={
              <View style={styles.headerFlatlist}>
              </View>
            }
        vertical showsVerticalScrollIndicator={false} numColumns={1} data={cmts} renderItem={renderStatus} keyExtractor={(item) => `${item.id}`} />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
