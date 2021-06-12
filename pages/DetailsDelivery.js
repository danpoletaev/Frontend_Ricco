import React, {useState, useRef} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const DetailsDelivery = ({route, navigation}) => {

    const SPACER_SIZE = 1000;
    const TOP_COLOR = 'white';
    const isIos = Platform.OS === 'ios'

    const [name, setName] = React.useState(null);
    const [street, setStreet] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [zip, setZip] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    const { price } = route.params

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            nestedScrollEnabled = {true}
            style={{backgroundColor: TOP_COLOR }}>
            <View>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Delivery Details </Text>
                <Text style={{fontSize: 16, marginBottom: 20, color: 'gray'}}>2 Items </Text>
                <View style={{display: 'flex', justifyContent: 'center'}}>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 25}}/>
                <View>
                    <Text style={styles.formText}>Enter your name: </Text>
                    <SafeAreaView style={{marginBottom: 15}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            placeholder="John Watson"
                        />
                    </SafeAreaView>
                    <Text style={styles.formText}>Enter your address: </Text>
                    <View style={{marginBottom: 15}}>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={setStreet}
                                value={street}
                                placeholder="Street"
                            />
                        </SafeAreaView>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input2}
                                    onChangeText={setCountry}
                                    value={country}
                                    placeholder="Country"
                                />
                            </SafeAreaView>
                            <SafeAreaView>
                                <TextInput
                                    style={styles.input2}
                                    onChangeText={setZip}
                                    value={zip}
                                    placeholder="Postal code"
                                />
                            </SafeAreaView>
                        </View>
                    </View>
                    <Text style={styles.formText}>Enter your E-mail: </Text>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="john@gmail.com"
                        />
                    </SafeAreaView>
                </View>
                <Divider orientation="horizontal" style={{width: 300, marginBottom: 20, marginTop: 15}}/>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Total:</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>$ {price}</Text>
                </View>
                <View style={{display: 'flex', alignItems: 'flex-end'}}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Success Page')
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
                        <Text style={styles.textButton}>Pay now</Text>
                    </Pressable>
                </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderRadius: 10,
        width: 290,
        padding: 10,
        borderColor: '#d3d3d3'
    },
    input2: {
        height: 40,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        width: 140,
        padding: 10,
        borderColor: '#d3d3d3'
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default DetailsDelivery
