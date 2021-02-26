import React, {useState} from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TagInput from 'react-native-tag-input'

const ComposeEmail = () => {
    const [text, setText] = useState('')
    const [emails, setEmails] = useState([])
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
                    <TagInput
                        value={emails}
                        onChange={(emails) => setEmails(emails)}
                        labelExtractor={(email) => email}
                        text={text}
                        onChangeText={(text) => setText(text)}
                    />
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
                    <View style={{flexDirection:'row', justifyContent: 'space-between', flex: 1}}>
                        <Text style={styles.nameText}>
                            CC
                        </Text>
                        <TouchableOpacity>
                            <AntDesign name="up" size={20}/>
                        </TouchableOpacity>
                    </View>
                    <TextInput />
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
                    <TextInput />
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
                        UI Design Ideas
                    </Text>
                    <TextInput />
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

            <View style={styles.mailContent}>
                <Text style={styles.mailText}>
                    You can see the designs form the ui
                    challenge below, we extended it with the
                    components we found, updating daily, see 
                    stats for frequency.
                </Text>
            </View>
            
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '82%'}}>
                <TouchableOpacity style={styles.bottomBlueButton}>
                    <FontAwesome name="send-o" size={30} color="white" />
                </TouchableOpacity>
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