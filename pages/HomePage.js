import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';


const HomePage = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.text}>Scan QR of furniture: </Text>
            <TouchableOpacity>
                <Image
                    source={require('../assets/qr_code.png')}
                    style={styles.qr_img}
                />
            </TouchableOpacity>
            <Pressable
                onPress={() => {
                    navigation.navigate('Login Page')
                }}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'gray'
                            : '#fff'
                    },
                    styles.button
                ]}>
                <Text style={styles.textButton}>Login</Text>
            </Pressable>
        </ScrollView>
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
    qr_img: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20
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
        color: '#7ed957',
    },
});

export default HomePage
