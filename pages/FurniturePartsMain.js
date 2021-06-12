import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FurniturePartsPage from "./FurnitrePartsPage";

const Tab = createBottomTabNavigator();

const FurniturePartsMain = ({ route, navigation }) => {
    const { scanned_data } = route.params;
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                activeBackgroundColor: "#fff",
                inactiveBackgroundColor: "#fff"
            }}
        >
            <Tab.Screen name="Home" component={FurniturePartsPage} initialParams={{scanned_data}}/>
            <Tab.Screen name="Settings" component={FurniturePartsPage} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
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
});

export default FurniturePartsMain
