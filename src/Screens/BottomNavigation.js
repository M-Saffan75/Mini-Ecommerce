import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import Bookmark from './Bookmark'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef } from 'react'
const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarLabelStyle: { display: 'none' },
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 10,
                    marginHorizontal: 15,
                    paddingBottom: 20,
                    paddingHorizontal:7,
                    height: 50,
                    borderRadius: 10,
                    shadowColor: '#000',
                    showOpacity: 0.06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    }
                }
            }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <Image source={require('../images/home.png')} style={{height:20,width:20}}
                                tintColor={focused ? '#795548' : 'gray'}
                                
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
                <Tab.Screen name="About" component={About} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                          <Image source={require('../images/search.png')} style={{height:20,width:20}}
                                tintColor={focused ? '#795548' : 'gray'}  
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}>

                </Tab.Screen>
                {/* Screen with picture start */}
                <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
                    tabBarIcon: ({ focused }) => (

                        <TouchableOpacity>
                            <View style={{
                                width: 55,
                                height: 55,
                                backgroundColor: '#795548',
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: Platform.OS == "android" ? 20 : 20
                            }}>
                                <Entypo name='plus' 
                                style={{
                                    color:'#fff',
                                    fontSize:34,
                                    fontWeight:'bold',
                                }}
                                />
                            </View>
                        </TouchableOpacity>
                    )
                }}></Tab.Screen>
                {/* Serceen with end */}
                <Tab.Screen name="Bookmark" component={Bookmark} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <FontAwesome5 name='heart' size={20}
                                color={focused ? '#795548' : 'gray'}
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
                <Tab.Screen name="Contact" component={Contact} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ position: 'absolute', top: '50%' }}>
                            <FontAwesome5 name='user-alt' size={20}
                                color={focused ? '#795548' : 'gray'}
                            />
                        </View>
                    )
                }} listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 4,
                            useNativeDriver: true
                        }).start();
                    }
                })}
                ></Tab.Screen>
            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 2.5,
                backgroundColor: '#795548',
                position: 'absolute',
                bottom: 58,
                left: 33,
                borderRadius: 100,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }}>
            </Animated.View>
        </>
    )
}

function getWidth() {
    let width = Dimensions.get("window").width
    width = width - 45
    return width / 5
}

const About = () => {
    return (
        <View>
            <Text>Services</Text>
        </View>
    )
}

const Contact = () => {
    return (
        <View>
            <Text>Contact</Text>
        </View>
    )
}


function EmptyScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }

export default BottomNavigation

const styles = StyleSheet.create({})