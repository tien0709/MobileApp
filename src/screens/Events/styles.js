import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  Viewcontainer: {
    flex: 1,
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
    borderTopWidth: 2,
    borderTopColor: '#70AEFF'
  },

  EventContainer: {
    width: '90%',
    margin: 20,
    height: 320,
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#cccccc',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'white',
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
    marginTop: 8
  },

  eventInfo: {
    marginTop: 3,
    marginBottom: 5,
  },

  //container: RecipeCard.container,
  photo: {
    width: '100%',
    height: 160,
    borderWidth:1,
    borderColor: '#cccccc',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
});

export default styles;