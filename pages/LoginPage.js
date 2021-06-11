import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

const LoginPage = ({ navigation }) => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.text}>Enter your phone to login/register: </Text>
            <PhoneInput
                defaultValue={value}
                defaultCode="CZ"
                layout="first"
                onChangeText={(text) => {
                    setValue(text);
                }}
                onChangeFormattedText={(text) => {
                    setFormattedValue(text);
                }}
                withDarkTheme
                withShadow
            />
            <Pressable
                onPress={() => {
                    navigation.navigate('Confirm Phone')
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

export default LoginPage
