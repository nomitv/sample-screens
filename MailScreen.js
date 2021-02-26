import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import data from './someData'
import horizontalData from './horizontalData'
import FastImage from 'react-native-fast-image'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import bottomModalData from './bottomModalData'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const MailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [topModalVisible, setTopModalVisible] = useState(false)
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 30, paddingHorizontal: 20}}>
          <Modal 
            isVisible={topModalVisible}
            onBackdropPress={() => setTopModalVisible(false)}
            animationIn='slideInDown'
            animationOut='slideOutUp'
          >
            <View style={styles.topModalContainer}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <FastImage
                  style={{
                    height: 35,
                    width: 35,
                    borderRadius: 100,
                  }}
                  source={{
                    uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                  }}
                />

                <FastImage
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                  }}
                  source={{
                    uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                  }}
                />

                <Ionicons name="ios-settings-outline" size={30}/>
              </View>

              <View style={{alignItems:'center', marginTop: 10}}>
                  <Text style={styles.topModalName}>Ishan Madushka</Text>
                  <Text style={styles.topModalEmail}>Ish.madhushka@gmail.com</Text>
              </View>

              <View style={{marginTop: 20,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: wp('65%'), alignSelf: 'center'}}>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/promotion.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Promotion</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/forums.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Forums</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/update.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Updates</Text>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 20,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: wp('65%'), alignSelf: 'center'}}>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/snooze.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Snoozed</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/important.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Important</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/spam.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Spam</Text>
                  </View>
                </View>
              </View>

              <View style={{marginTop: 20,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: wp('65%'), alignSelf: 'center'}}>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/trash.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Trash</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/note.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Note</Text>
                  </View>
                  <View style={{justifyContent: 'center', alignItems:'center'}}>
                    <Image 
                      source={require('./assets/logos/create_new.png')}
                      style={{width:30, height:30}}
                    />
                    <Text style={{marginTop:5}}>Create New</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity 
                style={{justifyContent: 'center', alignItems: 'center', marginTop: 20, paddingBottom: 10}}
                onPress={() => setTopModalVisible(false)}
              >
                  <SimpleLineIcons name="arrow-up" size={30} color="#D3D3D3"/>
              </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => setTopModalVisible(true)}>
            <MaterialIcon name="dice-4" size={40} color="#cc3333"/>
          </TouchableOpacity>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{paddingRight: 10}}>
                <FastImage
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                  }}
                  source={{
                    uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                  }}
                />
              </View>
              <View>
                  <Text style={styles.accountName}>Nauman</Text>
                  <Text style={styles.accountEmail}>naumanjamil10@gmail.com</Text>
              </View>
            </View>
          </View>
          <View>
            <MaterialIcon name="card-search" size={40} color="#cc3333"/>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <FlatList
            horizontal={true}
            data={horizontalData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              // console.log('Item', item)
              return(
                <TouchableOpacity style={styles.topContainerButtons}>
                  {item.icon}
                  <Text style={{color: '#ff3333'}}>{item.id}</Text>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
      <View style={{position: 'absolute'}}>
        <View style={styles.bottomContainer}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => {
              return(
                <TouchableOpacity key={item.id} style={styles.gmailLikeList}>
                  <View style={styles.singleItem}>
                    <View style={styles.imgContainer}>
                      <FastImage 
                        style={{
                          height: 50,
                          width: 50,
                          borderRadius: 100,
                          alignItems: 'center'
                        }}
                        source={{
                          uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                        }}
                      />
                    </View>
                    <View style={{flex: 4}}>
                      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.mailFrom}>Jason Kelly</Text>
                        <Text style={styles.mailDate}>Jan 16</Text>
                      </View>
                      <Text style={styles.mailSubject}>Paintball Trip</Text>
                      <View style={styles.mailContentContainer}>
                        <Text numberOfLines={1} style={styles.mailContent}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Quisque tincidunt neque at ultricies molestie. 
                          Etiam at tempor dolor, sed dictum nisi. 
                          Cras pulvinar sem in turpis scelerisque hendrerit. 
                          Donec dictum gravida tortor at consequat. 
                          Mauris sed mauris ex. 
                          Vestibulum sodales leo nec lorem bibendum efficitur. 
                          Nulla pharetra, felis sed mattis aliquet, erat ex pulvinar sem, id porta felis tellus in ex. 
                          Quisque faucibus enim felis, sed rutrum sapien rhoncus vel. 
                          Phasellus ut nisl sollicitudin, iaculis lectus vitae, facilisis lacus. 
                          Etiam quis tellus a arcu vulputate finibus.

                          Quisque auctor elit a mi commodo efficitur. 
                          Nullam nec pretium dui. Suspendisse potenti. 
                          In hac habitasse platea dictumst. 
                          Praesent a turpis velit. 
                          Aliquam eget imperdiet lorem. 
                          Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                          Nunc laoreet mi ut pretium elementum. 
                          Aenean rutrum justo arcu, in pulvinar ex fringilla sit amet. 
                          Nulla consequat, ipsum eu tempor mattis, sem sem vehicula nibh, vulputate eleifend neque nunc et dolor. 
                          Suspendisse id diam ut odio vulputate vulputate. 
                          Aliquam molestie sem in est egestas, eu blandit augue tristique. 
                          Cras vitae sapien eget lectus semper auctor id ut dolor. 
                          Ut vel posuere augue.
                        </Text>
                        <TouchableOpacity>
                          <Icon name='star' color='#cc9900' size={15}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.horizontalLine} />
                </TouchableOpacity>
              )
            }}
          />
          <Modal 
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
            // transparent={true}
          >
            <View style={styles.bottomModal}>
              <View style={styles.smallHorizontalLine} />
              <View style={{flexDirection: 'row'}}>
                <View style={{paddingRight: 30, marginBottom:20}}>
                  <FastImage
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 100,
                    }}
                    source={{
                      uri:'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png'
                    }}
                  />
                </View>
                <View>
                    <Text style={{color: 'black'}}>Nauman</Text>
                    <Text style={{color: 'black'}}>naumanjamil10@gmail.com</Text>
                </View>
              </View>
              <FlatList
                  data={bottomModalData}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => {
                    // console.log('Item', item)
                    return(
                      <TouchableOpacity style={item.id === 'Inbox' ? styles.bottomModalContainerSelectedButtons : styles.bottomModalContainerButtons}>
                        {item.icon}
                        <Text style={{color: '#ff3333'}}>{item.id}</Text>
                      </TouchableOpacity>
                    )
                  }}
                />
                <View style={{borderBottomWidth: 2, borderBottomColor: '#D3D3D3', marginBottom: 5}} />
                <View>
                <TouchableOpacity style={styles.bottomModalContainerButtons}>
                  <Icon name='star' size={25} style={{paddingRight: 20}}/>
                  <Text style={{color: '#ff3333'}}>Starred</Text>
                </TouchableOpacity>
                </View>
            </View>
          </Modal>
          <TouchableOpacity style={{position: 'absolute', bottom: 35, left: 20, alignSelf:'center'}} onPress={() => setModalVisible(true)}>
            <FontAwesome name="arrow-right" size={50} />
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 10}}>
            <MaterialIcons name="add-circle-outline" size={80} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
  },
  topContainer: {
    backgroundColor: '#ff3333',
    // borderRadius: 30,
    height: hp('30%'),
  },
  bottomContainer: {
    borderRadius: 30,
    backgroundColor: 'white',
    width: wp('100%'),
    height: hp('79%'),
    marginTop: 150
  },
  gmailLikeList: {
    flex:1,
  },
  singleItem: {
    flexDirection: 'row',
    height: hp('10%'),
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-evenly'
  },
  horizontalLine: {
    marginTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    width: wp('80%'),
    alignSelf: 'flex-end'
  },
  mailFrom: {
    fontWeight: 'bold',
    fontSize: 15
  },
  imgContainer: {
    paddingRight: 20
  },
  mailDate: {
    fontSize: 12,
    alignSelf:'center'
  },
  mailSubject: {
    fontWeight: 'bold',
    fontSize: 14
  },
  mailContentContainer: {
    flexDirection:'row'
  },
  mailContent: {
    color: '#A9A9A9',
    fontSize: 14,
    width: wp('70%')
  },
  accountEmail: {
    color: 'white',
    fontSize: 13
  },
  accountName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  topContainerButtons: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 50,
    marginHorizontal: 8,
    width: wp('27%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomModal: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignSelf: 'center',
    paddingHorizontal: 20
  },
  smallHorizontalLine: {
    borderBottomWidth: 4,
    borderBottomColor: '#D3D3D3',
    width: wp('20%'),
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20
  },
  bottomModalContainerButtons: {
    flexDirection: 'row',
    width: wp('90%'),
    borderRadius: 30,
    height: hp('5%'),
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  bottomModalContainerSelectedButtons: {
    flexDirection: 'row',
    width: wp('90%'),
    borderRadius: 30,
    height: hp('5%'),
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#ffe6ee',
    paddingHorizontal: 10
  },
  topModalContainer: {
    height: hp('50%'),
    width: wp('100%'),
    backgroundColor: 'white',
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
  },
  topModalName: {
    fontWeight: '700',
    fontSize: 20
  },
  topModalEmail: {

  }

});

export default MailScreen