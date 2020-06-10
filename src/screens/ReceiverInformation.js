import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Dimensions, ScrollView} from 'react-native';
import { Input, SmallButton } from '../components';
import { Colors } from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class ReceiverInformation extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator= {false}>
            <View style={styles.Container}>

                <View style={styles.row}>
                    <View style={styles.Input}>
                        <Text style={styles.name}>Enter Your Name</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Country</Text>
                        <Input 
                        />
                    </View>
                    
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Phone Number</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.Input}>
                        <Text style={styles.name}>Email</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.Input}>
                        <Text style={styles.name}>Address1</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>City*</Text>
                        <Input 
                        />
                    </View>
                    
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Country*</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>State*</Text>
                        <Input 
                        />
                    </View>
                    
                    <View style={styles.InputRow}>
                        <Text style={styles.name}>Zip Code*</Text>
                        <Input 
                        />
                    </View>
                </View>

                <View style={styles.Button}>
                    <SmallButton
                        style={styles.sendButton}
                        ButtonText="Next"
                        textStyle={{color: Colors.white}}
                    />
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
        marginLeft: '50%',
        width: 70
    },
    sendButton:{
        backgroundColor: Colors.primary,
        color: Colors.white,
        textAlign: "center",
        width: 100
    }
})

export default ReceiverInformation