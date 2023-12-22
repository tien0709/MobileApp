import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import InfoFaculityScreen from '../screens/Falculity/FaculityScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import LoginScreen from '../screens/login/LogInScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import NavigationFromHomeScreen from  '../screens/NavigationFromHome/NavigationFromHome'
 const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
      screenOptions={{
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
          }
      }}
    >
      <Stack.Screen name='onBoard' component={SplashScreen}
      options={{ headerShown: false }}/> 
      <Stack.Screen name='Login' component={LoginScreen}
      options={{ headerShown: false }}/> 
      <Stack.Screen name='SignUp' component={SignUpScreen}
      options={{ headerShown: false }}/> 
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Falculity' component={InfoFaculityScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen name='NavigationFromHome' component={NavigationFromHomeScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen name='RecipesList' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
    </Stack.Navigator>
  )
} 

//       <Stack.Screen name='onBoard' component={SplashScreen}/>  đặt đầu tiên nên gọi MainNavigator thì onBoard xuất hiện đầu

 const Drawer = createDrawerNavigator();

function DrawerStack() {
  return(
    <Drawer.Navigator
      drawerPosition='left'
      initialRouteName='Main'
      drawerStyle={{
        width: 250
      }}
      screenOptions={{headerShown: false}}
      drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
    >
      <Drawer.Screen name='Main' component={MainNavigator} />
    </Drawer.Navigator>
  )
} 

 export default function AppContainer() {
  return(
    <NavigationContainer>
      <DrawerStack/>
    </NavigationContainer>
  )
} 
 

console.disableYellowBox = true;