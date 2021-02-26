import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image, Platform } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import instaData from './instaData'

const InstaScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <TouchableOpacity>
                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/camera.png')}
                />
                </TouchableOpacity>
                <Text style={styles.mainHeading}>Instagram</Text>
                <TouchableOpacity>
                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/sent.png')}
                />
                </TouchableOpacity>
            </View>
            
            <View style={styles.subHeadingContainer}>
                <TouchableOpacity>
                    <Text style={styles.subHeadingText}>Stories</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="caretright" style={{marginRight:10}}/>
                    <Text style={styles.subHeadingText}>Watch all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.storyContainer}>
                <View>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => console.log('Clicked on photo')}>
                        <FastImage 
                            style={{
                                height: 45,
                                width: 45,
                                borderRadius: 100,
                                marginRight: 30,
                            }}
                            source={{
                                uri: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                            }}
                        />
                        <Ionicons name="add-circle" style={styles.addStoryButton} size={13}/>
                        <Text>Your Story</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList 
                        data={instaData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => {
                            return(
                                <View>
                                <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => console.log('Clicked on photo')}>
                                    <FastImage 
                                        style={{
                                            height: 45,
                                            width: 45,
                                            borderRadius: 100,
                                            marginRight: 30,
                                        }}
                                        source={{
                                            uri: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                                        }}
                                    />
                                    <Text style={{paddingRight:10}}>User</Text>
                                </TouchableOpacity>
                            </View>
                            )
                        }}
                        horizontal={true}
                    />
                </View>
            </View>

            <View style={styles.postContainer}>
                <View style={styles.imgShadow}>
                    <Image
                        style={{
                            height: hp('45%'),
                            width: wp('90%'),
                            borderRadius: 20
                        }}
                        source={require('./assets/images/insta.jpeg')}
                    />
                </View>
                <TouchableOpacity style={styles.imageOptionButton}>
                    <Feather name="more-horizontal" size={35}/>
                </TouchableOpacity>
            </View>

            <View style={styles.actionsContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Image 
                        style={{
                            height: 25,
                            width: 25,
                            marginRight:20
                        }}
                        source={require('./assets/logos/heart.png')}
                    />
                    <Image 
                        style={{
                            height: 25,
                            width: 25,
                            marginRight:20
                        }}
                        source={require('./assets/logos/comment.png')}
                    />
                    <Image 
                        style={{
                            height: 25,
                            width: 25,
                            marginRight:20
                        }}
                        source={require('./assets/logos/sent.png')}
                    />
                </View>

                <View>
                    <Image 
                        style={{
                            height: 25,
                            width: 25
                        }}
                        source={require('./assets/logos/saved.png')}
                    />
                </View>
            </View>

            <View style={styles.imgDetailsContainer}>
                <View style={styles.imgDetails}>
                    <Text style={styles.likesText}>2,234 Likes</Text>
                </View>

                <View style={styles.commentDetails}>
                    <Text style={styles.userName}>denil.d</Text>
                    <Text style={styles.commentText}>Hi!!</Text>
                    <Text style={styles.hashtagText}>#neonphotoset</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/home.png')}
                />

                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/search.png')}
                />

                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/instagram.png')}
                />

                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/heart.png')}
                />

                <Image 
                    style={{
                        height: 30,
                        width: 30,
                    }}
                    source={require('./assets/logos/profile.png')}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 20,
        marginTop: hp('4%')
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainHeading: {
        fontSize: 35,
        fontWeight: '500'
    },
    subHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    subHeadingText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    storyContainer: {
        marginTop: 20,
        flexDirection: 'row'
    },
    addStoryButton: {
        position: 'absolute',
        left: 38,
        bottom: 20
    },
    postContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageOptionButton: {
        position: 'absolute',
        top: 10,
        right: 20,
    },
    imgShadow: {
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,    
            },
            android: {
              elevation: 50,
            },
          }),
    },
    actionsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgDetailsContainer: {
        marginTop: 20,
    },
    likesText: {
        fontWeight: 'bold'  
    },
    userName: {
        fontWeight: '600',
        fontSize: 15,
        marginRight: 20
    },
    commentDetails: {
        marginTop: 5,
        flexDirection: 'row'
    },
    commentText: {
        marginRight: 10
    },
    hashtagText: {
        color: 'blue'
    },
    bottomContainer: {
        marginTop: 10,
        flex:1,
        backgroundColor:'#e8f4f8',
        width: wp('100%'),
        marginLeft: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default InstaScreen