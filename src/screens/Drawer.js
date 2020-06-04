import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground} from 'react-native';
import Images from '../constants/Images';
import Input from '../components/Input';
import Button from '../components/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Login extends Component {

    render() {
        return (
            <View style={styles.Container}>
                <Text>Drawer</Text>
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

export default Login;