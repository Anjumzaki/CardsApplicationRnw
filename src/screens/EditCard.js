import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import {Input, Button} from '../components';
import {Colors, Images} from '../constants';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height;

class EditCard extends Component {
    state={
        favourite: true,
        favouriteImage: Images.Fav_UnfillGreen
    }
    // handleFavourite = (favourite) => {
    //     if(favourite == false){
    //         this.setState({favouriteImage: Images.Fav_Unfill, favourite: true})
    //     }
    //     else{
    //         this.setState({favouriteImage: Images.Fav_Fill, favourite: false})
    //     }
    // }

    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.cardView}>
                    <View style={styles.EditCard}>
                        <Text>Only this screen will be edit able</Text>
                    </View>
                    <View style={styles.CompanyCard}>
                        <Text>Here we will put our company info that will be static</Text>
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-around", paddingVertical:5}}>
                    <Text>Front-Back</Text>
                    <Text>Back-Back</Text>
                </View>

                <View style={styles.EditRow}>
                    <TouchableOpacity 
                        style={{flexDirection:"row"}}
                    >
                        <Text style={styles.EditText}>Edit Text: </Text>
                        <Image
                            style={styles.Icon}
                            source={Images.Text}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection:"row"}}
                    >
                        <Text style={styles.EditText}>Text Color: </Text>
                        <Image
                            style={styles.Icon}
                            source={Images.Text_Color}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection:"row"}}
                    >
                        <Text style={styles.EditText}>Use Styles</Text>
                        <Image
                            style={styles.Icon}
                            source={Images.Stylus}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{flexDirection:"row"}}
                    >
                        <Text style={styles.EditText}>Use Pointer</Text>
                        <Image
                            style={styles.Icon}
                            source={Images.Pointer}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.CardDetails}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={styles.HeadingText}>Card Details: </Text>
                        <TouchableOpacity 
                            style={styles.Favourite}
                            // onPress= {this.handleFavourite()}
                        >
                            <Image
                                source= {this.state.favouriteImage}
                                resizeMode={'contain'}
                                style={styles.FavouriteIcon}
                            />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container:{
        width: screenWidth,
        height: screenHeight,
        flex: 1,
    },
    cardView:{
        width: '100%',
        height:'50%',
        flexDirection: "row",
        justifyContent: "center",
        borderColor: Colors.grey,
        borderWidth: 2,
        marginTop: 20,
        width: '95%',
        marginLeft: 10,
        marginRight:10
    },
    EditCard:{
        borderWidth:1,
        borderColor: Colors.input,
        marginLeft:5,
        marginVertical: 10,
        width: '48%',
        justifyContent: "center",
        alignItems: "center",
    },
    CompanyCard:{
        borderWidth:1,
        borderColor: Colors.input,
        marginRight:5,
        marginVertical: 10,
        width: '48%',
        justifyContent: "center",
        alignItems: "center"
    },
    EditRow:{
        flexDirection: "row", 
        justifyContent: "space-around", 
        marginTop: 10,
        paddingVertical:10,
        borderTopColor: Colors.input,
        borderBottomColor: Colors.input,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    EditText:{
        fontWeight: "bold"
    },
    Icon:{
        height: 20,
        width:20
    },
    CardDetails:{
        paddingHorizontal: 10,
        marginTop: 10
    },
    HeadingText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    Favourite:{
        height:20,
        width:20,
    },
    FavouriteIcon:{
        height:20,
        width:20
    },
})

export default EditCard;