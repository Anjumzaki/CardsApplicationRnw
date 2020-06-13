import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import { Colors } from '../../constants'
import {OrderCard} from '../../components'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class Orders extends Component {

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.Container}>

                    <View style={styles.Heading}>
                        <View style={styles.Line}/>
                        <Text style={styles.HeadingText}>PAST ORDERS</Text>
                        <View style={styles.Line}/>
                    </View>
                
                    <OrderCard 
                        onPressCard={() => this.props.navigation.navigate('OrderDetails')}
                    />
                    <OrderCard 
                        onPressCard={() => this.props.navigation.navigate('OrderDetails')}
                    />
                    <OrderCard 
                        onPressCard={() => this.props.navigation.navigate('OrderDetails')}
                    />
                    <OrderCard 
                        onPressCard={() => this.props.navigation.navigate('OrderDetails')}
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
    }
})

export default Orders;