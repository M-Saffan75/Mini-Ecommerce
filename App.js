/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import BottomNavigation from './Screens/BottomNavigation';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductInfo from './Screens/ProductInfo';
import Mycart from './Screens/Mycart';
import MapHere from './Screens/MapHere';
import OnBoard from './Screens/OnBoard';
import DrawerNavigation from './Screens/DrawerNavigation'
import CustomDrawer from './Screens/CustomDrawer';
const App = () => {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        {/* <Stack.Screen name='OnBoard' component={OnBoard} /> */}
        {/* <Stack.Screen name='BottomNavigation' component={BottomNavigation} />
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='ProductInfo' component={ProductInfo} />
        <Stack.Screen name='Mycart' component={Mycart} />
        <Stack.Screen name='MapHere' component={MapHere} /> */}
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='DrawerNavigation' component={DrawerNavigation} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
