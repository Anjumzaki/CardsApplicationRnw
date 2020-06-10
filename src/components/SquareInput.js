import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Colors from '../constants/Colors'

export default ({style, bottomText, maxLength, keyboardType, onChangeText, value}) => {
    return(
        <View 
            style={[styles.Input, style]}>
             <TextInput 
                style={styles.inputBox}
                maxLength={ maxLength }
                keyboardType={ keyboardType }
                onChangeText={ onChangeText }
                value = { value }
              />
              <Text style={styles.bottomText}>{bottomText}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    Input:{
        width:'80%',
        height:40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Colors.input,
    },
    inputBox:{
        padding: 5,
        fontSize:16
    },
    bottomText:{
        fontSize: 12,
        color: Colors.grey
    }  
})