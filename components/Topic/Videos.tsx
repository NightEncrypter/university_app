import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

import FeatherIcon from 'react-native-vector-icons/Feather';

const Videos = ({i}: any) => {
  return (
    <Animatable.View
      delay={300 * i}
      style={styles.video}
      animation={'fadeInUpBig'}
      key={i}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FeatherIcon
          name="video"
          size={20}
          style={{color: '#650393', marginRight: 12, height: '100%'}}
        />
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <Text style={[styles.video_file_name, {color: '#650393'}]}>
            Transitor Section
          </Text>
          <View style={styles.uploaded_on_container}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 10,
                color: 'black',
                letterSpacing: 0.5,
              }}>
              Uploaded on
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#D19EE9',
                marginLeft: 7,
                fontSize: 10,
              }}>
              12/01/2020
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <FeatherIcon name="download" size={20} style={{color: '#2989E1'}} />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  uploaded_on_container: {
    marginTop: -3,
    fontSize: 9,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.2,
    flexDirection: 'row',
  },
  video_text: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    // paddingTop: 2,
    // lineHeight: 1,
    fontSize: 14,
  },
  video_file_name: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.2,
    color: '#A33131',
  },

  video: {
    backgroundColor: 'white',
    marginVertical: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
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
