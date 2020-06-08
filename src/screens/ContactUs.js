import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions} from 'react-native';
import { Input, SmallButton } from '../components';
import { Colors } from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class ContactUs extends Component {

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.row}>
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>First Name*</Text>
                        <Input 
                            placeholder="Enter Name"
                        />
                    </View>
                    
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Last Name*</Text>
                        <Input 
                            placeholder="Enter Name"
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Email Address*</Text>
                        <Input 
                            placeholder="Enter Email"
                        />
                    </View>
                    
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Mobile Number</Text>
                        <Input 
                            placeholder="Enter Mobile Number"
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.Input}>
                        <Text style={styles.name}>Message</Text>
                        <Input 
                            placeholder="Enter Message"
                        />
                    </View>
                </View>

                <View style={styles.Button}>
                    <SmallButton
                        style={styles.sendButton}
                        ButtonText="Send"
                        textStyle={{color: Colors.white}}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        alignItems: "center",
    },
    row:{
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 30
    },
    InputRow:{
        width: '45%'
    },
    name:{
        fontWeight: "bold",
        fontSize: 18
    },
    Input:{
        width: '90%',
    },
    Button:{
        marginTop: 20,
        marginLeft: '70%',
        width: 70
    },
    sendButton:{
        backgroundColor: Colors.primary,
        color: Colors.white,
        textAlign: "center"
    }
})

export default ContactUs