import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import ReminderCard from '../../components/ReminderCard';
import { Images } from '../../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Reminders extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.Container}>
                    <ReminderCard 
                        cardImage={Images.User_Icon_White}
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

export default Reminders;