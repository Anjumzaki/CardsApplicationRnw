import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import { Colors, Images } from '../constants'
import { SquareInput, SmallButton } from '../components';


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class BillingInformation extends Component {

    render() {
        return (
            <View style={styles.Container}>

                <View style={styles.Heading}>
                    <View style={styles.Line}/>
                    <Text style={styles.HeadingText}>Account Details</Text>
                    <View style={styles.Line}/>
                </View>

                <View style={styles.row}>
                    <Image
                        source={Images.mastercard}
                        resizeMode= 'contain'
                        style={styles.logo}
                    />
                    <Image
                        source={Images.maestro}
                        resizeMode= 'contain'
                        style={styles.logo}
                    />
                    <Image
                        source={Images.visa2}
                        resizeMode= 'contain'
                        style={styles.logo}
                    />
                    <Image
                        source={Images.visa1}
                        resizeMode= 'contain'
                        style={styles.logo}
                    />
                </View>

                <View style={styles.row}>
                    <View style={styles.leftColumn}>
                        <Text style={styles.text}>Card Number</Text>
                        <Text style={styles.text}>Valid Until</Text>
                        <Text style={styles.text}>CVV</Text>
                        <Text style={styles.text}>Card Holder</Text>
                    </View>

                    <View style={styles.RightColumn}>
                        <SquareInput
                            style={styles.input}
                            keyboardType= 'numeric'
                            bottomText= 'Enter digits without spaces'
                        />

                        <View style={styles.valid}>
                            <SquareInput
                                style={styles.validInput}
                                maxLength = {4} 
                                keyboardType= 'numeric'
                            />
                            <SquareInput
                                style={styles.validInput}
                                maxLength = {4} 
                                keyboardType= 'numeric'
                            />
                        </View>

                        <SquareInput
                            style={styles.input}
                            keyboardType= 'numeric'
                            bottomText= 'Last three digits on the card back'
                        />
                        <SquareInput
                            style={styles.input}
                            bottomText= 'Leave the field if the card has not name'
                        />
                    </View>
                </View>

                <SmallButton
                    ButtonText= 'Pay'
                    style={styles.payButton}
                    textStyle={{color: Colors.white}}
                />
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        alignItems: "center"
    },
    Heading:{
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Line:{
        height: 1,
        width: '25%',
        backgroundColor: Colors.input
    },
    HeadingText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftColumn:{
        flexDirection: "column",
        justifyContent: "center",
        width: '30%',
        marginTop: 30,
        marginBottom: 30
    },
    RightColumn:{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: '70%',
        marginTop: 30,
        marginBottom: 30
    },
    valid:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    logo:{
        height: 40,
        width: 50,
        marginLeft:5,
        marginRight: 5
    },
    text:{
        color: Colors.input,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "right",
        height: 40,
        marginTop: 20
    },
    input:{
        marginTop: 20
    },
    validInput:{
        width: '38%',
        marginLeft: '2.5%',
        marginRight: '2.5%'
    },
    payButton:{
        backgroundColor: Colors.primary,
        marginLeft: '30%',
        width: 200,
        height: 40,
        justifyContent: "center"
    }
})

export default BillingInformation;