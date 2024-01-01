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
    width: '100%',
    marginVertical: 20,
    height: 'auto',

    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'white',
  },


  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 20,
  },

  eventEmail: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginLeft: 20,
    
  },

  eventDateCMT: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 15,
    marginTop: 5,
  },

  eventDate: {
    fontSize: 14,
    color: '#333333',
    marginLeft: 15,
    marginTop: 20,
  },

  eventInfoCMT: {
    marginTop: 3,
    marginLeft: 15,
    fontSize: 20,
  },

  eventInfo: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 20,
  },

  //container: RecipeCard.container,
  photo: {
    width: 90,
    height: 90,
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
    borderTopWidth: 2,
    borderTopColor: '#70AEFF',
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
    marginTop: 20,
    color: "black",
    fontSize: 16,
    width: '90%',
    height: 'auto',
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
    marginLeft: 10,
  },

  contentContainer:{
        marginHorizontal: 10,
        width: '90%',
  },

  voteContainer:{
    flexDirection: 'row',
    marginTop: 20,
    borderColor: 'black',
    borderTopWidth: 0.5, 
    borderBottomWidth: 0.5 ,
    padding: 10, 
  },

  voteContainerCMT:{
    flexDirection: 'row',
    marginTop: 10,
  },


  icon: {
  },
  numText: {
     marginHorizontal: 20,
  },

  textContainer:{
    flexDirection: 'row',
  }
});

export default styles;