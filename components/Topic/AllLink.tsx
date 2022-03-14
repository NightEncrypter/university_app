import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

import FeatherIcon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

const AllLink = ({i}: any) => {
  const styles = StyleSheet.create({
    uploaded_on_container: {
      marginTop: -3,
      fontSize: 9,
      fontFamily: 'Poppins-Medium',
      letterSpacing: 0.2,
      flexDirection: 'row',
      color: 'black',
    },

    pdf_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',

      fontSize: 14,
    },
    pdf_file_name: {
      fontSize: 13,
      fontFamily: 'Poppins-Medium',
      letterSpacing: 0.2,
      color: '#A33131',
    },

    pdf: {
      backgroundColor: 'white',
      marginVertical: 9,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 7,
      width: '100%',

      elevation: 0.5,
      borderRadius: 25,
    },
  });
  return (
    <View style={styles.pdf}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FeatherIcon
          name="link"
          size={20}
          style={{color: '#05CACA', marginRight: 12, height: '100%'}}
        />
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <Text style={[styles.pdf_file_name, {color: '#05CACA'}]}>
            Transitor Section
          </Text>
          <View style={styles.uploaded_on_container}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                letterSpacing: 0.5,
                fontSize: 10,
                color: 'black',
              }}>
              Uploaded on
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                color: '#59C8D7',
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

export default AllLink;
