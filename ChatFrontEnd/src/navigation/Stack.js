import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from '../screens/Landing/Landing';
import Chat from '../screens/Chat/Chat';
import Login from '../screens/Login/Login';

const StackNav = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationContainer>
      <StackNav.Navigator screenOptions={{headerShown:false}}  initialRouteName='Login' >
        <StackNav.Screen component={Landing} name="Landing" />
        <StackNav.Screen name="Chat" component={Chat} />
        <StackNav.Screen name="Login" component={Login} />
      </StackNav.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
