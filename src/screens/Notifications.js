import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground} from 'react-native';
import { NotificationCard } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Notifications extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    <NotificationCard 
                        cardImage={Images.logo}
                        NotificationText='UserName your card is printed and has been sent to Receivers Name'
                    />
                    <NotificationCard 
                        cardImage={Images.inactiveAccount}
                        NotificationText='UserName your card is printed and has been sent to Receivers Name'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        alignItems: "center"
    },
})

export default Notifications