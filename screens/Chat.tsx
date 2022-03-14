import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import EnIcon from 'react-native-vector-icons/Entypo';
const Chat = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F4F4FC',
      }}>
      <ScrollView style={{marginBottom: 40}}>
        <View
          style={{
            marginTop: 25,
            alignSelf: 'center',
            width: 70,
            height: 70,
            elevation: 5,
            shadowColor: 'green',
            shadowRadius: 0.5,
          }}>
          <Image
            source={require('../assets/img/scarlet.jpg')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 50,
            }}
          />
        </View>

        <View
          style={{
            //   justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
              marginBottom: 2,
              color: '#006C7B',
            }}>
            John Doe
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'white',
              paddingVertical: 4,
              borderRadius: 15,
              paddingHorizontal: 18,
              elevation: 2,
              //   shadowColor: 'a',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 10,
                marginRight: 15,
                color: '#57C5D4',
              }}>
              Status Online
            </Text>
            <View
              style={{
                width: 8,
                height: 8,
                backgroundColor: '#00FF29',
                borderRadius: 50,
              }}></View>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 18,
            paddingBottom: 35,
          }}>
          {[
            {sender: 'Hey', re: 'Hello,Scarlet'},
            {sender: "What's up", re: 'Fine and you'},
            {sender: 'i am also good', re: 'what is the plan for today'},
            {
              sender: 'nothing and you',
              re: 'can we go to the beach before sunset??',
            },
            {sender: 'yeah, why not', re: 'ok done'},
            {
              sender: 'sharp 2:30pm at afternoon we will meet in a coffe shop',
              re: 'ok',
            },
            {sender: 'and then we will walk to the beach', re: 'ok fine'},
          ].map((v, i) => (
            <View key={i}>
              <View style={{alignItems: 'flex-start', marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    borderRadius: 22,
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    paddingVertical: 6,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: '#696969',
                      fontSize: 13,
                      letterSpacing: 0.8,
                    }}>
                    {v.sender}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <TouchableOpacity
                  style={{
                    borderRadius: 22,
                    backgroundColor: '#00B1C9',
                    elevation: 1,
                    paddingHorizontal: 20,
                    paddingVertical: 6,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Regular',
                      color: 'white',

                      letterSpacing: 0.8,
                      fontSize: 13,
                    }}>
                    {v.re}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          paddingVertical: 0,
          paddingHorizontal: 10,
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
        }}>
        <View
          style={{
            // marginHorizontal: 20,

            elevation: 10,
            // width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 19,
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: -7,
              width: 40,
              height: 40,
              borderRadius: 50,
            }}>
            <EnIcon name="emoji-happy" color="#CCCCCC" size={24} style={{}} />
          </TouchableOpacity>
          <TextInput
            style={{
              backgroundColor: 'transparent',
              color: 'black',
              // flex: 1,
              width: '67%',
              letterSpacing: 0.5,
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
            }}
            placeholder={'Enter your message'}
          />

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 5,

              borderRadius: 50,
            }}>
            <Icon name="paperclip" color="#CCCCCC" size={24} style={{}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              // marginLeft: 12,

              justifyContent: 'center',
              alignItems: 'center',

              backgroundColor: '#007485',
              width: 48,
              height: 48,
              borderRadius: 50,
            }}>
            <Icon name="send" color="white" size={24} style={{}} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
