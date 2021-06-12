import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, Button, Pressable, Modal} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [visible, setVisible] = useState(false);
    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setVisible(true)
        setData(data)
        // navigation.navigate('Furniture Parts', {
        //     scanned_data: data
        // })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
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
                        <Text style={styles.modalText}>Choose what you want to do: </Text>
                        <Pressable
                            onPress={() => {
                                setVisible(!visible)
                                navigation.navigate('Furniture Parts', {
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
                            <Text style={styles.textButton}>Find Parts</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                setVisible(!visible)
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
                            onPress={() => setVisible(!visible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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
});
