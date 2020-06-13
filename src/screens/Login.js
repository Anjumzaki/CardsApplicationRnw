import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {Input, Button} from '../components';
import {Colors, Images} from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Login extends Component {
    state={
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
     }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, password) => {
        if(email == '' || password == ''){
            alert('Please enter email and password')
        }
        else{
            this.props.navigation.navigate('DrawerScreen')
        }
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
                        <Image
                            source = {Images.logo}
                            resizeMode= 'contain'
                            style={styles.Logo}
                        />
                        <Input 
                            style={{marginTop: 10}}
                            placeholder= 'Email'
                            onChangeText = {this.handleEmail}
                        />
                        <Input 
                            style={{marginTop: 10}}
                            placeholder= 'Password'
                            secureTextEntry= {true}
                            onChangeText = {this.handlePassword}
                        />
                        <Button 
                            ButtonText= 'Sign In'
                            onPress= {() => this.login(this.state.email, this.state.password)}
                        />

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                            <Text>Dont have account?<Text style={{color: Colors.primary, fontWeight: "bold"}}> SIGN UP</Text></Text>
                        </TouchableOpacity> 
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
    },
    Logo:{
        height:100,
        width: 100
    }
})

export default Login;