import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StatusBar,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import React, {useEffect, useState} from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FAwesome from 'react-native-vector-icons/FontAwesome5';
import FAwesomeNorm from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const Downloads = ({navigation}: any) => {
  useEffect(() => {
    return () => {};
  }, []);

  const isFocused = useIsFocused();

  const styles = StyleSheet.create({
    status: {
      fontFamily: 'Poppins-Medium',
      fontSize: 10,
      color: '#6DBCC7',
    },
    friends_box_head: {
      backgroundColor: '#FF4343',
      paddingVertical: 2,
      width: 110,
      paddingHorizontal: 20,
      borderRadius: 20,

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    add_friend: {
      backgroundColor: '#BB57EA',
      color: '#BB57EA',
      paddingVertical: 4,
      width: 125,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginBottom: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },

    uploaded_on_container: {
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    friends_box_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',

      fontSize: 14,
    },
    add_friend_text: {
      color: '#008496',
      fontFamily: 'Poppins-Bold',
      marginVertical: 5,
      fontSize: 15,
      letterSpacing: 0.6,
    },
    friend_name: {
      marginBottom: -1,
      fontSize: 13,
      letterSpacing: 0.2,
      fontFamily: 'Poppins-Medium',
      color: '#00B1C9',
    },

    friends_box: {
      backgroundColor: '#fff',
      marginVertical: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 7,
      width: '100%',
      // shadowColor: 'green',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 4.84,

      elevation: 0.5,
      borderRadius: 25,
    },
  });
  const [fadder, setFadder] = useState({
    animatableFadder: new Animated.Value(0),
  });

  const _start = () => {
    Animated.timing(fadder.animatableFadder, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const [active, setActive] = useState('download');
  return (
    <ScrollView
      style={{
        backgroundColor: '#F4F4FC',
      }}>
      <StatusBar hidden={false} />

      <View
        style={{
          marginVertical: 25,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '65%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => setActive('download')}
            style={{
              backgroundColor: active == 'download' ? '#00B1C9' : 'white',
              width: 110,
              height: 48,
              padding: 10,
              paddingTop: 13,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,

              // shadowColor: '#00606D',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 4.84,

              elevation: 2,
            }}>
            <FAwesome
              name="user-friends"
              size={22}
              style={{
                color: active == 'download' ? 'white' : '#00B1C9',
              }}
            />
            <Text
              style={{
                color: active == 'download' ? 'white' : '#00B1C9',

                textTransform: 'capitalize',
                fontSize: 10,
                fontFamily: 'Poppins-Medium',
                letterSpacing: 0.6,
              }}>
              Friends
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActive('downloaded')}
            style={{
              backgroundColor: active == 'downloaded' ? '#00B1C9' : 'white',
              width: 110,
              height: 48,
              padding: 10,
              paddingTop: 13,

              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,

              // shadowColor: '#C90000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 4.84,

              elevation: 2,
            }}>
            <FAwesomeNorm
              name="users-cog"
              size={22}
              style={{
                color: active == 'downloaded' ? 'white' : '#00B1C9',
              }}
            />

            <Text
              style={{
                color: active == 'downloaded' ? 'white' : '#00B1C9',

                textTransform: 'capitalize',
                fontSize: 10,
                fontFamily: 'Poppins-Medium',
                letterSpacing: 0.6,
              }}>
              Faculties
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            marginVertical: 15,
            display: active == 'download' ? 'flex' : 'none',
          }}>
          {/* {isFocused && (
            <Animatable.View
              animation={'bounce'}
              duration={300}
              style={styles.add_friend}>
              <Text style={styles.add_friend_text}>Add Friends</Text>
            </Animatable.View>
          )} */}

          <Text style={styles.add_friend_text}>Add Friends</Text>

          <View>
            {[
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
            ].map(
              (friends, i) =>
                isFocused && (
                  <Animatable.View animation={'zoomIn'} delay={i * 300} key={i}>
                    <TouchableOpacity
                      style={styles.friends_box}
                      onPress={() => navigation.navigate('Profile')}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Profile')}>
                          <Image
                            source={require('../assets/img/scarlet.jpg')}
                            style={{
                              width: 45,
                              height: 45,
                              resizeMode: 'cover',
                              borderRadius: 50,
                              marginRight: 10,
                            }}
                          />
                        </TouchableOpacity>

                        <View
                          style={{
                            justifyContent: 'space-around',
                          }}>
                          <Text style={[styles.friend_name]}>
                            {friends.name}
                          </Text>

                          <View style={styles.uploaded_on_container}>
                            <Text style={styles.status}>Status offline</Text>
                            <View
                              style={{
                                width: 8,
                                height: 8,
                                backgroundColor: '#50E267',
                                borderRadius: 100,
                                marginLeft: 10,
                              }}></View>
                          </View>
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                        <FAwesome
                          name="user-plus"
                          size={18}
                          style={{color: '#008496'}}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Animatable.View>
                ),
            )}
          </View>

          <Text style={[styles.add_friend_text, {marginVertical: 5}]}>
            Your Friends
          </Text>

          <View>
            {[
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
            ].map(
              (friends_box, i) =>
                isFocused && (
                  <Animatable.View animation={'zoomIn'} delay={i * 300} key={i}>
                    <TouchableOpacity
                      style={styles.friends_box}
                      onPress={() => navigation.navigate('Profile')}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={require('../assets/img/scarlet.jpg')}
                          style={{
                            width: 45,
                            height: 45,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginRight: 10,
                          }}
                        />
                        <View
                          style={{
                            justifyContent: 'space-around',
                          }}>
                          <Text style={[styles.friend_name]}>
                            {friends_box.name}
                          </Text>

                          <View style={styles.uploaded_on_container}>
                            <Text style={styles.status}>Status offline</Text>
                            <View
                              style={{
                                width: 8,
                                height: 8,
                                backgroundColor: '#50E267',
                                borderRadius: 100,
                                marginLeft: 10,
                              }}></View>
                          </View>
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('Downloads')}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: 11,
                            letterSpacing: 0.5,
                            color: '#008496',
                          }}>
                          View Profile
                        </Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Animatable.View>
                ),
            )}
          </View>
        </View>

        {/* Faculties */}
        <View
          style={{
            marginVertical: 15,
            display: active == 'downloaded' ? 'flex' : 'none',
          }}>
          <Text style={styles.add_friend_text}>Add Faculties</Text>
          <View>
            {[
              {name: 'Scarlet Heck'},
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
            ].map(
              (friends_box, i) =>
                isFocused && (
                  <Animatable.View animation={'zoomIn'} delay={i * 300} key={i}>
                    <TouchableOpacity
                      style={styles.friends_box}
                      onPress={() => navigation.navigate('Profile')}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                          source={require('../assets/img/scarlet.jpg')}
                          style={{
                            width: 45,
                            height: 45,
                            resizeMode: 'cover',
                            borderRadius: 50,
                            marginRight: 10,
                          }}
                        />
                        <View
                          style={{
                            justifyContent: 'space-around',
                          }}>
                          <Text style={[styles.friend_name]}>
                            {friends_box.name}
                          </Text>

                          <View style={styles.uploaded_on_container}>
                            <Text style={styles.status}>Status offline</Text>
                            <View
                              style={{
                                width: 8,
                                height: 8,
                                backgroundColor: '#50E267',
                                borderRadius: 100,
                                marginLeft: 10,
                              }}></View>
                          </View>
                        </View>
                      </View>

                      <TouchableOpacity
                        onPress={() => navigation.navigate('Downloads')}>
                        <FAwesome
                          name="user-plus"
                          size={18}
                          style={{color: '#008496'}}
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                  </Animatable.View>
                ),
            )}
          </View>

          {/* Added Faculties */}

          <Text style={styles.add_friend_text}>My Faculties</Text>
          <View>
            {[
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
            ].map(
              (friends_box, i) =>
                isFocused && (
                  <TouchableOpacity
                    style={styles.friends_box}
                    key={i}
                    onPress={() => navigation.navigate('Profile')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../assets/img/scarlet.jpg')}
                        style={{
                          width: 45,
                          height: 45,
                          resizeMode: 'cover',
                          borderRadius: 50,
                          marginRight: 10,
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'space-around',
                        }}>
                        <Text style={[styles.friend_name]}>
                          {friends_box.name}
                        </Text>

                        <View style={styles.uploaded_on_container}>
                          <Text style={styles.status}>Status offline</Text>
                          <View
                            style={{
                              width: 8,
                              height: 8,
                              backgroundColor: '#50E267',
                              borderRadius: 100,
                              marginLeft: 10,
                            }}></View>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Downloads')}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Bold',
                          fontSize: 12,
                          letterSpacing: 0.5,
                          color: '#008496',
                        }}>
                        View Profile
                      </Text>
                    </TouchableOpacity>
                  </TouchableOpacity>
                ),
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Downloads;
