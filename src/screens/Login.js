import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground} from 'react-native';
// import Colors from '../Constants/Colors'
import Images from '../constants/Images';
import Input from '../components/Input';
import Button from '../components/Button';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.Container}>
                <ImageBackground
                    source={Images.SignInBackground}
                    resizeMode='stretch'
                    style={styles.Background}
                >
                    <View style={styles.Card}>
                        <Input 
                            placeholder= 'Email'
                        />
                        <Input 
                            placeholder= 'Password'
                        />
                        <Button 
                            ButtonText= 'Sign In'
                        /> 
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1
    },
    Background:{
        height: screenHeight,
        width: screenWidth
    },
    Card:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Login;