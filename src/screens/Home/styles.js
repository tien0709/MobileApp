import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Viewcontainer: {
    flex: 1,
  },

  container: {
    marginTop:0,
    flex: 1,
    backgroundColor: '#fff',

  },

  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fdfdfd", 
    borderRadius: 10, 
    width: 250,
    justifyContent: "space-around",
    marginLeft: 20,
    marginBottom: 5,
  },
  searchIcon: { 
    marginLeft: 20,
    width: 20, 
    height: 20, 
    tintColor: 'grey' 
  },
  searchInput: {
    backgroundColor: "#fdfdfd",
    color: "black",
    width: 180,
    height: 50,
  },

  SpecialEventContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#fdfdfd",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Cho Android để hiển thị bóng đổ
  },

  eventItemContainer: {
    //flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 20,
    width: 300,
    backgroundColor: "#fdfdfd",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // Cho Android để hiển thị bóng đổ
  },


  eventPhoto: {
    width: '100%',
    height: 132,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },


  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },

  eventInfo: {
    marginTop: 3,
    marginBottom: 10,
  },

  Text: {
       fontSize: 20,
       margin: 15,
       fontWeight: 'bold',
  },

  TextViewAll: {
    fontSize: 20,
    margin: 15,
    marginRight: 20,
    fontWeight: 'bold',
    color : '#6499E9',
  },

  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logo: {
  },

  eventContainer: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 10,
  },

  gradientBorderEvent:{
    borderRadius: 15, 
    flexDirection: 'row',
  },
  eventText:{
     margin: 15,
  },

  eventText1:{
      fontSize: 20,
      color: '#0066FF',
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 1,
  },

  eventText2:{
    fontSize: 16,
    color: '#A6F6FF',
    fontWeight: 'bold',
  },

  eventText3:{
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    padding: 7,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
});

export default styles;
