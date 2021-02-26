import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native'
import FastImage from 'react-native-fast-image'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import LinearGradient from 'react-native-linear-gradient'
import modelData from './modelData'
import AntDesign from 'react-native-vector-icons/AntDesign'

const ModelScreen = () => {
    return(
        <View style={styles.container}>
            <FastImage 
                style={{
                    flex:1
                }}
                source={{
                    uri: 'https://cdn.wallpapersafari.com/84/80/TL9lc4.jpg'
                }}
            />
            <View style={styles.textContainer}>
                <View style={{flexDirection: 'row', }}>
                    <View style={styles.smallOval} />
                </View>
                <Text style={styles.modelHeading}>WORLD'S BEST MODELS</Text>
                <Text style={styles.normalText}>Get inspired by the best portfolios</Text>
                <Text style={styles.normalText}>from all over the world</Text>
                <View style={{marginTop: 20,height:hp('10%')}}>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={modelData}
                        renderItem={({item}) => {
                            return(
                                <TouchableOpacity style={{zIndex:1}} onPress={() => console.log('Clicked on photo')}>
                                    <FastImage 
                                        style={{
                                            height:80,
                                            width: 80,
                                            borderRadius: 100,
                                            marginRight: 10,
                                        }}
                                        source={{
                                            uri: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                                        }}
                                    />
                                </TouchableOpacity>        
                            )
                        }}
                        horizontal={true}
                    />
                </View>
            </View>

            {/* <LinearGradient 
                colors={[ '#333300', 'black' ]}
                style={styles.imageOverlay}
                start={{x: 0.5, y: 0}}
                end={{x:0.5, y:1}}
            /> */}
            <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
                <Text style={styles.bottomText}>Let's start to explore</Text>
                <TouchableOpacity style={styles.orangeButton}>
                    <AntDesign name="arrowright" color="white" size={30}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageOverlay: {
        position: 'absolute',
        bottom: 0,
        height: hp('23%'),
        width: wp('100%'),
        opacity: 0.5,
        zIndex: 0
    },
    modelHeading: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginBottom: 5
    },
    textContainer: {
        position: 'absolute',
        left: 30,
        top: '65%'
    },
    normalText: {
        color: '#9b978c'
    },
    horizontalList: {
        position: 'absolute'
    },
    orangeButton: {
        position: 'absolute',
        width: wp('15%'),
        height: hp('7%'),
        backgroundColor: 'orange',
        borderRadius: 10,
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomText: {
        color: 'white',
        fontSize: 22, 
        position: 'absolute',
        bottom: 38,
        left: 30
    },
    smallOval: {
        width: wp('1%'),
        backgroundColor: '#9b978c',
        height: hp('0.5%'),
        borderRadius: 10
    }
})

export default ModelScreen