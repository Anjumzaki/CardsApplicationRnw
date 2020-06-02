import React from 'react';
import {StyleSheet, View, TextInput, Text, Image} from 'react-native';
import Colors from '../constants/Colors'

export default ({style, placeholder, secureTextEntry, maxLength, keyboardType, onChangeText, value}) => {
    return(
        <View 
            style={[styles.Input, style]}>
             <TextInput 
                style={styles.inputBox}
                placeholder = { placeholder }
                secureTextEntry={ secureTextEntry }
                maxLength={ maxLength }
                keyboardType={ keyboardType }
                onChangeText={ onChangeText }
                value = { value }
              />
        </View>

    )
}

const styles = StyleSheet.create({
    Input:{
        width:'70%',
        borderBottomWidth: 1,
        marginTop:10,
        marginBottom: 10,
        borderBottomColor: Colors.input,
    },
    inputBox:{
        padding: 5,
        fontSize:16
    }  
})