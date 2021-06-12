import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Alert, Modal } from "react-native";

const HomePage = ({ navigation, route }) => {
    const [visible, setVisible] = useState(false);
    const [id_visible, setIdVisible] = useState(false);
    const [type_visible, setTypeVisible] = useState(false);

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [hide, setHide] = React.useState(false)


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.text}>Scan QR of furniture: </Text>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Choose an option to find your furniture</Text>
                        <Pressable
                            onPress={() => {
                                setVisible(!visible)
                                navigation.navigate('Scan QR')
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Scan QR</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setVisible(!visible)
                                navigation.navigate('Scan BarCode')
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Scan Barcode</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setVisible(!visible)
                                setIdVisible(true)
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Enter ID</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.v_button, styles.buttonClose]}
                            onPress={() => {
                                setVisible(!visible)
                            }}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            {/* choose type*/}
            <Modal
                animationType="slide"
                transparent={true}
                visible={type_visible}
                onRequestClose={() => {
                    setTypeVisible(!type_visible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Choose what you want to do: </Text>
                        <Pressable
                            onPress={() => {
                                setTypeVisible(!type_visible)
                                let num = number
                                onChangeNumber('')
                                navigation.navigate('Furniture Parts', {
                                    scanned_data: num
                                })
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Find Parts</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setTypeVisible(!type_visible)
                                navigation.navigate('BuyBack Page', {
                                    scanned_data: data
                                })
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Sell Back</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.v_button, styles.buttonClose]}
                            onPress={() => setTypeVisible(!type_visible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={id_visible}
                onRequestClose={() => {
                    setIdVisible(!id_visible);
                }}
            >
                <View style={styles.centeredView2}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Enter ID</Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="ABC-12345"
                            />
                        </SafeAreaView>
                        <Pressable
                            onPress={() => {
                                setIdVisible(!id_visible)
                                setTypeVisible(true)
                            }}
                            style={({ pressed }) => [
                                {
                                    borderColor: pressed
                                        ? 'gray'
                                        : '#7ed957'
                                },
                                styles.modal_button
                            ]}>
                            <Text style={styles.textButton}>Find</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.v_button, styles.buttonClose]}
                            onPress={() => setIdVisible(!id_visible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                onPress={() => {
                    setVisible(true)
                }}
                style={({ pressed }) => [
                    {
                        borderColor: pressed
                            ? 'gray'
                            : '#fff'
                    },
                    styles.button
                ]}>
                <Text style={styles.textButton}>Find furniture</Text>
            </Pressable>
            {!hide && <Pressable
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
            </Pressable>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7ed957'
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
        backgroundColor: '#fff',
        marginTop: 20,
        width: 170,
    },
    modal_button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 20,
        elevation: 3,
        // backgroundColor: '#fff',
        marginTop: 20,
        width: 170,
        borderWidth: 2,
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#7ed957',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    centeredView2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    v_button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        width: 200,
        padding: 10,
        borderColor: '#7ed957'
    },
});

export default HomePage
