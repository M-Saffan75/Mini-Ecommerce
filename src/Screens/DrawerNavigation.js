import 'react-native-gesture-handler';
import React from 'react'
import CustomDrawer from './CustomDrawer'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BottomNavigation from './BottomNavigation';
import HomeScreen from './HomeScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="home-outline" size={22} color={color} />
          ),
        }}
      />
                <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="home-outline" size={22} color={color} />
          ),
        }}
      />
              <Drawer.Screen
        name="Service"
        component={Service}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name="home-outline" size={22} color={color} />
          ),
        }}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
const About = () => {
    return (
      <View>
        <Text>About</Text>
      </View>
    )
  }
  
  const Service = () => {
    return (
      <View>
        <Text>Service</Text>
      </View>
    )
  }
  
