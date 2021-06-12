import React, {useState, useRef} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const CartPage = ({route, navigation}) => {

    const SPACER_SIZE = 1000;
    const TOP_COLOR = 'white';
    const isIos = Platform.OS === 'ios'

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            nestedScrollEnabled = {true}
            style={{backgroundColor: TOP_COLOR }}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Checkout </Text>
                <Text style={{fontSize: 16, marginBottom: 20, color: 'gray'}}>2 Items </Text>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 25}}/>
                <View style={{height: 300}}>
                <ScrollView
                    contentContainerStyle={styles.scroll_container}
                    showsVerticalScrollIndicator={false}
                >
                <View style={styles.card}>
                    <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                    <View style={{width: 150}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10, width: 130}}>Hemnes Knobs</Text>
                        <Text style={{marginLeft: 12, color: 'gray', marginTop: 20, width: 130}}>Part #: 110215</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <TouchableOpacity style={{marginBottom: 5}}>
                            <View style={styles.rect}>
                                <AntDesign name="plus" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                            <View style={[styles.rect, {marginBottom: 5}]}>
                                <Text style={{fontSize: 16}}>{2}</Text>
                            </View>
                        <TouchableOpacity style={{marginBottom: 5}}>
                            <View style={styles.rect}>
                                <AntDesign name="minus" size={16} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                        <View style={{width: 150}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10, width: 130}}>Hemnes Knobs</Text>
                            <Text style={{marginLeft: 12, color: 'gray', marginTop: 20, width: 130}}>Part #: 110215</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <TouchableOpacity style={{marginBottom: 5}}>
                                <View style={styles.rect}>
                                    <AntDesign name="plus" size={16} color="black" />
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.rect, {marginBottom: 5}]}>
                                <Text style={{fontSize: 16}}>{2}</Text>
                            </View>
                            <TouchableOpacity style={{marginBottom: 5}}>
                                <View style={styles.rect}>
                                    <AntDesign name="minus" size={16} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                        <View style={{width: 150}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft: 10, width: 130}}>Hemnes Knobs</Text>
                            <Text style={{marginLeft: 12, color: 'gray', marginTop: 20, width: 130}}>Part #: 110215</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <TouchableOpacity style={{marginBottom: 5}}>
                                <View style={styles.rect}>
                                    <AntDesign name="plus" size={16} color="black" />
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.rect, {marginBottom: 5}]}>
                                <Text style={{fontSize: 16}}>{2}</Text>
                            </View>
                            <TouchableOpacity style={{marginBottom: 5}}>
                                <View style={styles.rect}>
                                    <AntDesign name="minus" size={16} color="black" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                </View>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 20, marginTop: 10}}/>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Subtotal:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$8.42</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Tax:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$ 1.53</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontSize: 14, color: 'gray'}}>Delivery:</Text>
                    <Text style={{fontSize: 14, color: 'gray'}}>$ 3.49</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, marginTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Total:</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>$ 12.42</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'flex-end'}}>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Details Page')
                    }}
                    style={({ pressed }) => [
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
        height: 80,
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

export default CartPage
