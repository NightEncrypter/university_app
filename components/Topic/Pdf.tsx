import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

import FeatherIcon from 'react-native-vector-icons/Feather';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
const Pdf = ({i}: any) => {
  const navigation = useNavigation<any>();

  const styles = StyleSheet.create({
    uploaded_on_container: {
      marginTop: -3,
      fontSize: 9,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 0.2,
      flexDirection: 'row',
    },
    pdf_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',
      // paddingTop: 2,
      // lineHeight: 1,
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
    <Animatable.View
      animation={'flipInX'}
      delay={300 * i}
      style={styles.pdf}
      key={i}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntIcon
          name="file-pdf"
          size={20}
          style={{color: '#FF4343', marginRight: 12, height: '100%'}}
        />
        <View
          style={{
            justifyContent: 'space-around',
          }}>
          <Text style={styles.pdf_file_name}>Transitor Section</Text>
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
                color: '#D68989',
                marginLeft: 7,
                fontSize: 10,
              }}>
              12/01/2020
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Downloads')}>
        <FeatherIcon name="download" size={20} style={{color: '#2989E1'}} />
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default Pdf;
