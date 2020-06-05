import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import { ContactsCard } from '../../components';
import { Images } from '../../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Contacts extends Component {

    render() {
        return (
            <ScrollView>
                <View style={styles.Container}>
                    <ContactsCard 
                        cardImage={Images.User_Icon_White}
                        ContactName='Chad Focus'
                    />
                    <ContactsCard 
                        cardImage={Images.User_Icon_White}
                        ContactName='Chad Focus'
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
        alignItems: "center",
        marginTop: 10
    },
})

export default Contacts;