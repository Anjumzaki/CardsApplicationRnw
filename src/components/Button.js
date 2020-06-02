import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';

export default (props) => {
    return(
        <View
            style={[props.style, styles.Button]}     
        >
            <TouchableOpacity 
                style={styles.buttonContainer}
                activeOpacity= {0.7}
                onPress={props.onPress}>
                <Text style={styles.buttonText}>
                    {props.ButtonText}
                </Text>
            </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    Button:{
        // height: 200,
    },
    buttonContainer: {
        width: 150,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white
    }
})