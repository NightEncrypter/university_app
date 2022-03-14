import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const UnitTopics = ({topic}: any) => {
  const navigation = useNavigation<any>();

  return (
    <View style={{marginBottom: 1}}>
      <TouchableOpacity onPress={() => navigation.navigate('Topics')}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            letterSpacing: 0.5,
          }}>
          {topic} Vlsi Introduction
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnitTopics;
