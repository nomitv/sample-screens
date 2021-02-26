import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
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

            <View style={styles.optionsContainer}>
                <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.headidngText}>New Gmail UI Design</Text>
                    <Feature name="more-vertical" color="#828282" size={25}/>
                </View>
            </View>

            <View style={styles.mailDetailsContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={styles.nameText}>
                                To
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.nameText}>
                                Elizabeth Clark
                            </Text>
                            <Text>
                                to me
                            </Text>
                            <Text style={styles.blueText}>
                                View details
                            </Text>
                        </View>
                    </View>
                    <View style={{alignItems: 'flex-end'}}>
                        <Text>Today | 6:15 PM</Text>
                        <FontAwesome name="star-o" size={15} />
                    </View>
                    
                </View>
            </View>
            <View
                style={{
                    borderWidth: 0.5,
                    borderColor:'black',
                    margin:10,
                    width: wp('80%'),
                    height: 2
                }}
            />
            <View style={styles.mailContent}>
                <Text style={styles.mailText}>
                    UI Concpet design for Google Gmail IOS App.
                    I tried to design the UI as simple as possible which
                    makes the functionality easier to it's users.
                    I hope you like the concept.
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '95%'}}>
                    <TouchableOpacity style={styles.bottomBlueButton}>
                        <FontAwesome name="send-o" size={30} color="white" />
                    </TouchableOpacity>
                </View>
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
        fontSize: 18
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
    }
})

export default ComposeEmail