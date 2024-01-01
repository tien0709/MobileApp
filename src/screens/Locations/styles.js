import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  Viewcontainer: {
    marginTop: 0,
    borderTopWidth: 2,
    borderTopColor: '#70AEFF',
    flex: 1,
  },

  searchContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#E0E0E0", 
    borderRadius: 15, 
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

  text:{
           fontSize: 20,
           fontWeight: 'bold',
           color: 'black',
           marginTop: 10,
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

  headerFlatlist:{
      marginHorizontal: 20,
  },
  
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;