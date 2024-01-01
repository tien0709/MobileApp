/*import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    marginTop: 100,
    paddingTop: 10,
    backgroundColor: 'white',
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#70AEFF'
  },

  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});

export default styles;*/

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Viewcontainer: {
    flex: 1,
  },

  container: {
    marginTop: 0,
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#70AEFF',
    backgroundColor: 'white',
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


  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginVertical: 21
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

  eventPhoto: {
    width: '100%',
    height: 182,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },


  logo: {
  },

  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionHeader: {
    padding: 10,
    backgroundColor: '#f0f0f0',
  },

  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#E0E0E0", 
    borderRadius: 10, 
    width: 250,
    justifyContent: "space-around",
    marginLeft: 80,
    marginVertical: 10,
  },

  searchIcon: { 
    marginLeft: 20,
    width: 20, 
    height: 20, 
    tintColor: 'grey' 
  },
  searchInput: {
    backgroundColor: "#E0E0E0",
    color: "black",
    width: 180,
    height: 50,
  },

  button: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#03C0FC', // Màu nền của nút
    borderRadius: 5, 
    paddingHorizontal: 20, // Để làm cho góc nút trở nên tròn
    paddingVertical: 10, 
  },

  buttonText: {
    color: 'blue', // Màu chữ của nút
    fontSize: 16,
    textAlign: 'center',
  },

});

export default styles;

