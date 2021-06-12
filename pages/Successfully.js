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

const SuccessfullyPage = ({route, navigation}) => {

    const SPACER_SIZE = 1000;
    const TOP_COLOR = 'white';
    const isIos = Platform.OS === 'ios'

    const [name, setName] = React.useState(null);
    const [street, setStreet] = React.useState(null);
    const [country, setCountry] = React.useState(null);
    const [zip, setZip] = React.useState(null);
    const [email, setEmail] = React.useState(null);

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            nestedScrollEnabled = {true}
            style={{backgroundColor: TOP_COLOR }}>
            <View style={{display: 'flex', alignItems: 'center'}}>
                <Text style={{fontSize: 24, marginTop: 150}}>Thank you for your order! </Text>
                <Image source={require('../assets/success.png')} style={styles.furnImg}/>
                <Pressable
                    onPress={() => {
                        navigation.navigate('Home')
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
                    <Text style={styles.textButton}>Return Home</Text>
                </Pressable>
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
    },
    scroll_container: {
        paddingBottom: 0
    },
    furnImg: {
        width: 50,
        height: 50,
        marginTop: 30
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

export default SuccessfullyPage
