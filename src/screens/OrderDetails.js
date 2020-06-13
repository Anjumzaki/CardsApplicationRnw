import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {Input, Button} from '../components';
import {Colors, Images} from '../constants';
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default class OrderDetails extends Component {
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    <View style={styles.Card}>
                        <Image
                            style={styles.CardImage}
                            source={Images.Card}
                            resizeMode= 'contain'
                        />
                    </View>

                    <View style={styles.Details}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={styles.DetailsText}>Valentine's Card</Text>
                            <Text style={[styles.DetailsText, {color: Colors.primary}]}>Yet To Deliver</Text>
                        </View>

                        <Text style={styles.DetailsText}>Price: $5</Text>
                        <Text style={styles.DetailsText}>Order Number: #upbv-is</Text>
                        <Text style={styles.DetailsText}>Receiver Name: Delivery Address: Country, State, City</Text>
                        <Text style={styles.DetailsText}>St#12, House#22, St-Jospeh park</Text>
                    </View>

                    <View style={styles.Details}>
                        <View style={styles.OrderInfo}>
                            <View style={styles.Info}>
                                <Text style={styles.DetailsText}>1x</Text>
                                <Text style={styles.DetailsText}>Standard</Text>
                                <Text style={styles.DetailsText}>Dollars. 5.00</Text>
                            </View>
                        </View>

                        <View style={styles.OrderInfo}>
                            <View style={styles.Info}>
                                <Text style={styles.DetailsText}>Subtotal</Text>
                                <Text style={styles.DetailsText}>Dollars. 5.00</Text>
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.DetailsText}>Delivery Fee</Text>
                                <Text style={styles.DetailsText}>Dollars. 2.00</Text>
                            </View>

                            <View style={styles.Info}>
                                <Text style={styles.DetailsText}>Discount</Text>
                                <Text style={styles.DetailsText}>-Dollars. 0.00</Text>
                            </View>
                        </View>

                        <View style={styles.OrderInfo}>
                            <View style={styles.Info}>
                                <Text style={styles.DetailsText}>Total (incl, DIS)</Text>
                                <Text style={styles.DetailsText}>Dollars. 7.00</Text>
                            </View>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={styles.Button}>
                        <Text style={{color: Colors.white, fontSize: 16, fontWeight: "bold"}}>Confrim</Text>                        
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
    },
    Card:{
        height: '40%',
        borderBottomColor: Colors.input,
        borderBottomWidth: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    CardImage:{
        paddingHorizontal: 20,
        paddingVertical: 20,
        height: '90%',
    },
    Details:{
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 20,
        marginTop: 10,
        width: '95%',
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    DetailsText:{
        color: Colors.input,
        fontSize: 16
    },
    OrderInfo:{
        borderBottomColor: Colors.input,
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    Info:{
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: Colors.input,
    },
    Button:{
        backgroundColor: Colors.primary,
        width: '100%',
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        width: '95%',
        marginHorizontal: 10,
        marginTop: 10
    }
})