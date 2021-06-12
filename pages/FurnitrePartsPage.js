import React, {useState, useRef, Component, useEffect} from "react";
import {StyleSheet, Text, View, Image, Pressable, ScrollView, TouchableOpacity} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import { FAB } from 'react-native-paper';
import { Badge } from 'react-native-paper';
import { Plane } from 'react-native-animated-spinkit';

const FurniturePartsPage = ({route, navigation}) =>{
    const [furniture, setFurniture] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://riico-backend.herokuapp.com/furnitures/1')
            .then(response => response.json())
            .then(data => {
                setFurniture(data)
                setLoaded(true)
                // alert(this.state.furniture.article)
            });
    },[])

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
                    <Plane style={{position: 'absolute', bottom: '50%'}} animating={!loaded} color="#000" size={48}/>
                    <View pointerEvents={'none'} style={{ position: 'absolute', elevation: 40, bottom: 58, right: 18, zIndex: 2 }}>
                        <Badge danger>
                            <Text>{cart.length}</Text>
                        </Badge>
                    </View>
                <FAB
                    style={styles.fab}
                    icon="cart"
                    onPress={() => navigation.navigate('Cart Page', {cart: cart, setCart: setCart})}
                    color={"#fff"}
                />
                {/*<Badge style={styles.badge}>3</Badge>*/}
                <ScrollView contentContainerStyle={styles.mainContainer} alwaysBounceVertical={true}>
                    <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>Relevant parts for: </Text>
                    {loaded && <View style={styles.furnitureCard}>
                        <View style={{display: 'flex', flexDirection: 'column'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{furniture.name}</Text>
                            <Text style={{fontSize: 12, marginTop: 10}}>Article #: {furniture.article}</Text>
                        </View>
                        <Image source={require('../assets/table.png')} style={styles.furnImg}/>
                    </View>}

                    {loaded && furniture.components.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => {
                                navigation.navigate("Part Page", {
                                    part_details: item, id: item.id, setCart: setCart, cart: cart
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
    },
    lottie: {
        width: 100,
        height: 100
    }
});

export default FurniturePartsPage
