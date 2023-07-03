import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = (props) => {
  return (
    <View style={{flex: 1}}>
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: '#8200d6'}}>
      <ImageBackground
        source={require('../images/onBoard1.png')}
        style={{padding: 20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Image
          source={require('../images/onBoard1.png')}
          style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
        />
        <Text style={{color:'#fff',bottom:30}}> cross</Text>
        </View>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontFamily: 'Roboto-Medium',
            marginBottom: 5,
          }}>
          John Doe
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Roboto-Regular',
              marginRight: 5,
            }}>
            Your Email :
          </Text>
          <Text style={{color:'#fff'}}>something@gmail.com</Text>
        </View>
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
    <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
      <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name='home' style={{fontSize:20}}/>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}>
            Tell a Friend
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name='home' style={{fontSize:20}} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'Roboto-Medium',
              marginLeft: 5,
            }}>
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
    )
}

export default CustomDrawer
