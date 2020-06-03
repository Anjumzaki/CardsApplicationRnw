import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup'

const Stack = createStackNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = "Login"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name = "Signup"
                    component={Signup}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}