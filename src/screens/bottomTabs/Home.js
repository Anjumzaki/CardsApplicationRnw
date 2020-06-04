import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import {Card} from '../../components'
import{Images, Colors}  from '../../constants'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

let activeIcon, inactiveIcon;

class Home extends Component {
    state={
        favourite: true,
        favouriteImage: Images.Fav_Fill
    }
    handleFavourite = (favourite) => {
        if(favourite == false){
            this.setState({favouriteImage: Images.Fav_Unfill, favourite: true})
        }
        else{
            this.setState({favouriteImage: Images.Fav_Fill, favourite: false})
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.Search}>
                    <TextInput 
                        style={styles.inputBox}
                        placeholder = 'Filter Cards'
                        // onChangeText={ onChangeText }
                        // value = { value }
                    />
                    <Image
                        source={Images.Filter}
                        style={{height:15, width: 15}}
                    />
                </View>
                
                <View style={styles.Container}>
                    <Card 
                        favouriteImage= {this.state.favouriteImage}
                        onPress={() => this.handleFavourite(this.state.favourite)}     
                    />
                    <Card 
                        favouriteImage= {this.state.favouriteImage}
                        onPress={() => this.handleFavourite(this.state.favourite)}          
                    />

                </View>
                <View style={styles.Container}>
                    <Card />
                    <Card />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10
    },
    Search:{
        width: '80%',
        marginLeft: '10%',
        marginTop: 20,
        marginBottom: 10
    },
    inputBox:{
        padding: 5,
        fontSize:16,
        borderColor: Colors.primary,
        borderWidth:2,
        height: 40,
        borderRadius: 10
    }  
})

export default Home;