import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  Viewcontainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: '#70AEFF',
  },

  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  },


  headerFlatlist:{
      marginHorizontal: 20,
  },
  
  container: {
    marginTop: 0,
    paddingTop: 10,
    flex: 1,
  },

  EventContainer: {
    width: '90%',
    margin: 20,
    height: 'auto',
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'white',
    shadowColor: '#8080FF',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Cho Android để hiển thị bóng đổ
  },

  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8,
    marginLeft: 15,
  },

  eventInfo: {
    marginTop: 3,
    marginBottom: 10,
    fontSize: 20,
  },

  //container: RecipeCard.container,
  photo: {
    width: 70,
    height: 70,
    borderWidth:1,
    borderColor: '#cccccc',
    borderRadius: 50,
  },

  button: {
    marginVertical: 10,
    borderWidth: 1, 
    backgroundColor: '#03C0FC',
    borderRadius: 5, 
    paddingHorizontal: 20, // Để làm cho góc nút trở nên tròn
    paddingVertical: 10, 
  },

  buttonText: {
    color: 'black', // Màu chữ của nút
    fontSize: 20,
    textAlign: 'center',
  },

  GroupcontainerSelect: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 9999, // Set a high zIndex to ensure it appears above other elements
  },

  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#DAF0FF", 
    borderRadius: 10, 
    width: 200,
    justifyContent: "space-around",
    marginLeft: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, 
    //borderWidth: 1,
  },
  searchIcon: { 
    marginLeft: 20,
    width: 20, 
    height: 20, 
    tintColor: 'grey' 
  },
  searchInput: {
    backgroundColor: "#DAF0FF",
    color: "black",
    width: 100,
    height: 50,
    marginLeft: 20,
  },

  dropList: {
    backgroundColor: "#DAF0FF", 
    width: 150,
     shadowColor: '#000',
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.4,
     shadowRadius: 4,
     elevation: 5, 
  },

  dropListContainer: {
  },

  numTopicContainer:{
     margin: 20,
     borderRadius: 10, 
     backgroundColor: "#DAF0FF", 
     width: 100,
     shadowColor: '#000',
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.4,
     shadowRadius: 4,
     elevation: 5, 
     padding: 10,
 },

  numTopic:{
     textAlign: 'center',
     fontWeight: 'bold',
     zIndex: 1,
  },

  UserContainer:{
    flexDirection: 'row',
    width: '90%',
    marginTop: 30,
  },

  contentContainer:{
        margin: 10,
        width: '90%',
  },

  voteContainer:{
    flexDirection: 'row',
    marginTop: 10,
  },

  icon: {
  },
  numText: {
     marginHorizontal: 20,
  },
});

export default styles;