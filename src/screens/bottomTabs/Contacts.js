import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, TouchableOpacity, Dimensions, ScrollView, Image} from 'react-native';
import { ContactsCard, DeleteModal } from '../../components';
import { Colors, Images } from '../../constants';
import CreateContactModal from '../../components/CreateContactModal';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Contacts extends Component {
    state={
        addConatctModalVisible:false,
        deleteReminderModalVisible: false,
        backgroundColor: Colors.white,
        opacity: 1
    }
    addConatctOpenModal = () => {
        this.setState({ addConatctModalVisible: true, opacity: 0.1, backgroundColor: Colors.grey})
    }
    addContactCloseModal = () =>{
        this.setState({ addConatctModalVisible: false, opacity: 1, backgroundColor: Colors.white })
     }
     deleteOpenModal = () => {
        this.setState({ deleteReminderModalVisible: true, opacity: 0.1, backgroundColor: Colors.grey })
     }
     deleteCloseModal = () =>{
        this.setState({ deleteReminderModalVisible: false, opacity: 1, backgroundColor: Colors.white })
     }

    render() {
        return (
            <View style={{height:screenHeight, width: screenWidth, opacity: this.state.opacity, backgroundColor: this.state.backgroundColor}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.Container}>
                    <View style={styles.SearchContainer}>
                        <View style={styles.Search}>
                            <TextInput 
                                style={styles.inputBox}
                                placeholder = 'Search Contacts'
                                // onChangeText={ onChangeText }
                                // value = { value }
                            />
                            <Image
                                source={Images.Filter}
                                style={{height:20, width: 20}}
                                resizeMode= 'contain'
                            />
                        </View>
                    </View>
                        <ContactsCard 
                            cardImage={Images.User_Icon_White}
                            ContactName='Chad Focus'
                            onLongPressCard={this.deleteOpenModal}
                        />
                        <ContactsCard 
                            cardImage={Images.User_Icon_White}
                            ContactName='Chad Focus'
                            onLongPressCard={this.deleteOpenModal}
                        />
                    </View>
                </ScrollView>

                <View style={styles.addButton}>
                    <TouchableOpacity onPress={() => this.addConatctOpenModal()}>
                        <Text style={{fontSize: 54, fontWeight: "bold", color: Colors.white, padding: 10}}>+</Text>
                    </TouchableOpacity>
                </View>

                    <CreateContactModal 
                        addContactModalVisible = {this.state.addConatctModalVisible}
                        addContactModalClose= {() => this.addContactCloseModal()}
                        addButtonPress={ () => this.addContactCloseModal()}
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
        marginTop: 10
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
    },
    SearchContainer:{
        borderColor: Colors.primary,
        borderWidth:2,
        height: 40,
        borderRadius: 10,
        width: '95%',
        marginTop: 20,
        marginBottom: 10,
    },
    Search:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox:{
        width: '80%',
        padding: 5,
        fontSize:16,
    }  
})

export default Contacts;