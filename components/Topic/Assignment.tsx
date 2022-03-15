import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

import FeatherIcon from 'react-native-vector-icons/Feather';

const Assignment = ({i}: any) => {
  const styles = StyleSheet.create({
    uploaded_on_container: {
      marginTop: -3,
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      flexDirection: 'row',
    },
    assign_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',
      // paddingTop: 2,
      // lineHeight: 1,
      fontSize: 14,
    },
    assign_file: {
      fontSize: 13,
      fontFamily: 'Poppins-Medium',
      letterSpacing: 0.2,
      color: '#A33131',
    },

    assign: {
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

  return (
    <View style={styles.assign}>
      <View style={{flexDirection: 'row', alignItems: 'center', zIndex: 2}}>
        <FeatherIcon
          name="file-text"
          size={20}
          style={{color: '#0061BA', marginRight: 12, height: '100%'}}
        />
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <Text style={[styles.assign_file, {color: '#0061BA'}]}>
            Transitor Section
          </Text>
          <View style={styles.uploaded_on_container}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 10,
                letterSpacing: 0.5,
                color: 'black',
              }}>
              Uploaded on
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#78D1DD',
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
    </View>
  );
};

export default Assignment;
