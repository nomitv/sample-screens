import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feature from 'react-native-vector-icons/Feather'
import FastImage from 'react-native-fast-image'
import Entypo from 'react-native-vector-icons/Entypo'

const ComposeEmail = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight: '40%'}}>
                        <FontAwesome name="angle-left" color="white" size={30}/>
                    </TouchableOpacity>
                    <Text style={styles.topContainerHeading}>Inbox</Text>
                </View>
            </View>

            <View style={styles.mailDetailsContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.nameText}>
                        To
                    </Text>
                    <View style={styles.confirmEmailInput}>
                        <FastImage 
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                marginRight: 10
                            }}
                            source={{
                                uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                            }}
                        />
                        <Text style={styles.emailText}>Amalia Ventura</Text>
                    </View>
                    <View style={styles.confirmEmailInput}>
                        <FastImage 
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                marginRight: 10
                            }}
                            source={{
                                uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                            }}
                        />
                        <Text style={styles.emailText}>Kushanti Hasinika</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor:'black',
                        width: wp('90%'),
                        height: 2
                    }}
                />
            </View>
            <View style={styles.mailDetailsContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.nameText}>
                        CC
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor:'black',
                        width: wp('90%'),
                        height: 2
                    }}
                />
            </View>
            <View style={styles.mailDetailsContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.nameText}>
                        BCC
                    </Text>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor:'black',
                        width: wp('90%'),
                        height: 2
                    }}
                />
            </View>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
    },
    topContainer: {
        backgroundColor: '#f14d41',
        width: wp('100% '),
        height: hp('10%'),
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    topContainerHeading: {
        color: 'white',
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    optionsContainer: {
        paddingHorizontal: 20,
        marginTop: 15
    },
    headidngText: {
        fontWeight: '600',
        fontSize: 22
    },
    mailDetailsContainer: {
        paddingHorizontal: 20,
        marginTop: 15
    },
    nameText: {
        fontSize: 18,
        marginRight: 20
    },
    blueText: {
        color: '#9999cc'
    },
    mailContent: {
        paddingHorizontal: 20,
        flex: 1
    },
    mailText: {
        fontSize: 17,
        marginTop: 15
    },
    bottomBlueButton: {
        borderWidth: 1,
        height: hp('8.5%'),
        borderColor: '#9999cc',
        width: wp('16%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: "#f14d41"
    },
    confirmEmailInput: {
        height: hp('3%'),
        width: wp('35%'),
        backgroundColor: '#D3D3D3',
        margin:10,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row'
    },
    emailText: {
        fontSize: 14,
        fontWeight: '600'
    }
})

export default ComposeEmail