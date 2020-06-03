import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Images from '../constants/Images';

export default ({style, source}) => {
    return(
        <TouchableOpacity style={[styles.SoicalIcon, style]}>
            <Image
                source= {source}
                resizeMode={'contain'}
                style={styles.Icon}
            />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    SoicalIcon:{
        justifyContent: "center",
        alignItems: "center"
    },
    Icon:{
        marginLeft:5,
        marginRight:5,
        height: 50,
        width: 50
    }  
})