import React, {useState, useRef} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';

const PartPage = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Relevant parts for: </Text>
                <View style={styles.furnitureCard}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>BEKANT</Text>
                        <Text style={{fontSize: 12, marginTop: 10}}>Part #: 492.822.82</Text>
                    </View>
                    <Image source={require('../assets/sofa.png')} style={styles.furnImg}/>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>Product Information:</Text>
                    <View style={{marginLeft: 10, marginTop: 20}}>
                        <Text style={styles.upperHeader}>• IKEA Drawer Rail Screws</Text>
                        <Text style={styles.upperHeader}>• IKEA Part #100365</Text>
                        <Text style={styles.upperHeader}>• Dimensions:</Text>
                        <View style={{marginLeft: 10}}>
                            <Text style={styles.upperHeader}>• 0.09 cm (L) x 0.06 cm (W) x 0.0 cm (D)</Text>
                            <Text style={styles.upperHeader}>• 0.03 in (L) x 0.02 in (W) x 0.0 in (D)</Text>
                        </View>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>• Price: $5.49</Text>
                    </View>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Pressable
                        onPress={() => {
                            alert('You added item to cart')
                        }}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? 'gray'
                                    : '#7ed957'
                            },
                            styles.button
                        ]}>
                        <Text style={styles.textButton}>Add to cart</Text>
                    </Pressable>
                </View>
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
    furnitureCard: {
        width: 300,
        height: 170,
        borderWidth: 2,
        borderColor: '#f2f2f2',
        borderRadius: 20,
        marginTop: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10,
        marginBottom: 20
    },
    furnImg: {
        width: 120,
        height: 50,
        marginLeft: 20
    },
    upperHeader: {
        fontSize: 15,
        marginBottom: 10
    },
    button: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 12,
        borderRadius: 20,
        elevation: 3,
        // backgroundColor: '#fff',
        marginTop: 40,
        width: 170,
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
});

export default PartPage
