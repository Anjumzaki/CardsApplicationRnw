import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground,} from 'react-native';
import { Colors, Images } from '../constants'
import { SmallButton } from '../components';


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Orders extends Component {

    render() {
        return (
            <View style={styles.Container}>

                <View style={styles.Heading}>
                    <View style={styles.Line}/>
                    <Text style={styles.HeadingText}>YERALY PACK</Text>
                    <View style={styles.Line}/>
                </View>

                <View style={styles.planCard}>    
                    <ImageBackground
                        source={Images.Subcription_Bg}
                        resizeMode='contain'
                        style={styles.Background}
                    >
                        <View style={styles.Card}>
                            <Text style={styles.Price}>99$</Text>
                            <Text style={styles.desc}>Subsccribe and Enjoy Fifty Cards Per Year, Send Cards to your love ones</Text>
                            <SmallButton
                                style={styles.Button}
                                ButtonText= "Subscribe"
                                textStyle={{color: Colors.white}}
                                buttonPress={ () => this.props.navigation.navigate('BillingInformation')}
                            />
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        backgroundColor: Colors.white,
        flex: 1,
        alignItems: "center"
    },
    Heading:{
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    Line:{
        height: 1,
        width: '25%',
        backgroundColor: Colors.input
    },
    HeadingText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    planCard:{
        flex: 1,
        height: '100%',
        width: '90%',
        alignItems: "center",
        justifyContent: "center"
    },
    Background:{
        height: '90%',
        width: '100%'
    },
    Card:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Price:{
        color: Colors.primary,
        fontSize: 40,
        fontWeight: "bold",
        borderBottomColor: Colors.input,
        borderBottomWidth: 1,
        width: '50%',
        textAlign: "center"
    },
    desc:{
        width: '65%',
        marginTop: 30,
        paddingHorizontal: 10,
        flexShrink: 1,
        fontSize: 16,
        textAlign: "center"
    },
    Button:{
        backgroundColor: Colors.primary,
        position: "relative",
        top: '10%'
    }
})

export default Orders;