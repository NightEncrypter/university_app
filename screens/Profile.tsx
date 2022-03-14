import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
// import {Animated} from 'react-native';
import Feathericon from 'react-native-vector-icons/Feather';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/FontAwesome5';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
// import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import FIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import {ScrollView} from 'react-native-gesture-handler';
let Profile = () => {
  const [active, setActive] = useState(false);

  // const [fadder, setFadder] = useState({
  //   animatableFadder: new Animated.Value(0),
  // });
  // const _start = () => {
  //   Animated.timing(fadder.animatableFadder, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // };
  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  const navigation = useNavigation<any>();
  // MyCustomComponent = Animatable.createAnimatableComponent(MyCustomComponent);
  return (
    <ScrollView
      style={{
        backgroundColor: '#F4F4FC',
      }}>
      {/* <Animatable.Text animation="zoomInUp">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum?
      </Animatable.Text> */}
      {/* <Animatable.Text animation="zoomInUp" duration={1000}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum?
      </Animatable.Text> */}
      {/* <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum?
      </Text> */}

      {/* <TouchableOpacity onPress={_start}>
        <Icon name="circle" size={26} />
      </TouchableOpacity> */}
      {/* <Animated.View
        style={{
          opacity: fadder.animatableFadder,
          height: 250,
          width: 200,
          margin: 5,
          borderRadius: 12,
          backgroundColor: 'green',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>Fade out </Text>
      </Animated.View> */}
      {/* <Animatable.Text animation={fadeIn}>Fade me in</Animatable.Text> */}
      {/* <Animatable.Text animation="zoomInUp">
        <Text>Zoom me up, Scotty</Text>
      </Animatable.Text> */}
      <View style={styles.topic_head}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back_btn}>
          <FeatherIcon
            name="corner-up-left"
            size={28}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        {/* <Text style={styles.subject}>Profile</Text> */}
        <TouchableOpacity style={styles.notifications}>
          <FeatherIcon
            name="more-vertical"
            size={28}
            style={{
              color: '#00B9D3',
            }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          // flex: 1,
          marginTop: 10,
          // flexDirection: 'row',
          // shadowColor: 'aqua',
          elevation: 2,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={require('../assets/img/scarlet.jpg')}
            style={{
              resizeMode: 'cover',
              borderRadius: 100,
              width: 150,
              height: 150,
            }}
          />
        </View>

        {/* NAme */}
        <Text
          style={{
            marginTop: 15,
            fontSize: 25,
            color: '#007A8B',
            fontFamily: 'Poppins-Bold',
          }}>
          John Doe
        </Text>

        {/* Status online */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 8,
            borderRadius: 15,
            paddingHorizontal: 18,
            elevation: 2,
            // shadowColor: 'aqua',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 12,
              marginRight: 15,
              color: '#007A8B',
            }}>
            Status Online
          </Text>
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: '#00FF29',
              borderRadius: 50,
            }}></View>
        </View>

        {/* Message  and add friend */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              borderRadius: 22,
              backgroundColor: '#BB57EA',
              paddingHorizontal: 28,
              paddingVertical: 8,
              marginRight: 20,
            }}>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'white'}}>
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 22,
              backgroundColor: '#00B9D3',
              paddingHorizontal: 28,
              paddingVertical: 8,
            }}>
            <Text style={{fontFamily: 'Poppins-Medium', color: 'white'}}>
              Add Friend
            </Text>
          </TouchableOpacity>
        </View>

        {/* Icons  and etc*/}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 7,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 5,
              borderRadius: 15,
              paddingHorizontal: 30,
              elevation: 2,
              shadowColor: 'aqua',
              // marginLeft: 18,
            }}>
            <IonicIcon
              name="people-outline"
              style={{
                color: '#00B9D3',
              }}
              size={22}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: '#007A8B',
              }}>
              254
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 11,
                color: '#5CB9C6',
              }}>
              Friends
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 5,
              borderRadius: 15,
              paddingHorizontal: 30,
              elevation: 2,
              shadowColor: 'red',
              marginLeft: 18,
            }}>
            <IonicIcon
              name="people-outline"
              style={{
                color: '#FF4343',
              }}
              size={22}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: '#8F0000',
              }}>
              74
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 11,
                color: '#B66767',
              }}>
              Faculties
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 5,
              borderRadius: 15,
              paddingHorizontal: 30,
              elevation: 2,
              shadowColor: 'orange',
              marginLeft: 18,
            }}>
            <SimpleIcon
              name="badge"
              style={{
                color: 'orange',
              }}
              size={22}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 18,
                color: 'orange',
              }}>
              25
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 11,
                color: '#CD4409',
              }}>
              Rank
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 30,
            width: '100%',
            marginVertical: 18,
          }}>
          <TouchableOpacity
            onPress={() => setActive(true)}
            style={{
              backgroundColor: active ? '#0055A3' : '#0076E3',

              paddingVertical: 8,
              borderRadius: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingHorizontal: 25,
            }}>
            <Text
              style={{
                textAlign: 'center',

                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                color: 'white',
                letterSpacing: 0.7,
              }}>
              Contact
            </Text>
            <TouchableOpacity onPress={() => setActive(prev => !prev)}>
              <FIcon
                size={16}
                name={active ? 'minus-circle' : 'chevron-down'}
                color={'white'}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          {/* OPEN BOX */}
          <View
            style={{
              display: active ? 'flex' : 'none',
              backgroundColor: 'white',
              borderBottomEndRadius: 20,
              borderBottomLeftRadius: 20,
              paddingVertical: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: '#25D366',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FIcon name={'whatsapp'} size={35} color={'white'} />
                </View>
                <Text
                  style={{
                    color: 'green',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 11,
                  }}>
                  Whatsapp
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'blue',
                    borderRadius: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FeatherIcon name={'phone-call'} size={26} color={'white'} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'blue',
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Phone
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  topic_head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
    marginTop: 5,
  },

  back_btn: {
    backgroundColor: '#00B9D3',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  backIcon: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },

  notifications: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
