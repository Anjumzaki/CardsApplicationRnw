import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text, TextInput} from 'react-native';
import {Colors, Images} from '../constants'
import {SmallButton, Input} from '../components'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default ({style, deleteButton, cardImage, ClientName, GiftDate,FavouriteDate, sendButton, onChangeText, value}) => {
    return(
        <View style={styles.CardContainer}>
            <View style={styles.vertical}>
                <View style={styles.horizontal}> 
                    <View style={styles.cardImage}>
                        <Image
                            source={cardImage}
                            style={{height:35, width: 35}}
                            resizeMode= 'contain'
                        />
                    </View>
                    <View style={styles.vertical}>
                        <Text style={styles.ClientName}>
                            {ClientName}
                        </Text>
                        <View style={{flexDirection:"row", justifyContent: "space-between", marginTop: 5, marginBottom: 5}}>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <Image
                                    source={Images.Giftbox}
                                    style={styles.FavouriteIcon}
                                    resizeMode= 'contain'
                                />
                                <Text style={{fontSize: 12, marginLeft:5, marginRight:5}}>{GiftDate}</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <Image
                                    source={Images.favourite}
                                    style={styles.FavouriteIcon}
                                    resizeMode= 'contain'
                                />
                                <Text style={{fontSize: 12, marginLeft:5, marginRight:5}}>{FavouriteDate}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
                <View style={styles.noteboxContainer}>
                    <View 
                        style={[styles.Input, style]}>
                        <TextInput 
                            style={styles.inputBox}
                            placeholder = 'Your note will be here'
                            onChangeText={ onChangeText }
                            value = { value }
                        />
                    </View>
                    <View style={{flexDirection: "row", justifyContent:"space-around", marginTop: 10}}>
                        <SmallButton
                            style={{backgroundColor: Colors.primary, color: Colors.white}}
                            ButtonText='Delete'
                            buttonPress= {deleteButton}
                            textStyle={{color: Colors.white}}
                        />
                        <SmallButton
                            style={{backgroundColor: Colors.primary, color: Colors.white}}
                            ButtonText='Send Card'
                            textStyle={{color: Colors.white}}
                            buttonPress={sendButton}
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CardContainer:{
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: Colors.white,
        height: 150,
        width: '95%',
        marginBottom: 5,
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderColor: Colors.primary,
        borderWidth: 3
    },
    vertical:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    horizontal:{
        flexDirection: 'row',
        alignItems: "center",
        paddingVertical:3
    },
    cardImage:{
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 50,
        padding: 8,
        backgroundColor: Colors.input
    },
    ClientName:{
        fontWeight: 'bold',
        fontSize:20,
        color: Colors.black
    },
    CardName:{
        fontSize:14,
        color: Colors.grey
    },
    FavouriteIcon:{
        height:15,
        width:15
    },
    noteboxContainer:{
        flexDirection: "column",
        marginLeft: '20%',
    },
    Input:{
        width:'90%',
        borderBottomWidth: 1,
        borderBottomColor: Colors.input,
    },
    inputBox:{
        padding: 5,
        fontSize:16
    }      
})