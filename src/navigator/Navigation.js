import 'react-native-gesture-handler';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login, Signup, DrawerList, DrawerScreen, Home, Contacts, Reminders, Orders, Account, Notifications, Plans } from '../screens';
import {Images, Colors} from '../constants';
import ContactUs from '../screens/ContactUs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

createBottomTab  = () => {
    return(
    <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{activeTintColor: Colors.primary}}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let activeIcon, inactiveIcon;

                if(route.name == 'Home'){
                    activeIcon = Images.activeHome;
                    inactiveIcon = Images.inactiveHome;
                }
                else if(route.name == 'Contacts'){
                    activeIcon = Images.activeContacts;
                    inactiveIcon = Images.inactiveContacts
                }
                else if(route.name == 'Reminders'){
                    activeIcon = Images.Reminders;
                    inactiveIcon = Images.inactiveReminders;
                }
                else if(route.name == 'Orders'){
                    activeIcon = Images.Orders;
                    inactiveIcon = Images.inactiveOrders;
                }
                else if(route.name == 'Account'){
                    activeIcon = Images.activeAccount;
                    inactiveIcon = Images.inactiveAccount; 
                }
          
            return <Image 
                    source={ color == '#8E8E8F' ? inactiveIcon : activeIcon} style={{width: size, height: size}} 
                    resizeMode={'contain'}
                    />
        }
      })}
    >
        <BottomTab.Screen name="Contacts" component={Contacts} />
        <BottomTab.Screen name="Reminders" component={Reminders} />
        <BottomTab.Screen name="Home" component={Home}/>
        <BottomTab.Screen name="Orders" component={Orders} />
        <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
)
}

StackNavigator= ({navigation}) => {
    return (
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
        <Stack.Screen 
            name="DrawerScreen" 
            children={createBottomTab} 
            options={({route}) => ({
                 
                headerTitleAlign: 'center',
                headerBackTitle:'none',
                headerTitle: '',
                headerRight: () => (
                    <TouchableOpacity 
                        style={{padding:15}}
                        onPress = {() => navigation.navigate('Notifications')}
                    >
                        <Image
                            source={Images.Notification}
                            resizeMode= 'contain'
                            style={{height:25, width:25}} 
                        />
                    </TouchableOpacity>
                ),
                headerLeft:  () => (
                    <TouchableOpacity 
                        style={{padding:15}}
                        onPress = {() => navigation.openDrawer()}
                    >
                        <Image
                            source={Images.menu}
                            resizeMode= 'contain'
                            style={{height:25, width:25}} 
                        />
                    </TouchableOpacity>
                ),
            })
        }
        />
        <Stack.Screen
            name = "Notifications"
            component={Notifications}
            options={{
                headerBackTitle:'none',
                headerTitle: 'Notifications',
                headerTintColor: Colors.white,
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        />
        <Stack.Screen
            name = "ContactUs"
            component={ContactUs}
            options={{
                headerBackTitle:'none',
                headerTitle: 'Contact Us',
                headerTintColor: Colors.white,
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        />
        <Stack.Screen
            name = "Plans"
            component={Plans}
            options={{
                headerBackTitle:'none',
                headerTitle: 'My Plans',
                headerTintColor: Colors.white,
                headerStyle:{
                    backgroundColor: Colors.primary
                }
            }}
        />
      </Stack.Navigator>
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
    <Drawer.Navigator
        drawerContent={ props => <DrawerList {...props}/> }
    >
        <Drawer.Screen name="DrawerScreen" children={StackNavigator} />
      </Drawer.Navigator>
    )
}