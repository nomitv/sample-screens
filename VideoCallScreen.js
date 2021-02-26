import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const VideoCallScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>

                <FastImage 
                    style={{
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        flex:1
                    }}
                    source={{
                        uri: 'https://cdn.wallpapersafari.com/84/80/TL9lc4.jpg'
                    }}
                />

                <View style={styles.otherVideoContainer}>
                    <FastImage 
                        style={{
                            flex:1,
                            borderRadius: 10,
                            position: 'relative'
                        }}
                        source={{
                            uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                        }}
                    />
                    <View 
                        style={{
                            position: 'absolute',
                            right: 5,
                            top: 5
                        }}>
                        <Feather name="arrow-up-right" color='red' size={15}/>
                    </View>
                </View>

                <View style={styles.backButtonContainer}>
                    <AntDesign name="left" size={20} color='red'/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{color:'white'}}>Publisher</Text>
                    <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>Jennifer Aniston</Text>
                </View>
                
                <View style={styles.ovalButton}>
                    <Entypo name="dot-single" color="red" size={50}/>
                    <Text style={{color: 'white', marginLeft: -10}}>22:15</Text>
                </View>

                <View style={styles.verticalButtonContainer}>
                    <View style={styles.circleContainerEnabled}>
                        <AntDesign name="down" size={20} color='white'/>
                    </View>

                    <View style={styles.circleContainerDisabled}>
                        <Feather name="video-off" size={20} color='red'/>
                    </View>

                    <View style={styles.circleContainerDisabled}>
                        <FontAwesome name="microphone" size={20} color='red'/>
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Image
                    style={{
                        height: 25,
                        width: 25,
                    }} 
                    source={require('./assets/logos/down-arrow.png')}
                />

                <Image
                    style={{
                        height: 25,
                        width: 25,
                    }} 
                    source={require('./assets/logos/loading.png')}
                />

                <Image
                    style={{
                        height: 60,
                        width: 60,
                    }} 
                    source={require('./assets/logos/phone-call.png')}
                />

                <Image
                    style={{
                        height: 25,
                        width: 25,
                    }} 
                    source={require('./assets/logos/message.png')}
                />

                <Feather name="more-vertical" color="#ffffff" size={25}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.9,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20
    },
    imgContainer: {
        height: hp('85%'),
        width: wp('100%'),
    },
    ovalButton: {
        height: hp('7%'),
        width: wp('23%'),
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 50,
        bottom: 10,
        left: 10,
        opacity: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        position: 'absolute',
        bottom: 100,
        left: 20,
    },
    verticalButtonContainer: {
        position: 'absolute',
        right: 20,
        bottom: 0
    },
    circleContainerEnabled: {
        height: hp('7%'),
        width: wp('13%'),
        backgroundColor: 'black',
        borderRadius: 50,
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15

    },
    circleContainerDisabled: {
        height: hp('7%'),
        width: wp('13%'),
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    backButtonContainer: {
        height: hp('6%'),
        width: wp('12%'),
        position: 'absolute',
        left: 20,
        top: 20,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherVideoContainer: {
        height: hp('20%'),
        width: wp('25%'),
        backgroundColor: 'white',
        position: 'absolute',
        right: 20,
        top: 20,
        borderRadius: 5,
    }
})

export default VideoCallScreen