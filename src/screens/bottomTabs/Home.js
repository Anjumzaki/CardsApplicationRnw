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
                <View style={styles.SearchContainer}>
                    <View style={styles.Search}>
                        <TextInput 
                            style={styles.inputBox}
                            placeholder = 'Filter Cards'
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
                    <Card 
                        favouriteImage= {this.state.favouriteImage}
                        onPress={() => this.handleFavourite(this.state.favourite)}     
                    />
                    <Card 
                        favouriteImage= {this.state.favouriteImage}
                        onPress={() => this.handleFavourite(this.state.favourite)}          
                    />

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
    SearchContainer:{
        borderColor: Colors.primary,
        borderWidth:2,
        height: 40,
        borderRadius: 10,
        width: '90%',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: '5%'
    },
    Search:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox:{
        width: '86%',
        padding: 5,
        fontSize:16,
    }  
})

export default Home;