import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';

export default ({style, onPress, ButtonText}) => {
    return(
        <View
            style={[style, styles.Button]}     
        >
            <TouchableOpacity 
                style={styles.buttonContainer}
                activeOpacity= {0.7}
                onPress={onPress}>
                <Text style={styles.buttonText}>
                    {ButtonText}
                </Text>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        marginTop: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: 150,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white
    }
})