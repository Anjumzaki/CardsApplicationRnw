import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';

export default ({ onPress, ButtonText}) => {
    return(
        <TouchableOpacity 
            style={styles.Button}
            onPress={onPress}
        >
            <Text style={{fontSize: 14, color: Colors.primary}}>{ButtonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button:{
        backgroundColor: Colors.white,
        paddingHorizontal: 10,
        paddingVertical:2,
        borderRadius: 50
    }
})