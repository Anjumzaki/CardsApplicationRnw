import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ScrollView} from 'react-native';
import {Card} from '../../components'
import{Images, Colors}  from '../../constants'
import {Picker} from '@react-native-community/picker';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

let activeIcon, inactiveIcon;

class Home extends Component {
    state={
        favourite: true,
        favouriteImage: Images.Fav_Fill,
        filterCard: '',
        category: 'Birthday Card'
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Container}>
                    <View style={styles.SearchContainer}>
                        <View style={styles.Search}>
                            <Picker
                                style={styles.categoryBox}
                                selectedValue={this.state.category}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({category: itemValue})
                                  }
                                >
                                <Picker.Item label="Valentin's Day Card" value="Valentin's Day Card" />
                                <Picker.Item label="Wedding" value="Wedding" />
                                <Picker.Item label="Aniversory" value="Aniversory" />
                                <Picker.Item label="Fathers Day" value="Fathers Day" />
                                <Picker.Item label="Mothers Day" value="Mothers Day" />
                                <Picker.Item label="Friendship" value="Friendship" />
                                <Picker.Item label="Engagement" value="Engagement" />
                            </Picker>
                            <Image
                                source={Images.Filter}
                                style={{height:20, width: 20}}
                                resizeMode= 'contain'
                            />
                        </View>
                    </View>
                    
                    <View style={styles.CardContainer}>
                        <Card 
                            favouriteImage= {this.state.favouriteImage}
                            cardImage={Images.Card}
                            cardOnPress={() => this.props.navigation.navigate('EditCard')}
                            onPress={() => this.handleFavourite(this.state.favourite)}
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}     
                        />
                        <Card 
                            favouriteImage= {this.state.favouriteImage}
                            cardImage={Images.Card}
                            cardOnPress={() => this.props.navigation.navigate('EditCard')}
                            onPress={() => this.handleFavourite(this.state.favourite)}  
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}        
                        />

                    </View>
                    
                    <View style={styles.CardContainer}>
                        <Card 
                            favouriteImage= {this.state.favouriteImage}
                            cardImage={Images.Card}
                            cardOnPress={() => this.props.navigation.navigate('EditCard')}
                            onPress={() => this.handleFavourite(this.state.favourite)} 
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}    
                        />
                        <Card 
                            favouriteImage= {this.state.favouriteImage}
                            cardImage={Images.Card}
                            cardOnPress={() => this.props.navigation.navigate('EditCard')}
                            onPress={() => this.handleFavourite(this.state.favourite)} 
                            sendButton={() => this.props.navigation.navigate('ReceiverInformation')}         
                        />

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
        alignItems: "center"
    },
    CardContainer:{
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
        height: 45,
        borderRadius: 10,
        width: '90%',
        marginTop: 20,
        marginBottom: 10,
    },
    Search:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    categoryBox:{
        width: '86%',
        padding: 2,
        height: 45,
        fontSize:16,
    }  
})

export default Home;