import React, {useState, useRef, Component} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

class PartPage extends Component{

    render(){
        const { id, part_details } = this.props.route.params;

        const getImage = (id) => {
            const new_id = id % 11;
            switch(new_id) {
                case 1:
                    return require('../assets/parts/Allen_Key.png')
                case 2:
                    return require('../assets/parts/Black_base.png')
                case 3:
                    return require('../assets/parts/CamLockNut.png')
                case 4:
                    return require('../assets/parts/Cam_Angle.png')
                case 5:
                    return require('../assets/parts/Cam_screw.png')
                case 6:
                    return require('../assets/parts/Drawer_Front.png')
                case 7:
                    return require('../assets/parts/Drawer_rail.png')
                case 8:
                    return require('../assets/parts/Rod_Clip.png')
                case 9:
                    return require('../assets/parts/Shelf_Pins.png')
                case 10:
                    return require('../assets/parts/Wood_Dowel.png')
            }
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}> {part_details.name} </Text>
                    <View style={styles.furnitureCard}>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18, width: 100}}>{part_details.name}</Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Part #: {part_details.product_id}</Text>
                        </View>
                        <Image source={getImage(id)} style={styles.furnImg}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Product Information:</Text>
                        <View style={{marginLeft: 10, marginTop: 20}}>
                            <Text style={styles.upperHeader}>• {part_details.name}</Text>
                            <Text style={styles.upperHeader}>• IKEA Part #115988</Text>
                            <Text style={styles.upperHeader}>• Dimensions:</Text>
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.upperHeader}>• {part_details.dimension_eu}</Text>
                                <Text style={styles.upperHeader}>• {part_details.dimension_us}</Text>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: 'bold'}}>• Price: $ {part_details.price}</Text>
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Pressable
                            onPress={() => {
                                alert('You added item to cart')
                                this.props.navigation.goBack()
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
        )
    }
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
        height: 120,
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

export default withNavigation(PartPage)
