import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feature from 'react-native-vector-icons/Feather'
import FastImage from 'react-native-fast-image'
import Entypo from 'react-native-vector-icons/Entypo'

const InboxScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{marginRight: '40%'}}>
                        <FontAwesome name="angle-left" color="white" size={20}/>
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
                        <FastImage
                            style={{
                                height: 65,
                                width: 65,
                                borderRadius: 100,
                                marginRight: 20
                            }}
                            source={{
                                uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                            }}
                        />
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

            <View style={styles.mailContent}>
                <Text style={styles.mailText}>
                    UI Concpet design for Google Gmail IOS App.
                    I tried to design the UI as simple as possible which
                    makes the functionality easier to it's users.
                    I hope you like the concept.
                </Text>

                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: '95%'}}>
                    <TouchableOpacity style={styles.bottomBlueButton}>
                        <Text>Noted.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBlueButton}>
                        <Text>Sounds Good.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottomBlueButton}   >
                        <Text>Thanks</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '20%', paddingHorizontal: 40}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Entypo name="reply" size={30}/>
                        <Text>Reply</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Entypo name="reply-all" size={30}/>
                        <Text>Reply All</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Entypo name="forward" size={30}/>
                        <Text>Forward</Text>
                    </View>
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
        height: hp('5%'),
        borderColor: '#9999cc',
        width: wp('27%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})

export default InboxScreen