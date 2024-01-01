import React, { useLayoutEffect, useState} from "react";
import { FlatList, Text, View, Image, TextInput, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import {  Status } from "../../data/dataArrays";
import { getUser } from "../../data/MockDataAPI";
import BellIcon from "../../components/Bell/Bell";
import BackButton from "../../components/BackButton/BackButton";
import PencilButton from "../../components/PencilButton/PencilButton";
import NavigationBar from "../../components/NaviBar/navibar";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

export default function ForumsScreen(props) {
  const { navigation, route} = props;
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

  const onPressComment = (item) => {
    navigation.navigate("Forum_comment", { item, email });
  };

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
   // else if(buttonName === 'Forums'){
   //   navigation.navigate("Forums",{email});
   // }
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
                <Text style={styles.eventName}>{user.name}</Text>
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.eventInfo}>
                {item.content} 
              </Text>
              <Text>
              {item.time}
              </Text>
              <View style={styles.voteContainer}>
                <TouchableOpacity   style={styles.icon} underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressComment(item)}>
                    <Icon style={styles.logo} name="comment" size={20} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.numText}>{item.cmt}</Text>
                <TouchableOpacity   underlayColor="rgba(73,182,77,0.9)" onPress={() => onPress(item)}>
                    <Icon style={styles.logo} name="heart" size={20} color="#000"/>
                </TouchableOpacity>
                <Text style={styles.numText}>{item.like}</Text>
              </View>
            </View>
        </View>
      );
  };

  const [items, setItems] = useState([
    { label: 'Tất cả', value: 0 },
    { label: 'Trang trường', value: 1 },
    { label: 'Người dùng', value: 2 },
  ]);
  const [selectedValue, setSelectedValue] = useState(0);
  const [open, setOpen] = useState(null);
  const [dataForFlatList, setDataForFlatList] = useState(Status);
  const [count, setCount] = useState(Status.length);
  const [value, setValue] = useState('');
  const arrWithIdAccountdiff0 = Status.filter((item) => item.idAccount !== 0);
  const arrWithIdAccount0 = Status.filter((item) => item.idAccount === 0);

  const handleItemSelect = (item) => {
    setSelectedValue(item.value);
    fetchDataForFlatList(item.value);
  };

  
  const includes = (str, subStr) => {
    return str.includes(subStr);
  };
  const handleSearch = (item) => {
  
    const results = [];
  
    Status.forEach((element) => {
      if (includes(element.content.toLowerCase(), item.toLowerCase())) {
        results.push(element);
      }
    });
    setDataForFlatList(results);
    setCount(results.length);
    setSelectedValue(0);
  };


  const fetchDataForFlatList = (value) => {
    if (value === 0&& value!==selectedValue) {
      setDataForFlatList(Status);
      setCount(Status.length);
    } else if (value === 1&& value!==selectedValue) {
      setDataForFlatList(arrWithIdAccount0);
      setCount(arrWithIdAccount0.length);
    } else if (value === 2&& value!==selectedValue) {
      setDataForFlatList(arrWithIdAccountdiff0);
      setCount(arrWithIdAccountdiff0.length);
    } else {
      // Xử lý trường hợp selectedValue khác 0, 1, 2
    }
  };


  return (
    <View style={styles.Viewcontainer}>
        <View style={styles.GroupcontainerSelect}>
            <View style={styles.dropListContainer}>
              <DropDownPicker
                open={open}
                value={selectedValue}
                defaultValue={selectedValue}
                items={items}
                setOpen={setOpen}
                setValue={setSelectedValue}
                setItems={setItems}
                containerStyle={{ height: 40 }}
                style={styles.dropList}
                itemStyle={{
                  justifyContent: 'flex-start',
                  backgroundColor: '#DAF0FF',

                }}
                dropDownStyle={{
                  backgroundColor: '#DAF0FF',
                  zIndex: 9999, // Set a high zIndex for the dropdown list
                }}
                onSelectItem={(item) => handleItemSelect(item)}
              />
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder=" ........ "
                    onChangeText={(text) => setValue(text)}
                    value={value}
                />
                <Button
                  title="search"
                  onPress={() => handleSearch(value)}
                  Icon={
                    <Icon name="home" size={20} color="red" />
                  }
                />
            </View>
        </View>
        <View style={styles.numTopicContainer}>
          <Text style={styles.numTopic}>{count} chủ đề</Text>
        </View>
        <PencilButton onPress={() => navigation.navigate('Create_Status',{email})}/>
        <FlatList
          style={styles.container}
          ListHeaderComponent={
            <View style={styles.headerFlatlist} />
          }
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={1}
          data={dataForFlatList} // Sử dụng dataForFlatList ở đây
          renderItem={renderStatus}
          keyExtractor={(item) => `${item.id}`}
          extraData={dataForFlatList}
      />
      <NavigationBar onPressButton={handlePressButton}/>
    </View>
  );
}
