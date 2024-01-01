import React, { useLayoutEffect, useState} from "react";
import { FlatList, Text, View,  Image,  TouchableOpacity } from "react-native";
import styles from "./styles";
import { getUser } from "../../data/MockDataAPI";
import BellIcon from "../../components/Bell/Bell";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";
import { Participants, Accounts, Status } from "../../data/dataArrays";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function EventRankScreen(props) {
  const { navigation, route} = props;
  const email = route?.params?.email;
  const event = route?.params?.event;
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
    else if(buttonName === 'QR'){
      navigation.navigate("QR", {email});
    }
    else if(buttonName === 'Forums'){
      navigation.navigate("Forums",{email});
    }
    else if(buttonName === 'Contibute'){
      navigation.navigate("Contribute", {email});
    }
};

  const [selectedValue, setSelectedValue] = useState(0);
  const [count, setCount] = useState(Status.length);
  const arrWithIdEvent = Participants.filter((item) => item.idEvent === event.id).sort((a, b) => b.Point - a. Point);



  
  const includes = (str, subStr) => {
    return str.includes(subStr);
  };

  var user = (null);
  var index = 0;
  const renderEvent = ({  item }) => (
      user = getUser(item.idAccount),
      index++,
      <View style={styles.eventItemContainer}>
        <Text style={styles.partRank}>{index}</Text>
        <Image style={styles.partPhoto} source={{ uri: user.photo_url }} />
        <Text style={styles.partName}>{user.name}</Text>
        <Text style={styles.partMSSV}>2022364</Text>
        <Text style={styles.partPoint}>{item.Point}</Text>
      </View>
  );


  return (
    <View style={styles.Viewcontainer}>
      <View style={styles.GroupcontainerSelect}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.numTopicContainer}>
          <View>
              <Text style={styles.numTopic}><Icon style={styles.logo} name="book-open" size={20} color="#455A64"/>
              Thông tin sự kiện</Text>
          </View>
        </TouchableOpacity> 

        <View style={styles.numTopicContainerSelected}>
          <Text style={styles.numTopic}><Icon style={styles.logo} name="medal" size={20} color="#455A64"/>
          Thành viên và bảng xếp hạng</Text>
        </View>       
   
      </View>
      <View style={styles.comment}>
          <Text style={styles.textComment}>Hoàn thành sự kiện để nhận chứng nhận thành tích</Text>
      </View>    
      <View style={styles.Groupcontainer}>
        <Text style={styles.nameEvent}>{event.name}</Text>
        <View style={styles.headerTable}>
            <View style={styles.rank}>
              <Text style={styles.timeText1}>Hạng</Text>
            </View>
            <View style={styles.hoten}>
              <Text style={styles.timeText1}>Họ và tên</Text>
            </View>
            <View style={styles.mssv}>
              <Text style={styles.timeText1}>MSSV</Text>
            </View>
            <View style={styles.point}>
              <Text style={styles.timeText1}>Điểm</Text>
            </View>
        </View>
        <FlatList data={arrWithIdEvent} renderItem={renderEvent} keyExtractor={(item) => `${item.id}`} horizontal={false}/>
      </View>
    <NavigationBar onPressButton={handlePressButton}/>
  </View>
);
}

