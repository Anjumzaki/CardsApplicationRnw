import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View
} from "react-native";
import { Colors } from "../constants";
import { SmallButton } from ".";

export default  ({thankyouModalVisible, thankyouModalClose, okButtonPress}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={thankyouModalVisible}
        onRequestClose={thankyouModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalHeading}>Thankyou for ordering, {'\n'}As we deliver card to your {'\n'}loved one, We will notify you.</Text>

            <View style={styles.row}>
                <SmallButton
                    style={{backgroundColor:Colors.primary, color: Colors.white, marginLeft: 20, marginRight:20}}
                    ButtonText='Ok'
                    buttonPress= {okButtonPress}
                    textStyle={{color: Colors.white}}
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
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
