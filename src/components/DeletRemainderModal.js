import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { Colors } from "../constants";
import { SmallButton } from ".";

export default  ({deleteModalVisible, deleteModalClose, noButtonPress, yesButtonPress}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={deleteModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Do you want to delete?</Text>

            <View style={styles.row}>
                <SmallButton
                    style={{backgroundColor:Colors.primary, color: Colors.white, marginLeft: 20, marginRight:20}}
                    ButtonText='No'
                    buttonPress= {noButtonPress}
                />
                <SmallButton
                    style={{backgroundColor:Colors.primary, color: Colors.white, marginLeft: 20, marginRight:20}}
                    ButtonText='Yes'
                    buttonPress= {yesButtonPress}
                />
            </View>

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
    padding: 30,
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
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },
  text:{
    marginLeft:20,
    marginRight:20
  },
  setButton: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 50,
    elevation: 2
  },
  modalHeading:{
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 10
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
