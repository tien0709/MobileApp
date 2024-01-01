import React, { useLayoutEffect, useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import {  addParticipant } from "../../data/MockDataAPI";
import BellIcon from "../../components/Bell/Bell";
import BackButton from "../../components/BackButton/BackButton";
import NavigationBar from "../../components/NaviBar/navibar";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function EventScreen(props) {
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



  return (
    <View style={styles.Viewcontainer}>
      <ScrollView
           showsVerticalScrollIndicator={false} // Tắt hiển thị indicator cho cuộn dọc
      >
        <View style={styles.GroupcontainerSelect}>
          <View style={styles.numTopicContainerSelected}>
              <Text style={styles.numTopic}><Icon style={styles.logo} name="book-open" size={20} color="#455A64"/>
              Thông tin sự kiện</Text>
          </View>
          <TouchableOpacity style={styles.highlight} onPress={() => navigation.navigate("EventRank", {email, event})}>
            <View style={styles.numTopicContainer}>
            <Text style={styles.numTopic}><Icon style={styles.logo} name="medal" size={20} color="#455A64"/>
            Thành viên và bảng xếp hạng</Text>
            </View>       
          </TouchableOpacity>    
        </View>
        <View style={styles.comment}>
            <Text style={styles.textComment}>Hoàn thành sự kiện để nhận chứng nhận thành tích</Text>
        </View>    
        <View style={styles.GroupcontainerSelect}>
            <View style={styles.numTopicContainerChildSelect}>
            <Text style={styles.numTopic}>Thông tin</Text>
            </View>
            <View style={styles.numTopicContainer}>
            <Text style={styles.numTopic}>Thảo luận</Text>
            </View>             
        </View>
      <View style={styles.Groupcontainer}>
        <Text style={styles.nameEvent}>{event.name}</Text>
        <Text style={styles.numMember}><Icon style={styles.logo} name="shield-alt" size={20} color="#455A64"/>{event.host}</Text>
        <Text style={styles.official}><View style={styles.officialText}><Text>Official</Text></View> {event.num} Người tham gia</Text>
        <View style={styles.time}>
            <Icon style={styles.logoTime} name="calendar" size={30} color="#455A64"/>
            <View style={styles.timeText}>
              <Text style={styles.timeText1}>Thời gian diễn ra</Text>
              <Text style={styles.timeText2}>từ {event.time} đến {event.timeEnd}</Text>
            </View>
        </View>
        <View style={styles.time}>
            <Icon style={styles.logoTime} name="creative-commons-by" size={30} color="#455A64"/>
            <View style={styles.timeText}>
              <Text style={styles.timeText1}>Hình thức tham gia</Text>
              <Text style={styles.timeText2}>{event.typeAttention} </Text>
            </View>
        </View>
        <View style={styles.time}>
            <Icon style={styles.logoTime} name="building" size={30} color="#455A64"/>
            <View style={styles.timeText}>
              <Text style={styles.timeText1}>Địa điểm</Text>
              <Text style={styles.timeText2}>{event.location} </Text>
            </View>
            <TouchableOpacity onPress={() => addParticipant(email, event)} >
              <LinearGradient
                colors={['#BEE0FF', '#124FED', '#8316C6', '#F11869']}
                start={{ x: 0, y: 0.5 }} // Điểm bắt đầu theo chiều ngang
                end={{ x: 1, y: 0.5 }}   // Điểm kết thúc theo chiều ngang
                style={styles.gradientButton}
              >
                <Text style={styles.buttonText}>Khám phá</Text> 
              </LinearGradient>
            </TouchableOpacity>

        </View>
        <View style={styles.time}>
            <Icon style={styles.logoTime} name="user-friends" size={30} color="#455A64"/>
            <View style={styles.timeText}>
              <Text style={styles.timeText1}>Đối tượng tham gia</Text>
              <Text style={styles.timeText2}>{event.object} </Text>
            </View>
        </View>
      </View>
      </ScrollView>
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}

