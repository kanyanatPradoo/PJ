import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SignInOwnerScreen from '../OwnerScreen/SignInOwnerScreen';
import SignUpOwnerScreen from '../OwnerScreen/SignUpOwnerScreen';
import HomeOwnerScreen from '../OwnerScreen/HomeOwnerScreen';
;

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="SignInOwnerScreen" component={SignInOwnerScreen}/>
        <RootStack.Screen name="SignUpOwnerScreen" component={SignUpOwnerScreen}/>
        <RootStack.Screen name="HomeOwnerScreen" component={HomeOwnerScreen}/>

    </RootStack.Navigator>
);

export default RootStackScreen;