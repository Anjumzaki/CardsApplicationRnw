import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity
} from "react-native";
import { Colors, Images } from "../constants";
import { SmallButton, Input } from ".";

export default  ({addContactModalVisible, addContactModalClose, addButtonPress, onChangeText, value}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={addContactModalVisible}
        onRequestClose={addContactModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Create Conact</Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.profileBackground}>
                    <Image
                        source= {Images.User_Icon_White}
                        style={styles.profile}
                        resizeMode='contain'
                    />
                    <View style={styles.backgroundAddImage}>
                        <View style={styles.addImage}>
                            <Image
                                source= {Images.ProfileEdit}
                                style={styles.ProfileEdit}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <View 
                    style={styles.Input}>
                    <TextInput 
                        style={styles.inputBox}
                        placeholder = 'Enter Contact Name'
                        onChangeText={ onChangeText }
                        value = { value }
                    />
                </View>  
                
            </View>

            <SmallButton
                buttonPress= {addButtonPress}
                ButtonText='Add'
                style={styles.addButton}
                textStyle={{color: Colors.white}}
            />

          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: '40%',
    alignItems: "center"
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: Colors.primary,
    borderWidth: 3
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  modalHeading:{
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10
  },
  profileBackground:{
    backgroundColor: Colors.primary,
    borderRadius: 50,
    height: 70,
    width: 70,
  },
  profile:{
    position: "relative",
    top: 10,
    left: 10,
    height: 50,
    width: 50,
    overflow: "hidden"
  },
  backgroundAddImage:{
    position: "absolute",
    bottom: 0,
    left:0,  
    height: 30,
    backgroundColor: Colors.input,
    opacity: 0.8,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  ProfileEdit:{
    position: "relative",
    height: 30,
    width:70,
    opacity: 1
  },
  addImage:{
    height: 10,
  },
  addButton:{
      backgroundColor: Colors.primary,
      width: 100
  },
  Input:{
    width:'50%',
    borderBottomWidth: 1,
    borderBottomColor: Colors.input,
    marginLeft: 10,
},
inputBox:{
    padding: 5,
    fontSize:16
}
});
