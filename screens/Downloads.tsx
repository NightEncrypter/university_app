import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import React, {useEffect, useState} from 'react';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import * as Animatable from 'react-native-animatable';
const Downloads = ({navigation}: any) => {
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [activeAnimation2, setActiveAnimation2] = useState(false);

  const isFocused = useIsFocused();
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
      marginTop: 1,
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    pdf_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',
      // paddingTop: 2,
      // lineHeight: 1,
      fontSize: 14,
      // marginTop: 2,
    },
    pdf_file_name: {
      marginBottom: -1,
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      // letterSpacing: 0.1,
      color: '#000',
      // paddingTop: 2,
    },

    pdf: {
      backgroundColor: 'white',
      marginVertical: 4,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 3,
      width: '100%',
      // shadowColor: '#2CE6FF',
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

  useEffect(() => {
    return () => {
      setActiveAnimation(false);
      setActiveAnimation2(false);
    };
  }, []);

  const [active, setActive] = useState('download');
  return (
    <ScrollView
      style={{
        backgroundColor: '#F4F4FC',
      }}>
      <StatusBar hidden={false} />

      <View
        style={{
          // width: '60%',
          // marginHorizontal: 'auto',
          marginVertical: 25,
          // marginLeft: 'auto',
          // marginRight: 'auto',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'green',
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            width: '65%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => {
              setActive('download');
              setActiveAnimation(true);
              // setTimeout(() => setActiveAnimation(false), 1000);
            }}
            style={{
              backgroundColor: active == 'download' ? '#00B1C9' : 'white',
              width: 110,
              height: 48,
              padding: 10,
              // flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,

              shadowColor: '#2CE6FF',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 4.84,

              elevation: 2,
              // borderColor: 'red',
              // borderWidth: 2,
            }}>
            <FeatherIcon
              name="download"
              size={25}
              style={{
                color: active == 'download' ? 'white' : '#00B1C9',
              }}
            />
            <Text
              style={{
                // marginTop:,
                color: active == 'download' ? 'white' : '#00B1C9',

                textTransform: 'capitalize',
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              Downloads
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActive('downloaded');
              setActiveAnimation2(true);
              // setTimeout(() => setActiveAnimation2(false), 3000);
            }}
            style={{
              backgroundColor: active == 'downloaded' ? '#00B1C9' : 'white',
              width: 110,
              height: 48,
              padding: 10,
              // flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 25,

              // shadowColor: '#2CE6FF',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.8,
              shadowRadius: 4.84,

              elevation: 2,
            }}>
            <FeatherIcon
              name="check"
              size={25}
              style={{
                color: active == 'downloaded' ? 'white' : '#00B1C9',
              }}
            />

            <Text
              style={{
                // marginTop:,
                color: active == 'downloaded' ? 'white' : '#00B1C9',

                textTransform: 'capitalize',
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              Downloaded
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: 20}}>
        {/* PDFS */}
        <View
          style={{
            marginVertical: 15,
            display: active == 'download' ? 'flex' : 'none',
          }}>
          <View>
            {[
              {name: 'Assignment-1', percent: 40},
              {name: 'Assignment-2', percent: 50},
              {name: 'Assignment-3', percent: 20},
              {name: 'Assignment-3', percent: 35},
              {name: 'Assignment-3', percent: 15},
              {name: 'Assignment-5', percent: 100},
            ].map(
              (pdf, i) =>
                isFocused && (
                  <Animatable.View
                    style={styles.pdf}
                    animation={'zoomInUp'}
                    delay={150 * i}
                    key={i}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <FontAwesome
                        name="file-alt"
                        size={21}
                        style={{
                          color: '#00454F',
                          marginRight: 12,
                          height: '100%',
                        }}
                      />
                      <View
                        style={{
                          justifyContent: 'space-around',
                          width: '85%',
                        }}>
                        <Text style={styles.pdf_file_name}>{pdf.name}</Text>
                        <View
                          style={{
                            width: '100%',
                            height: 4.5,
                            backgroundColor: '#E7E7E7',
                            borderRadius: 50,
                          }}>
                          <View
                            style={[
                              {
                                width: pdf.percent + '%',
                                height: '100%',
                                backgroundColor:
                                  pdf.percent > 70
                                    ? pdf.percent > 50
                                      ? '#2CE6FF'
                                      : '#50E2AD'
                                    : pdf.percent < 40
                                    ? pdf.percent < 20
                                      ? '#FF4343'
                                      : '#E2D450'
                                    : '#FFA800',

                                borderRadius: 50,
                              },
                            ]}></View>
                        </View>
                        <View style={styles.uploaded_on_container}>
                          <Text
                            style={{
                              fontFamily: 'Poppins-Medium',
                              fontSize: 10,
                              color: 'grey',
                            }}>
                            1mbps / 2mbps
                          </Text>
                          <Text
                            style={{
                              fontFamily: 'Poppins-Medium',
                              fontSize: 10,
                              color: 'grey',
                            }}>
                            connected
                          </Text>
                        </View>
                      </View>
                    </View>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Downloads')}>
                      <FeatherIcon
                        name="info"
                        size={15}
                        style={{color: '#2989E1'}}
                      />
                    </TouchableOpacity>
                  </Animatable.View>
                ),
            )}
          </View>
        </View>

        {/* Downloaded Files */}
        <View
          style={{
            marginVertical: 15,
            display: active == 'downloaded' ? 'flex' : 'none',
          }}>
          {[1, 2, 3, 4].map(
            (d, i) =>
              isFocused && (
                <Animatable.View
                  style={styles.pdf}
                  key={i}
                  animation={'bounceIn'}
                  delay={300 * i}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IonicIcon
                      name="file-tray-full-outline"
                      size={21}
                      style={{
                        color: '#00454F',
                        marginRight: 12,
                        height: '100%',
                      }}
                    />
                    <View
                      style={{
                        justifyContent: 'space-around',
                        width: '85%',
                      }}>
                      <Text
                        style={[
                          styles.pdf_file_name,
                          {
                            color: '#009CB1',
                          },
                        ]}>
                        Assignment-1
                      </Text>

                      <View
                        style={[
                          styles.uploaded_on_container,
                          {
                            flexDirection: 'row',
                            width: '35%',
                            alignItems: 'center',
                          },
                        ]}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 10,
                            color: '#00505B',
                            marginRight: 3,
                            letterSpacing: 0.2,
                          }}>
                          121kb
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppin-Bold',
                            alignSelf: 'center',
                            fontSize: 12,
                            color: '#00505B',
                          }}>
                          |
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 10,
                            color: '#00505B',
                            letterSpacing: 0.2,
                            marginLeft: 3,
                          }}>
                          07/01/2022
                        </Text>
                      </View>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Downloads')}>
                    <IonicIcon
                      name="arrow-forward-circle-outline"
                      size={24}
                      style={{color: '#00C271'}}
                    />
                  </TouchableOpacity>
                </Animatable.View>
              ),
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Downloads;

const styles = StyleSheet.create({});
