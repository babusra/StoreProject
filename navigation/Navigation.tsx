import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import BasketScreen from '../src/screens/BasketScreen';
import LoginScreen from '../src/screens/LoginScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const MainStack = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login"  component={LoginScreen} />
    <Stack.Screen name="Home"  component={HomeScreen} />
    <Stack.Screen name='Basket' component={BasketScreen}/>
  </Stack.Navigator>
    )
  }



  return (
    <NavigationContainer>
    <MainStack/>
    </NavigationContainer>
  );
};

export default Navigation;
