import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import {Colors, Images} from '../../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default class DrawerList extends Component {
    render(props) {
        return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    
                    <View style={styles.ProfileView}>
                        <TouchableOpacity style={styles.ProfileBackground}>
                            <Image
                                source={Images.User_Icon_White}
                                resizeMode='contain'
                                style={styles.Profile}
                            />
                        </TouchableOpacity>
                    </View>    
                    
                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.activeAccount}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="My Account"
                            onPress={() => this.props.navigation.navigate('Account')}
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.favourite}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Favourites"
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Reminders}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Reminders"
                            onPress={() => this.props.navigation.navigate('Reminders')}
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.My_Contacts}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="My Contacts"
                            onPress={() => this.props.navigation.navigate('Contacts')}
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Orders}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Order"
                            onPress={() => this.props.navigation.navigate('Orders')}
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Notification}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Notifications"
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Plans}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Plans"
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Contact_Us}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Contact Us"
                        />
                    </View>

                    <View style={styles.drawerItem}>
                        <Image
                            style={styles.icon}
                            resizeMode= 'contain'
                            source={Images.Log_out}
                        />
                        <DrawerItem
                            labelStyle={styles.label}
                            label="Logout"
                        />
                    </View>

                </View>
            </DrawerContentScrollView>
        </View>
    )}
}

const styles = StyleSheet.create({
    Container:{
        width: '80%',
        marginLeft: '10%',
        marginTop: 50,
        paddingBottom: 50
    },
    ProfileView:{
        justifyContent: "center", 
        alignItems: "center",
        borderBottomColor:Colors.grey,
        borderBottomWidth: 1
    },
    ProfileBackground:{
        backgroundColor: Colors.primary,
        height:120, 
        width: 120,
        padding: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    Profile:{
        height: 80, 
        width: 80,
    },
    drawerItem:{
        flexDirection:'row', 
        alignItems:'center',
        paddingHorizontal:5
    },
    icon:{
        height:20, 
        width:20
    },
    label:{
        fontSize:18
    }
})