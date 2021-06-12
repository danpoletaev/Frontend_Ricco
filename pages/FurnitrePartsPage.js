import React, {useState, useRef} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';

const FurniturePartsPage = ({route, navigation}) => {

    // const {scanned_data} = route.params;

    return (
        <View style={styles.container}>
            <FAB
                style={styles.fab}
                icon="cart"
                onPress={() => navigation.navigate('Cart Page')}
                color={"#fff"}
            />
            <ScrollView contentContainerStyle={styles.mainContainer} alwaysBounceVertical={true}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Relevant parts for: </Text>
                <View style={styles.furnitureCard}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>BEKANT</Text>
                        <Text style={{fontSize: 12, marginTop: 10}}>Article #: 492.822.82</Text>
                    </View>
                    <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                </View>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Allen_Key.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Allen Key</Text>
                        <Text style={styles.partText}>Part #: 100001</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Black_base.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Black Base Leveler</Text>
                        <Text style={styles.partText}>Part #: 115988</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/CamLockNut.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Cam Lock Nut</Text>
                        <Text style={styles.partText}>Part #: 110630</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Cam_Angle.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Cam lock Nut Angle Pin</Text>
                        <Text style={styles.partText}>Part #: 103091</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Cam_screw.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Cam Lock screw</Text>
                        <Text style={styles.partText}>Part #: 118331</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Drawer_Front.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Drawer Front</Text>
                        <Text style={styles.partText}>Part #: 113281</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Drawer_rail.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Drawer rail</Text>
                        <Text style={styles.partText}>Part #: 100365</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Rod_Clip.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Rod Clip white</Text>
                        <Text style={styles.partText}>Part #: 117793</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Shelf_Pins.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Shelf Pins</Text>
                        <Text style={styles.partText}>Part #: 110525</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                    {/*    Wood Dowel*/}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Part Page")
                }}>
                    <View style={styles.cardContainer}>
                        <Image source={require('../assets/parts/Wood_Dowel.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Wood Dowel</Text>
                        <Text style={styles.partText}>Part #: 101350</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
                    {/*    Wood Dowel*/}
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        // justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 70,
        marginBottom: 20
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 20,
        elevation: 3,
        // backgroundColor: '#fff',
        marginTop: 40,
        width: 170
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#7ed957',
    },
    cardContainer: {
        width: 170,
        height: 180,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
    },
    mainContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        paddingBottom: 100
    },
    cardImg: {
        width: 70,
        height: 70,
        marginTop: 10,
    },
    cardHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        maxWidth: 130
    },
    partText: {
        fontSize: 15,
        maxWidth: 130,
        marginTop: 5
    },
    furnitureCard: {
        width: 300,
        height: 170,
        borderWidth: 2,
        borderColor: '#f2f2f2',
        borderRadius: 20,
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20
    },
    furnImg: {
        width: 130,
        height: 100,
        marginLeft: 20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: '#7ed957'
    },
});

export default FurniturePartsPage
