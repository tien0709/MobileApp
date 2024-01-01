import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import BackButton from "../../components/BackButton/BackButton";
import LogoBK from "../../components/LogoBK/LogoBK";
import NavigationBar from "../../components/NaviBar/navibar";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width: viewportWidth } = Dimensions.get("window");

export default function LocationScreen(props) {
  const { navigation, route } = props;
  item = route.params?.item;
  const email = route?.params?.email;

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();
  const itemTitle = item.title; // Giả sử item có thuộc tính title
  useLayoutEffect(() => {
    navigation.setOptions({
      //headerTransparent: "true",
      headerTitle: () => (
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20}} textAlign="center">{ itemTitle}</Text>
        </View>
      ),
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
      headerRight: () => <LogoBK />,
    });
  }, [itemTitle]);

  const renderImage = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableOpacity>
  );

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


  return (
    <View style={styles.Viewcontainer}>
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={slider1Ref}
              data={item.photosArray}
              renderItem={renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => setActiveSlide(0)}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={slider1Ref.current}
              tappableDots={!!slider1Ref.current}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
      <View>      
            <NavigationBar onPressButton={handlePressButton}/> 
      </View>
    </View>
  );
}
