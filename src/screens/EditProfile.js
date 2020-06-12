import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Dimensions, ScrollView, Image} from 'react-native';
import { Input, SmallButton } from '../components';
import { Colors, Images } from '../constants';
import DateTimePicker from '@react-native-community/datetimepicker';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class EditProfile extends Component {
    state= {
        date : new Date(),
        mode : "date",
        show : false
    } 
    onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      this.setState({show: Platform.OS === 'ios'})
      this.setState({date: currentDate});
    };
  
    showMode = (currentMode) => {
      this.setState({show: true})
      this.setState({mode: currentMode})
    };
  
    showDatepicker = () => {
        this.showMode('date')
    };

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator= {false}>
                <View style={styles.Container}>

                    <View style={styles.BaicInfoContainer}>
                        <Text style={styles.HeadingText}>Basic Information</Text>
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

                            <View style={styles.NameInput}>
                                <Text style={styles.name}>Enter Your Name</Text>
                                <Input 
                                />
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.text}>
                            <Text>Date of Birth</Text>
                                <TouchableOpacity  
                                activeOpacity={0.4}
                                onPress={() => this.showDatepicker()}
                                >
                                <Text style={styles.note}>
                                    DD | MM | YY
                                </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.text}>
                                <Text>Date of Anniversary</Text>
                                <TouchableOpacity  
                                activeOpacity={0.4}
                                onPress={() => this.showDatepicker()}
                                >
                                <Text style={styles.note}>
                                    DD | MM | YY
                                </Text>
                                </TouchableOpacity>
                            </View>
                            {this.state.show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={this.state.date}
                                mode={this.state.mode}
                                is24Hour={true}
                                display="default"
                                // onChange={onChange}
                            />
                            )}
                        </View>
                    </View>

                    <View style={styles.InfoContainer}>
                        <Text style={styles.HeadingText}>Contact Information</Text>
                        <View style={styles.row}>
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>Country</Text>
                                <Input 
                                />
                            </View>
                            
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>Phone Number</Text>
                                <Input 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.Input}>
                                <Text style={styles.name}>Email</Text>
                                <Input 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.Input}>
                                <Text style={styles.name}>Address1</Text>
                                <Input 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>City*</Text>
                                <Input 
                                />
                            </View>
                            
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>Country*</Text>
                                <Input 
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>State*</Text>
                                <Input 
                                />
                            </View>
                            
                            <View style={styles.InputRow}>
                                <Text style={styles.name}>Zip Code*</Text>
                                <Input 
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        flex: 1,
        alignItems: "center",
    },
    row:{
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: 30
    },
    InputRow:{
        width: '45%'
    },
    profileBackground:{
        backgroundColor: Colors.primary,
        borderRadius: 50,
        height: 70,
        width: 70,
        marginLeft: 50
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
    NameInput:{
        fontSize: 16,
        color: Colors.grey,
        width: '80%',
        marginLeft: 100
    },
    name:{
        fontSize: 16,
        color: Colors.grey
    },
    Input:{
        width: '95%',
    },
    Button:{
        marginTop: 20,
        marginLeft: '50%',
        width: 70
    },
    sendButton:{
        backgroundColor: Colors.primary,
        color: Colors.white,
        textAlign: "center",
        width: 100
    },
    BaicInfoContainer:{
        borderBottomColor: Colors.input,
        borderBottomWidth: 2,
        paddingBottom: 20,
        marginBottom: 5,
        paddingTop: 10,
        width: '95%'
    },
    InfoContainer:{
        marginBottom: 50
    },
    HeadingText:{
        fontSize: 22,
        fontWeight: "bold",
    },
})

export default EditProfile