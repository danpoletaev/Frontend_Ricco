import React, {useState, useRef} from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
    TextInput,
    SafeAreaView, Modal
} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements'
import {MaterialIcons} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {set} from "react-native-reanimated";

const BuyBackPage = ({route, navigation}) => {

    const {scanned_data} = route.params;
    const [selected, setSelected] = useState(-1)
    const [price, setPrice] = useState(324)

    const [date, setDate] = useState(new Date(1623449049821));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [isChecked, setChecked] = useState(false);

    const [email, setEmail] = useState(false);
    const [visible, setVisible] = useState(false)

    const getPrice = () => {
        if (selected === 1){
            return price * 0.5;
        } else if (selected === 2){
            return price * 0.3
        } else if (selected === 3){
            return price * 0.1
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showTimepicker = () => {
        showMode('date');
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.mainContainer} alwaysBounceVertical={true}>
                <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 50}}>You want to sell back: </Text>
                <View style={styles.furnitureCard}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>BEKANT</Text>
                        <Text style={{fontSize: 12, marginTop: 10}}>Article #: 492.822.82</Text>
                        <Text style={{fontSize: 12, marginTop: 10}}>Price: ${price}</Text>
                    </View>
                    <Image source={require('../assets/table.png')} style={styles.furnImg2}/>
                </View>

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
                            <Text style={styles.modalText}>Thank you, we will contact you soon!</Text>
                            <Pressable
                                onPress={() => {
                                    setVisible(false)
                                    navigation.navigate('Home')
                                }}
                                style={({ pressed }) => [
                                    {
                                        borderColor: pressed
                                            ? 'gray'
                                            : '#7ed957'
                                    },
                                    styles.modal_button
                                ]}>
                                <Text style={styles.textButton}>Go Home</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Text style={{fontSize: 16, marginTop: 50, width: 300}}>Please, select the condition, that best
                    describes your furniture: </Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity onPress={() => setSelected(1)}>
                        <View style={[
                            styles.cardContainer, selected === 1 ? styles.brd_selected : styles.brd
                        ]}>
                            <Text style={{fontWeight: 'bold', marginTop: 8, marginBottom: 5}}>As new</Text>
                            <Text style={{marginBottom: 5, fontSize: 12}}>no scratches</Text>
                            <Image source={require('../assets/cond-1.jpeg')} style={styles.furnImg}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(2)}>
                        <View style={[
                            styles.cardContainer, selected === 2 ? styles.brd_selected : styles.brd
                        ]}>
                            <Text style={{fontWeight: 'bold', marginTop: 8, marginBottom: 5}}>Very good</Text>
                            <Text style={{marginBottom: 5, fontSize: 12}}>minor scratches</Text>
                            <Image source={require('../assets/cond-2.jpeg')} style={styles.furnImg}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelected(3)}>
                        <View style={[
                            styles.cardContainer, selected === 3 ? styles.brd_selected : styles.brd
                        ]}>
                            <Text style={{fontWeight: 'bold', marginTop: 8, marginBottom: 5, fontSize: 14}}>Well
                                used</Text>
                            <Text style={{marginBottom: 5, fontSize: 12}}>several scratches</Text>
                            <Image source={require('../assets/cond-3.jpeg')} style={styles.furnImg}/>
                        </View>
                    </TouchableOpacity>
                </View>
                {selected !== -1 && <View>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20, width: 300}}>You will get up to: ${getPrice()} </Text>
                <Text style={{fontSize: 16, marginTop: 20, width: 300}}>When will you return your product? </Text>
                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                    <DateTimePicker
                        style={{width: 120, backgroundColor: "white", justifyContent: 'center'}}
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
                        <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                            <View style={[
                                styles.checkbox, isChecked ? styles.back_selected : styles.back
                            ]}>
                                <Image source={require('../assets/check.png')} style={styles.furnImg}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={{marginLeft: 10}}>I agree with terms and conditions</Text>
                    </View>
                    {isChecked && <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: 200}}>
                        <Text style={{marginTop: 20}}>Please, enter your email to receive your estimate: </Text>
                        <SafeAreaView>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                            />
                        </SafeAreaView>
                        <Pressable
                            onPress={() => {
                                setVisible(true)
                            }}
                            style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                        ? '#fff'
                                        : 'gray'
                                },
                                styles.button
                            ]}>
                            <Text style={styles.textButton}>Send</Text>
                        </Pressable>
                    </View>
                    }
                </View>
                }
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
        width: 120,
        height: 120,
        borderWidth: 2,
        borderRadius: 10,
        marginRight: 2,
        marginLeft: 2,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    brd: {
        borderColor: '#f2f2f2',
    },
    brd_selected : {
        borderColor: '#000',
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
        width: 110,
        height: 40,
        marginTop: 25,
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
    furnImg2: {
        width: 100,
        height: 80,
    },
    furnImg: {
        width: 20,
        height: 20,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 15,
    },
    checkbox: {
        borderWidth: 2,
        borderRadius: 5,
        width: 30,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    back: {
        backgroundColor: "#fff"
    },
    back_selected: {
        backgroundColor: "#7ed957"
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
});

export default BuyBackPage
