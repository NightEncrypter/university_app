import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TopicObject} from '../../redux/type';

const UnitTopics = ({topic}: {topic: TopicObject}) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    console.log(topic);
  }, []);

  return (
    <View style={{marginBottom: 1}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Topics', {
            topic: topic.id,
          })
        }>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Poppins-Regular',
            letterSpacing: 0.5,
          }}>
          {topic.id}
          {topic.topic_name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UnitTopics;
