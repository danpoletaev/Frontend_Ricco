import React, {useState, useRef, Component} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { Badge } from 'react-native-paper';

class FurniturePartsPage extends Component{
    constructor() {
        super();
        this.state = {
            furniture: ''
        }
    }
// ({route, navigation})
    // const {scanned_data} = route.params;

    componentDidMount() {
        fetch('https://riico-backend.herokuapp.com/furnitures/1')
            .then(response => response.json())
            .then(data => {
                this.setState({furniture: data})
                // alert(this.state.furniture.article)
            });
    }


    render () {

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
                    <View pointerEvents={'none'} style={{ position: 'absolute', elevation: 40, bottom: 58, right: 18, zIndex: 2 }}>
                        <Badge danger>
                            <Text>2</Text>
                        </Badge>
                    </View>
                <FAB
                    style={styles.fab}
                    icon="cart"
                    onPress={() => this.props.navigation.navigate('Cart Page')}
                    color={"#fff"}
                />
                {/*<Badge style={styles.badge}>3</Badge>*/}
                <ScrollView contentContainerStyle={styles.mainContainer} alwaysBounceVertical={true}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Relevant parts for: </Text>
                    <View style={styles.furnitureCard}>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{this.state.furniture.name}</Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Article #: {this.state.furniture.article}</Text>
                        </View>
                        <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                    </View>

                    {this.state.furniture.components && this.state.furniture.components.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => {
                                this.props.navigation.navigate("Part Page", {
                                    part_details: item, id: item.id
                                })
                            }}>
                                <View style={styles.cardContainer}>
                                    <Image source={getImage(item.id)} style={styles.cardImg}/>
                                    <Text style={styles.cardHeader}>{item.name}</Text>
                                    <Text style={styles.partText}>Part #: {item.product_id}</Text>
                                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                                        <MaterialIcons name="attach-money" size={18} color="black"/>
                                        <Text>{item.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Black_base.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Black Base Leveler</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 115988</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/CamLockNut.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Cam Lock Nut</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 110630</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Cam_Angle.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Cam lock Nut Angle Pin</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 103091</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Cam_screw.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Cam Lock screw</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 118331</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Drawer_Front.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Drawer Front</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 113281</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Drawer_rail.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Drawer rail</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 100365</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Rod_Clip.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Rod Clip white</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 117793</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Shelf_Pins.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Shelf Pins</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 110525</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*    /!*    Wood Dowel*!/*/}
                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity onPress={() => {*/}
                    {/*    this.props.navigation.navigate("Part Page")*/}
                    {/*}}>*/}
                    {/*    <View style={styles.cardContainer}>*/}
                    {/*        <Image source={require('../assets/parts/Wood_Dowel.png')} style={styles.cardImg}/>*/}
                    {/*        <Text style={styles.cardHeader}>Wood Dowel</Text>*/}
                    {/*        <Text style={styles.partText}>Part #: 101350</Text>*/}
                    {/*        <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>*/}
                    {/*            <MaterialIcons name="attach-money" size={18} color="black"/>*/}
                    {/*            <Text>5.49</Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*    /!*    Wood Dowel*!/*/}
                    {/*</TouchableOpacity>*/}
                </ScrollView>
            </View>
        );
    }
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
        height: 200,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
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
        width: 70,
        height: 70,
        marginTop: 10,
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 1,
        backgroundColor: '#7ed957'
    },
    badge: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 40,
        zIndex: 5,
    }
});

export default withNavigation(FurniturePartsPage)
