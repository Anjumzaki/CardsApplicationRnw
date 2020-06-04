import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';

export default ({ buttonPress, ButtonText, style}) => {
    return(
        <TouchableOpacity 
            activeOpacity= {0.5}
            style={[styles.Button, style]}
            onPress={buttonPress}
        >
            <Text style={[style, {fontSize: 14}]}>{ButtonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        paddingHorizontal: 10,
        paddingVertical:3,
        borderRadius: 20
    }
})