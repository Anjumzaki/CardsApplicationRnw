import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login';
import Signup from '../screens/Signup'
import DrawerList from '../screens/drawer/DrawerList'
import DrawerScreen from '../screens/Drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
    <Drawer.Navigator
        drawerContent={ props => <DrawerList {...props}/> }
    >
        <Drawer.Screen name="DrawerScreen" component={DrawerScreen} />
      </Drawer.Navigator>
    );
  }

export const AuthNavigator = () => (
    <Stack.Navigator >
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
)

export const AppNavigator = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen
                    name = "DrawerScreen"
                    children={MyDrawer}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
    )
}