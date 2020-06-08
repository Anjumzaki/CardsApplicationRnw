import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors} from '../constants'
import {SmallButton} from '../components'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

export default ({style, onPress, cardImage, favouriteImage}) => {
    return(
        <View style={[styles.Card, style]}>
            <TouchableOpacity 
                style={styles.Favourite}
                onPress= {onPress}
            >
                <Image
                    source= {favouriteImage}
                    resizeMode={'contain'}
                    style={styles.FavouriteIcon}
                />
            </TouchableOpacity>

            <View style={styles.image}>
                <Image
                    source= {cardImage}
                    resizeMode={'contain'}
                    style={styles.Icon}
                />
            </View>
            
            <View style={styles.vertical}>
                <View style={styles.horizontal}> 
                    <Text style={styles.DishName}>
                        Card name
                    </Text>
                    <Text style={styles.Price}>
                        Price: $5
                    </Text>
                </View>

                <View style={styles.horizontal}> 
                    <Text style={styles.Price}>
                        Sold: 10/50
                    </Text>
                    <SmallButton
                        style={{backgroundColor: Colors.white, color: Colors.primary}}
                        ButtonText= 'Send'
                    />
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor: Colors.primary,
        borderRadius: 10,
        height: 250,
        width: screenWidth/2.2
    },
    Icon:{
        marginLeft:5,
        marginRight:5,
        height: 160,
        width: screenWidth/2.4,
        paddingHorizontal: 10,
        backgroundColor: Colors.white
    },
    image:{
        flex:1, 
        alignItems: "center",
    },
    vertical:{
        flexDirection: 'column',
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    horizontal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:3
    },
    DishName:{
        fontWeight: 'bold',
        fontSize:18,
        color: Colors.white
    },
    Price:{
        fontSize:14,
        color: Colors.white
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