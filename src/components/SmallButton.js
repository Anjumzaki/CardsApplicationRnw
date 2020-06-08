import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';

export default ({ buttonPress, ButtonText, style, textStyle}) => {
    return(
        <TouchableOpacity 
            activeOpacity= {0.5}
            style={[styles.Button, style]}
            onPress={buttonPress}
        >
            <Text style={[textStyle, {fontSize: 14, textAlign: "center"}]}>{ButtonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        paddingHorizontal: 14,
        paddingVertical:4,
        borderRadius: 20
    }
})