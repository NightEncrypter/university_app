import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import React, {useEffect, useState} from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FAwesome from 'react-native-vector-icons/FontAwesome';
import FAwesomeNorm from 'react-native-vector-icons/FontAwesome5';
const Messages = () => {
  const isFocused = useIsFocused();
  const [active, setActive] = useState('download');
  const navigation = useNavigation<any>();

  const styles = StyleSheet.create({
    topic_head: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 8,
      alignItems: 'center',
      marginTop: 5,
    },

    back_btn: {
      backgroundColor: '#05CACA',
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
    subject: {
      color: '#05CACA',
      fontFamily: 'Poppins-Medium',
      fontSize: 22,
    },
    notifications: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
    },
    topic_info: {
      fontFamily: 'Poppins-Medium',
      fontSize: 13,
      textAlign: 'center',
      // textAlign: 'right',
      color: '#fff',
      // textTransform: 'capitalize',
      letterSpacing: 0.8,
    },
    pdf_head: {
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
      backgroundColor: '#0076E3',
      paddingVertical: 4,
      width: 125,
      paddingHorizontal: 20,
      borderRadius: 20,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    shape: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      width: '100%',

      borderRadius: 25,
      shadowColor: '#2CE6FF',
    },
    topics: {
      paddingHorizontal: 30,
      paddingVertical: 6,
      backgroundColor: 'white',
      width: 150,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      shadowColor: '#2CE6FF',
      elevation: 12,
    },
    topic_text: {
      fontFamily: 'Poppins-Bold',
      fontSize: 17,
      color: '#000',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },

    uploaded_on_container: {
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      flexDirection: 'row',
      //   justifyContent: 'space-between',
      alignItems: 'center',
    },
    pdf_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',

      fontSize: 14,
    },
    add_friend_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',

      fontSize: 13,
      letterSpacing: 0.3,
    },
    pdf_file_name: {
      marginBottom: -1,
      fontSize: 14,
      letterSpacing: 0.5,
      fontFamily: 'Poppins-Medium',
      color: '#009CB1',
    },

    message: {
      backgroundColor: '#fff',
      marginVertical: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 10,
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
  return (
    <ScrollView
      style={{
        backgroundColor: '#F4F4FC',
      }}>
      <View style={{paddingHorizontal: 20}}>
        {/* Faculties */}
        <View
          style={{
            marginVertical: 15,
            // display: active == 'downloaded' ? 'flex' : 'none',
          }}>
          <View>
            {[
              {name: 'Scarlet Heck'},
              {name: 'Scarlet Johnson'},
              {name: 'Scarlet Johnson'},
            ].map(
              (pdf, i) =>
                isFocused && (
                  <Animatable.View animation={'bounce'} delay={i * 300} key={i}>
                    <TouchableOpacity
                      style={styles.message}
                      onPress={() => navigation.navigate('Chat')}>
                      <View
                        style={{
                          flexDirection: 'row',
                          // alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}>
                        <View style={{flexDirection: 'row'}}>
                          <Image
                            source={require('../assets/img/scarlet.jpg')}
                            style={{
                              width: 50,
                              height: 50,
                              resizeMode: 'cover',
                              borderRadius: 50,
                              marginRight: 10,
                              alignSelf: 'center',
                            }}
                          />
                          <View
                            style={{
                              justifyContent: 'space-around',
                            }}>
                            <Text
                              style={[
                                styles.pdf_file_name,
                                {
                                  color: '#006C7B',
                                },
                              ]}>
                              {pdf.name}
                            </Text>

                            <View style={styles.uploaded_on_container}>
                              <Text
                                style={{
                                  fontFamily: 'Poppins-Medium',
                                  fontSize: 9,
                                  color: '#77C7D2',
                                }}>
                                Status offline
                              </Text>
                              <View
                                style={{
                                  width: 8,
                                  height: 8,
                                  backgroundColor: '#50E267',
                                  borderRadius: 100,
                                  marginLeft: 10,
                                }}></View>
                            </View>

                            <Text
                              style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 12,
                                letterSpacing: 0.6,
                                color: '#696969',
                              }}>
                              When will you join ??
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            justifyContent: 'space-between',
                            // width: '100%',
                          }}>
                          <Text
                            style={{
                              color: '#55C2D1',
                              fontFamily: 'Poppins-Medium',
                              fontSize: 10,
                            }}>
                            1 hour ago
                          </Text>

                          <View
                            style={{
                              flexDirection: 'row',

                              alignSelf: 'flex-end',
                            }}>
                            {/* DOTS */}
                            {[1, 2, 3].map((v, i) => (
                              <View
                                key={i}
                                style={{
                                  width: 5,
                                  height: 5,
                                  borderRadius: 100,
                                  padding: 2,
                                  backgroundColor: '#E8E8E8',
                                  alignSelf: 'flex-end',
                                  marginRight: 3,
                                }}>
                                <Text
                                  style={{
                                    color: 'white',
                                  }}>
                                  12
                                </Text>
                              </View>
                            ))}
                            {/* SINGLE BLUE DOT */}
                            <View
                              style={{
                                width: 25,
                                height: 25,
                                borderRadius: 100,
                                padding: 4,
                                backgroundColor: '#00B1C9',
                              }}>
                              <Text
                                style={{
                                  color: 'white',
                                  fontSize: 13,
                                }}>
                                12
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </Animatable.View>
                ),
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Messages;

const styles = StyleSheet.create({});
