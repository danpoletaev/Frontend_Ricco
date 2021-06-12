import React, {useState, useRef, Component} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import {Divider} from 'react-native-elements';
import {AntDesign} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';
import {set} from "react-native-reanimated";

const CartPage = ({route, navigation}) => {

    const SPACER_SIZE = 1000;
    const TOP_COLOR = 'white';
    const isIos = Platform.OS === 'ios'

    const { setCart, cart } = route.params;
    console.log(cart)

    const getImage = (id) => {
        const new_id = id % 11;
        switch(new_id) {
            case 1:
                return require('../assets/parts/Allen_Key.png')
            case 2:
                return require('../assets/parts/Black_base.png')
            case 3:
                return require('../assets/parts/CamLockNut.png')
            case 4:
                return require('../assets/parts/Cam_Angle.png')
            case 5:
                return require('../assets/parts/Cam_screw.png')
            case 6:
                return require('../assets/parts/Drawer_Front.png')
            case 7:
                return require('../assets/parts/Drawer_rail.png')
            case 8:
                return require('../assets/parts/Rod_Clip.png')
            case 9:
                return require('../assets/parts/Shelf_Pins.png')
            case 10:
                return require('../assets/parts/Wood_Dowel.png')
        }
    }

    const getSubtotal = () => {
        if (cart.length === 0)
            return 0;

        let sum = 0;
        cart.forEach((item) => {
            sum += item.price
        })
        return sum;
    }

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            nestedScrollEnabled={true}
            style={{backgroundColor: TOP_COLOR}}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Checkout </Text>
                <Text style={{fontSize: 16, marginBottom: 20, color: 'gray'}}>{cart.length} Items </Text>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 25}}/>
                <View style={{height: 300}}>
                    <ScrollView
                        contentContainerStyle={styles.scroll_container}
                        showsVerticalScrollIndicator={false}
                    >
                        {cart.length !== 0 && cart.map((item) => {
                            return (
                                <View style={styles.card} key={item.id}>
                                    <Image source={getImage(item.id)} style={styles.furnImg}/>
                                    <View style={{width: 150}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10, width: 130}}>{item.name}</Text>
                                        <Text style={{marginLeft: 12, color: 'gray', marginTop: 20, width: 130}}>Part #:
                                            {item.product_id}</Text>
                                    </View>
                                    <View style={{display: 'flex', flexDirection: 'column'}}>
                                        <TouchableOpacity style={{marginBottom: 5}}>
                                            <View style={styles.rect}>
                                                <AntDesign name="plus" size={16} color="black"/>
                                            </View>
                                        </TouchableOpacity>
                                        <View style={[styles.rect, {marginBottom: 5}]}>
                                            <Text style={{fontSize: 16}}>{1}</Text>
                                        </View>
                                        <TouchableOpacity style={{marginBottom: 5}}>
                                            <View style={styles.rect}>
                                                <AntDesign name="minus" size={16} color="black"/>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 20, marginTop: 10}}/>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Subtotal:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$ {getSubtotal()}</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Tax:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$ {Math.round(getSubtotal() * 18) / 100}</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10
                }}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Delivery:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$ {cart.length != 0 ? 3.49 : 0}</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    marginTop: 10
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Total:</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>$ {cart.length === 0 ? 0 : Math.round((getSubtotal() + getSubtotal() * 0.18 + 3.49) * 100) / 100}</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'flex-end'}}>
                    <Pressable
                        onPress={() => {
                            if (cart.length === 0)
                                alert('You did not add anything...')
                            navigation.navigate('Details Page', {price: Math.round((getSubtotal() + getSubtotal() * 0.18 + 3.49) * 100) / 100})
                        }}
                        style={({pressed}) => [
                            {
                                backgroundColor: pressed
                                    ? '#fff'
                                    : '#000',
                                color: pressed
                                    ? '#000'
                                    : '#fff'

                            },
                            styles.button
                        ]}>
                        <Text style={styles.textButton}>Buy now</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    scroll_container: {
        paddingBottom: 0
    },
    furnImg: {
        width: 100,
        height: 100,
        marginLeft: 20
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    rect: {
        width: 25,
        height: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 20,
        elevation: 3,
        // backgroundColor: '#fff',
        marginTop: 20,
        width: 170
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
});

export default withNavigation(CartPage)
