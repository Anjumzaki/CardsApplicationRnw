import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {Input, Button, SocialIcons} from '../components';
import {Colors, Images} from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Login extends Component {
    state={
        name: '',
        email: '',
        mobileNumber: '', 
        password: '',
        confirmPassword: ''
    }
    handleName = (text) => {
        this.setState({ name: text })
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handleMobileNumber = (text) => {
        this.setState({ mobileNumber: text })
     }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handleConfirmPassword = (text) => {
        this.setState({ confirmPassword: text })
     }
    signup = (name, email, mobileNumber, password, confirmPassword) => {
        if(name == '' || email == '' || mobileNumber == ''|| password == '' || confirmPassword == ''){
            alert('Please fill all fields')
        }
        else{
            alert('Sign Up')
            // this.props.navigation.navigate('About')
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
                            placeholder= 'Name'
                            onChangeText = {this.handleName}
                        />
                        <Input 
                            placeholder= 'Email'
                            onChangeText = {this.handleEmail}
                        />
                        <Input 
                            placeholder= 'Mobile Number'
                            onChangeText = {this.handleMobileNumber}
                        />
                        <Input 
                            placeholder= 'Password'
                            onChangeText = {this.handlePassword}
                        />
                        <Input 
                            placeholder= 'Confirm Password'
                            onChangeText = {this.handleConfirmPassword}
                        />
                        <Button 
                            ButtonText= 'SIGN UP'
                            onPress= {() => this.signup(this.state.name, this.state.email, this.state.mobileNumber, this.state.password, this.state.confirmPassword)}
                        />

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text>Already have account?<Text style={{color: Colors.primary, fontWeight: "bold"}}> SIGN IN</Text></Text>
                        </TouchableOpacity> 
                    </View>
                    
                    <View style={styles.Footer}>
                        <View style={styles.Icon}>
                            <SocialIcons 
                                source= {Images.facebook}
                            />
                            <SocialIcons 
                                source= {Images.instagram}
                            />
                            <SocialIcons 
                                source= {Images.snapchat}
                            />
                            <SocialIcons 
                                source= {Images.twitter}
                            />
                        </View>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{marginTop:5}}>
                                <Text style={{color: Colors.primary, fontWeight: "bold"}}> SIGN UP </Text>with existing account
                            </Text>
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
        alignItems: "center",
    },
    Logo:{
        height:100,
        width: 100
    },
    Footer:{
        position: "absolute",
        top: '82%',
        left: '15%',
        alignItems: "center"
    },
    Icon:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})

export default Login;