import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Viewcontainer: {
    flex: 1,
  },

  container: {
    marginTop: 110,
    paddingTop: 10,
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#70AEFF'
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
    height: 250,
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
  },

  eventItemContainer: {
    //flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
    width: 300,
    backgroundColor: "#fdfdfd",
  },


  eventPhoto: {
    width: '100%',
    height: 155,
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
       margin: 10,
       fontWeight: 'bold',
  },

  logo: {
  }
});

export default styles;
