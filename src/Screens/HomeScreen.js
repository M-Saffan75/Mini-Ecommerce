import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ScrollView,} from 'react-native'
import React, { useEffect, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLOURS, Items } from '../Database/database'
import {DrawerActions} from '@react-navigation/drawer';

const HomeScreen = ({ navigation }) => {

    const [shirt, setShirt] = useState([])
    const [jeans, setJeans] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => { getDataFromDB() });
        return unsubscribe;
    }, [navigation]);

    const getDataFromDB = () => {
        let shirtList = []
        let jeansList = []

        for (let index = 0; index < Items.length; index++) {
            if (Items[index].category == 'shirts') {
                shirtList.push(Items[index]);
            }
            else if (Items[index].category == 'jeans') {
                jeansList.push(Items[index]);
            }
        }
        setShirt(shirtList);
        setJeans(jeansList);
    }

    const ProductCard = ({ data }) => {
        return (
            <>
                <View style={{ paddingHorizontal: 20, width: '50%', marginTop: 30, backgroundColor: '#fff' }}>
                    <View style={{
                        width: '100%', height: 210, shadowColor: COLOURS.backgroundMedium, flexDirection: 'row', backgroundColor: COLOURS.backgroundLight,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 5, justifyContent: 'center', alignItems: 'center'
                    }}>

                        <TouchableOpacity activeOpacity={0.7} style={{position: 'absolute', top: 10, right: 10,}}>
                            <FontAwesome5 name='heart' style={{fontSize: 22,color: COLOURS.brown, }} />
                        </TouchableOpacity>
                        {
                            data.isOff ? (
                                <View style={{ position: 'absolute', top: 0, left: 0, backgroundColor: COLOURS.brown, padding: 2, paddingHorizontal: 5, borderTopLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <Text style={{ color: COLOURS.white, fontSize: 12 }}>{data.offPercentage}%</Text>
                                </View>
                            ) : null
                        }
                        <TouchableOpacity onPress={()=> navigation.navigate('ProductInfo' , {productID: data.id})}>
                            <Image source={data.productImage} style={{ height: 125, width: 125, borderRadius: 5, padding: 10, marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{ color: COLOURS.black, fontFamily: 'Poppins-Medium', paddingHorizontal: 5, fontSize: 14 }}>{data.productName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center' }}>
                        <Text style={{ color: COLOURS.black, fontFamily: 'Poppins-Medium', paddingHorizontal: 10, fontSize: 14 }}>Rs: {data.productPrice}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between',width:55,alignItems:'center'}}>
                            <Text style={{ color: COLOURS.black, fontFamily: 'Poppins-Medium', paddingHorizontal: 10, fontSize: 12, }}>{data.productRating}</Text>
                            <Image source={require('../images/star.png')} style={{height:12,width:12,position:'relative',right:10,bottom:2}} />
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={{ height: '100%', backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={COLOURS.white} barStyle='dark-content' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                    marginTop: 70, paddingHorizontal: 20,}}>
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}><Image source={require('../images/squares.png')} style={{ height: 20, width: 20, color: COLOURS.black }}/></TouchableOpacity>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: COLOURS.black, fontSize: 20, }}>Home</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('Mycart')}><FontAwesome5 name='shopping-cart' style={{ fontSize: 20, color: COLOURS.black }} /></TouchableOpacity>
                </View>

                <View style={{ marginTop: 30, paddingHorizontal: 20, }}>
                    <Text style={{ fontSize: 20, color: COLOURS.black, fontFamily: 'OpenSans-Bold' }}>Hi Clothes Here !</Text>
                    <Text style={{
                        fontSize: 13, color: COLOURS.backgroundDark,
                        fontFamily: 'Poppins-Medium', letterSpacing: .8,
                    }}>Search your favourite clothes here</Text>
                </View>

                {/* shirt category start */}

                <View style={{
                    marginTop: 30, paddingHorizontal: 20, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 16, color: COLOURS.black, fontFamily: 'OpenSans-Bold' }}>The Most searched t-shirts</Text>
                    <Text style={{ fontFamily: 'OpenSans-Bold', color: COLOURS.brown }}>View All</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    {
                        shirt.map(data => {
                            return <ProductCard data={data} key={data.id} />
                        })
                    }
                </View>

                {/* shirt category End */}


                {/* jeans category start */}


                <View style={{
                    marginTop: 30, paddingHorizontal: 20, flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style={{ fontSize: 16, color: COLOURS.black, fontFamily: 'OpenSans-Bold' }}>Recomended Shrits for you</Text>
                    <Text style={{ fontFamily: 'OpenSans-Bold', color: COLOURS.brown }}>View All</Text>
                </View>

                <View style={{ flexDirection: 'row',flexWrap:'wrap', justifyContent: 'space-around', marginBottom: 70 }}>
                    {
                        jeans.map(data => {
                            return <ProductCard data={data} key={data.id} />
                        })
                    }
                </View>
            </ScrollView>

            {/* jeans category End */}
        </View>
    )
}

export default HomeScreen;
const styles = StyleSheet.create({})