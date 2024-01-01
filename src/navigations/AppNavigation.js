import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import LocationsScreen from '../screens/Locations/LocationsScreen';
import LocationScreen from '../screens/Location/LocationScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';

import SplashScreen from '../screens/Splash/SplashScreen';
import LoginScreen from '../screens/login/LogInScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import DiscoveryScreen from  '../screens/Discovery/DiscoveryScreen';
import QRScreen from  '../screens/QR/QRScreen';
import ContributeScreen from  '../screens/Contribute/ContributeScreen';
import ForumsScreen from  '../screens/Forums/ForumsScreen';
import ForumCommentScreen from  '../screens/Forum_comment/ForumCommentScreen';
import CreateStatusScreen from  '../screens/CreateStatus/CreateStatusScreen';
import EventScreen from  '../screens/Event/EventScreen';
import EventsScreen from  '../screens/Events/EventsScreen';
import QRCreateScreen from  '../screens/QRCreate/QRCreateScreen';
 const Stack = createStackNavigator();
 import EventRankScreen from  '../screens/Event/EventRankScreen';
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
      <Stack.Screen name='Locations' component={LocationsScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen name='Location' component={LocationScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen name='QR' component={QRScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Contribute' component={ContributeScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Forums' component={ForumsScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Forum_comment' component={ForumCommentScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Create_Status' component={CreateStatusScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Discovery' component={DiscoveryScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='QRCreate' component={QRCreateScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Event' component={EventScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen name='Events' component={EventsScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      />
          <Stack.Screen name='EventRank' component={EventRankScreen}
        options={{
          headerShown: true,
          headerTitle: '',
        }}
      /></Stack.Navigator>
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