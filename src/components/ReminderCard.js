import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors, Images} from '../constants'
import {SmallButton, Input} from '../components'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default ({style, onPressCard, cardImage, favouriteImage}) => {
    return(
        <TouchableOpacity 
            style={[styles.Card, style]}
            onPress={onPressCard}
        >

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
                            Chad Focus
                        </Text>
                        <View style={{flexDirection:"row", justifyContent: "space-between", marginTop: 5, marginBottom: 5}}>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <Image
                                    source={Images.Giftbox}
                                    style={styles.FavouriteIcon}
                                    resizeMode= 'contain'
                                />
                                <Text style={{fontSize: 12, marginLeft:5, marginRight:5}}>Thurs 20,March,1978</Text>
                            </View>
                            <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                <Image
                                    source={Images.favourite}
                                    style={styles.FavouriteIcon}
                                    resizeMode= 'contain'
                                />
                                <Text style={{fontSize: 12, marginLeft:5, marginRight:5}}>Thurs 20,March,1978</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    Card:{
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 20,
        height: 140,
        width: '95%',
        marginBottom: 5,
        justifyContent: "center",
        // alignItems: "center"
    },
    vertical:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    horizontal:{
        flexDirection: 'row',
        // justifyContent: 'space-around',
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
      
})