import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors, Images} from '../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default ({style, onLongPressCard, cardImage, ContactName}) => {
    return(
        <TouchableOpacity 
            style={[styles.Card, style]}
            onLongPress={onLongPressCard}
        >

            <View style={styles.horizontal}> 
                <View style={styles.cardImage}>
                    <Image
                        source={cardImage}
                        style={{height:35, width: 35}}
                        resizeMode= 'contain'
                    />
                </View>

                <View style={{flexDirection: "row", width: '80%', justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={styles.ContactName}>
                        {ContactName}
                    </Text>
                    <Image
                        source={Images.Contacts}
                        style={{height:30, width: 30}}
                        resizeMode= 'contain'
                    />
                </View>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Card:{
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 15,
        height: 70,
        width: '95%',
        marginTop: 5,
        marginBottom: 5,
        justifyContent: "center",
    },
    horizontal:{
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 10
    },
    cardImage:{
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 50,
        padding: 8,
        backgroundColor: Colors.input
    },
    ContactName:{
        fontSize:16,
        color: Colors.black,
        fontWeight: "bold",
        paddingHorizontal: 10,
        flexShrink: 1
    },
  })