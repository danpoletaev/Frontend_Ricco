import React, {useState, useRef} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';

const FurniturePartsPage = ({route, navigation}) => {

    const {scanned_data} = route.params;

    return (
        <View style={styles.container}>
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
                        <Image source={require('../assets/sofa.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Hemnes Knobs</Text>
                        <Text style={styles.partText}>Part #: 110215</Text>
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
                        <Image source={require('../assets/Bed.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>IKEA Leksvik Knobs</Text>
                        <Text style={styles.partText}>Part #: 214121</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
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
                        <Image source={require('../assets/Chair.png')} style={styles.cardImg}/>
                        <Text style={styles.cardHeader}>Brimnes Handle</Text>
                        <Text style={styles.partText}>Part #: 12214214</Text>
                        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                            <MaterialIcons name="attach-money" size={18} color="black"/>
                            <Text>5.49</Text>
                        </View>
                    </View>
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
        height: 170,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        marginRight: 5,
        marginLeft: 5,
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
        width: 110,
        height: 40,
        marginTop: 25,
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
    }
});

export default FurniturePartsPage
