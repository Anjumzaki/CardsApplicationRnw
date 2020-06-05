import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors} from '../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default ({style, onPressCard, cardImage, NotificationText}) => {
    return(
        <TouchableOpacity 
            style={[styles.Card, style]}
            onPress={onPressCard}
        >

            <View style={styles.horizontal}> 
                <Image
                    source={cardImage}
                    style={{height:50, width: 50}}
                    resizeMode= 'contain'
                />
                <Text style={styles.NotificationText}>
                    {NotificationText}
                </Text>
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
    NotificationText:{
        fontSize:14,
        color: Colors.black,
        paddingHorizontal: 10,
        flexShrink: 1
    },
  })