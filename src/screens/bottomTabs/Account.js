import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import {Colors, Images} from '../../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Account extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    <View style={styles.ProfileView}>
                        <TouchableOpacity style={styles.ProfileBackground}>
                            <Image
                                source={Images.User_Icon_White}
                                resizeMode='contain'
                                style={styles.Profile}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('EditProfile')}
                            style={styles.Edit}
                        >
                            <Text style={styles.EditText}>Edit</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{paddingHorizontal: 20}}>
                        <Text style={styles.Heading}>Basic Information</Text>
                        <Text style={styles.Info}>Name: Chad Focus</Text>
                        <Text style={styles.Info}>DOB: 15-10-1995</Text>
                        <Text style={styles.Info}>DOA: 14-12-2013</Text>

                        <Text style={styles.Heading}>Contact Information</Text>
                        <Text style={styles.Info}>Email: chadfocus@gmail.com</Text>
                        <Text style={styles.Info}>Phone#: Chad Focus</Text>
                        <Text style={styles.Info}>Address: Chad Focus</Text>
                        <Text style={styles.Info}>City: Chad Focus</Text>
                        <Text style={styles.Info}>Country: Chad Focus</Text>
                        <Text style={styles.Info}>State: Chad Focus</Text>
                        <Text style={styles.Info}>Zip Code: Chad Focus</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
    },
    ProfileView:{
        justifyContent: "center",
        alignItems: "center",        
    },
    ProfileBackground:{
        backgroundColor: Colors.primary,
        height:120, 
        width: 120,
        padding: 10,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 10,
    },
    Profile:{
        height: 80, 
        width: 80,
    },
    Edit:{
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2
    },
    EditText:{
        color: Colors.primary,
        fontSize: 20,
    },
    Heading:{
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    Info:{
        marginTop:5,
        marginBottom: 5
    }
})

export default Account;