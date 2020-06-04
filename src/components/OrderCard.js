import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors} from '../constants'
import {SmallButton} from '../components'

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
                    <Text style={styles.ClientName}>
                    Client Name
                    </Text>
                    <Text style={styles.ClientName}>
                        $. 20.00
                    </Text>
                </View>

                <View style={styles.horizontal}> 
                    <Text style={styles.CardName}>
                        Card Name {'\n'}
                        2020-04-12 at 00:02
                    </Text>
                    <SmallButton
                        style={{backgroundColor: Colors.primary, color: Colors.white}}
                        ButtonText= 'REORDER'
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
        borderRadius: 20,
        height: 80,
        width: '95%',
        marginBottom: 5
    },
    vertical:{
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    horizontal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingVertical:3
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
    Favourite:{
        height:20,
        width:20,
        marginTop:5,
        marginBottom: 5,
        marginLeft: '80%'
    },
    FavouriteIcon:{
        height:20,
        width:20
    },
      
})