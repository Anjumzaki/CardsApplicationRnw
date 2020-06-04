import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground} from 'react-native';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Contacts extends Component {

    render() {
        return (
            <View style={styles.Container}>
                <Text>Contacts</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default Contacts;