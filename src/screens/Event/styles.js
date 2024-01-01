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

  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8,
  },

  eventInfo: {
    marginTop: 3,
    marginBottom: 10,
    fontSize: 20,
  },

  //container: RecipeCard.container,


  GroupcontainerSelect: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 9999, // Set a high zIndex to ensure it appears above other elements
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
     margin: 10,
     borderRadius: 10, 
     backgroundColor: "#DAF0FF", 
     width: 170,
     shadowColor: '#000',
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.4,
     shadowRadius: 4,
     elevation: 5, 
     padding: 10,
     alignContent:"center",
 },

 numTopicContainerSelected:{
  margin: 10,
  borderRadius: 10, 
  backgroundColor: "#03a9f4", 
  width: 170,
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 5, 
  padding: 10,
  alignContent:"center",
},

numTopicContainerChildSelect:{
  margin: 10,
  borderRadius: 10, 
  backgroundColor: "white", 
  width: 170,
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 2 },
  shadowOpacity: 0.4,
  shadowRadius: 4,
  elevation: 5, 
  padding: 10,
  alignContent:"center",
  borderColor: '#03a9f4',
  borderWidth: 1.5,
},
 comment:{
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 10, 
    backgroundColor: "#e1f5fe", 
    width: 370,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, 
    padding: 10,
    fontSize: 12,
 },

 textComment:{
  textAlign: 'center',
},

  numTopic:{
     textAlign: 'center',
     fontWeight: 'bold',
     zIndex: 1,
     fontSize: 13,
  },

  numMember:{
    marginLeft: 20,
  },
  Groupcontainer:{
     marginHorizontal: 20,
  },



  nameEvent:{
      fontWeight: 'bold',
      fontSize: 20,
      overflow: 'visible',
      marginHorizontal: 10,
      marginVertical: 10,
      marginBottom: 20,
  },

  headerTable:{
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    padding: 10,
    marginTop: 20,
  },

  rank: {
     marginHorizontal: 10,
     width: 40
  },

  hoten: {
    marginLeft: 50,
    width: 80
  },

  point: {
    marginHorizontal: 10,
    width: 40
  },

  mssv: {
    marginHorizontal: 20,
    marginLeft: 40,
    width: 50
  },

  partRank: {
    marginHorizontal: 20,
    width: 10,
 },

 partName: {
   marginHorizontal: 20,
   width: 80,
 },

 partPoint: {
   marginHorizontal: 20,
 },

 partMSSV: {
  marginHorizontal: 20,
  marginLeft: 5,
 },

 partPhoto:{
       borderRadius: 50,
       width: 30,
       height: 30,
       marginLeft: 20,
 },

  timeText1:{
    fontSize: 16,
  },

  time:{
      marginHorizontal: 20,
      marginVertical: 10,
      borderTopWidth: 1,
      borderColor: 'lightblue',
      paddingVertical: 15,
      flexDirection: 'row',
  },

  timeText:{
    marginLeft: 10,
  },

  officialText: {
    width: 100,
    backgroundColor: '#03a9f4',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
  },

  official:{
    marginTop: 10,
    marginLeft: 20,
  },

  eventItemContainer: {
    padding: 10,
    flexDirection: 'row',
    borderTopColor: 'lightblue',
    borderTopWidth: 1,
  },

  gradientButton: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginLeft: 20,
    color: 'white',
  }




});

export default styles;