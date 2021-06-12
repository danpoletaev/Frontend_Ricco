import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//import pages
import HomeScreen from './pages/HomePage'
import LoginPage from "./pages/LoginPage";
import ConfirmPhone from "./pages/ConfirmPhone";
import ScanQR from "./pages/ScanQR";
import FurniturePartsMain from "./pages/FurniturePartsMain";
import PartPage from "./pages/PartPage";
import ScanBarCode from "./pages/ScanBarCode";
import BuyBackPage from "./pages/BuyBackPage";
import CartPage from "./pages/CartPage";
import FurniturePartsPage from "./pages/FurnitrePartsPage";
import DetailsDelivery from "./pages/DetailsDelivery";
import SuccessfullyPage from "./pages/Successfully";

const Stack = createStackNavigator();

class App extends Component {
    render () {
        console.disableYellowBox = true;
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { elevation: 0 },
                        cardStyle: { backgroundColor: '#7ed957' }
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        screenOptions={{
                            headerShown: false,
                            backgroundColor: '#7ed957'
                        }}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Login Page"
                        component={LoginPage}
                        options={{headerShown:false}}/>
                    <Stack.Screen
                        name="Confirm Phone"
                        component={ConfirmPhone}
                        options={{headerShown:false}}/>
                    <Stack.Screen
                        name="Scan QR"
                        component={ScanQR}
                        options={{headerShown:false}}/>
                    <Stack.Screen
                        name="Scan BarCode"
                        component={ScanBarCode}
                        options={{headerShown:false}}/>
                    <Stack.Screen
                        name="Furniture Parts"
                        component={FurniturePartsPage}
                        options={{headerShown:false}}/>
                    <Stack.Screen
                        name="Part Page"
                        component={PartPage}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="BuyBack Page"
                        component={BuyBackPage}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Cart Page"
                        component={CartPage}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Details Page"
                        component={DetailsDelivery}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen
                        name="Success Page"
                        component={SuccessfullyPage}
                        options={{headerShown:false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
