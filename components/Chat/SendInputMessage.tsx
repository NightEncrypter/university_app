import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import EnIcon from 'react-native-vector-icons/Entypo';
const SendInputMessage = () => {
  return (
    <View style={styles.main_send_box}>
      <View style={styles.send_input_container}>
        <TouchableOpacity style={styles.emoji_btn}>
          <EnIcon name="emoji-happy" color="#ccc" size={24} style={{}} />
        </TouchableOpacity>
        <TextInput
          style={{
            backgroundColor: 'transparent',
            color: 'black',
            flex: 1,
            letterSpacing: 0.5,
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          placeholder={'Enter your message'}
        />

        <TouchableOpacity style={styles.paperclip_btn}>
          <Icon name="paperclip" color="#CCCCCC" size={24} style={{}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.send_btn}>
          <Icon name="send" color="white" size={24} style={{}} />
        </TouchableOpacity>
      </View>
      {/* <View
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
      </View> */}
    </View>
  );
};

export default SendInputMessage;

const styles = StyleSheet.create({
  send_input_container: {
    width: '100%',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 19,
  },
  emoji_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  paperclip_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  send_btn: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#007485',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  main_send_box: {
    paddingVertical: 0,
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 10,
    left: 1,
    right: 1,
  },
});
