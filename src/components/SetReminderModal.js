import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { Colors } from "../constants";
import DateTimePicker from '@react-native-community/datetimepicker';

export default  ({setReminderModalVisible, modalClose}) => {
  
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={setReminderModalVisible}
        onRequestClose={modalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeading}>Set Reminder</Text>

            <View style={styles.row}>
                <View style={styles.text}>
                    <Text>Write Your Note</Text>
                    <TextInput
                      style={styles.note}
                    />
                </View>

                <View style={styles.text}>
                    <Text>Set Time</Text>
                    <TouchableOpacity  
                      activeOpacity={0.4}
                      onPress={() => showTimepicker()}
                    >
                    <Text style={styles.note}>
                        HRS | MIN | AM
                      </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.text}>
                  <Text>Date of Birth</Text>
                    <TouchableOpacity  
                      activeOpacity={0.4}
                      onPress={() => showDatepicker()}
                    >
                    <Text style={styles.note}>
                        DD | MM | YY
                      </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text}>
                    <Text>Anniversary</Text>
                    <TouchableOpacity  
                      activeOpacity={0.4}
                      onPress={() => showDatepicker()}
                    >
                    <Text style={styles.note}>
                        DD | MM | YY
                      </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {show && (
                      <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                      />
                    )}
            <TouchableHighlight
              style={styles.setButton}
              onPress={modalClose}
            >
              <Text style={styles.textStyle}>Set</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: '30%',
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  text:{
    margin: 20,
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
  note: {
    borderBottomColor: Colors.input,
    borderBottomWidth: 1,
    height:25,
    fontSize: 14,
    width: '100%',
    padding: 5,
  }
});
