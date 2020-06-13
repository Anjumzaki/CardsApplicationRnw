import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import ReminderCard from '../../components/ReminderCard';
import { Images, Colors } from '../../constants';
import {SetReminderModal, DeleteModal} from '../../components';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Reminders extends Component {
    state={
        setReminderModalVisible: false,
        deleteReminderModalVisible: false,
        backgroundColor: Colors.white,
        opacity: 1,
        reminderNote: ''
    }
    setReminderOpenModal = () => {
        this.setState({ setReminderModalVisible: true, opacity: 0.1, backgroundColor: Colors.grey})
     }
     setReminderCloseModal = () => {
        this.setState({ setReminderModalVisible: false, opacity: 1, backgroundColor: Colors.white })
     }
     deleteOpenModal = () => {
        this.setState({ deleteReminderModalVisible: true, opacity: 0.1, backgroundColor: Colors.grey })
     }
     deleteCloseModal = () =>{
        this.setState({ deleteReminderModalVisible: false, opacity: 1, backgroundColor: Colors.white })
     }
     handleReminderNote = (text) => {
        this.setState({ reminderNote: text })
     }

    render() {
        return (
            <View style={{height:screenHeight, width: screenWidth, opacity: this.state.opacity}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.Container}>
                        <ReminderCard 
                            cardImage={Images.User_Icon_White}
                            ClientName='Chad Focus'
                            GiftDate='Thurs 20,March,1978'
                            FavouriteDate='Thurs 20,March,1978'
                            onChangeText= {this.handleReminderNote}
                            deleteButton= {() => this.deleteOpenModal()}
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}
                        />
                        <ReminderCard 
                            cardImage={Images.User_Icon_White}
                            ClientName='Chad Focus'
                            GiftDate='Thurs 20,March,1978'
                            FavouriteDate='Thurs 20,March,1978'
                            onChangeText= {this.handleReminderNote}
                            deleteButton= {() => this.deleteOpenModal()}
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}
                        />
                    </View>

                </ScrollView>

                <View style={styles.addButton}>
                    <TouchableOpacity onPress={() => this.setReminderOpenModal()}>
                        <Text style={{fontSize: 54, fontWeight: "bold", color: Colors.white, padding: 10}}>+</Text>
                    </TouchableOpacity>
                </View>

                <SetReminderModal 
                        setReminderModalVisible = {this.state.setReminderModalVisible}
                        modalClose= {() => this.setReminderCloseModal()}
                />

                <DeleteModal
                    deleteModalVisible = {this.state.deleteReminderModalVisible}
                    deleteModalClose= {() => this.deleteCloseModal()}
                    yesButtonPress={ () => this.deleteCloseModal()}
                    noButtonPress= { () => this.deleteCloseModal()}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        alignItems: "center",
        marginTop:10
    },
    addButton:{
        position: "absolute",
        top: '65%',
        right: 20,
        backgroundColor: Colors.primary,
        height: 60,
        width: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default Reminders;