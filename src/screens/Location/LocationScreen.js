import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import LogoBK from "../../components/LogoBK/LogoBK";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import NavigationBar from "../../components/NaviBar/navibar";

const { width: viewportWidth } = Dimensions.get("window");

export default function LocationScreen(props) {
  const { navigation, route } = props;
  item = route.params?.item;
  const category = item.id;
  const title = item.name;

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();
  const itemTitle = item.title; // Giả sử item có thuộc tính title
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
      },
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <LogoBK />,
      headerTitle: itemTitle,
    });
  }, [itemTitle]);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
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
