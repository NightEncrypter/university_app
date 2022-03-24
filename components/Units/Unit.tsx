import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import UnitTopics from './UnitTopics';
import LinearGradient from 'react-native-linear-gradient';
import {TopicObject, UnitObject} from '../../redux/type';
//
const Unit = ({
  unit,
  i,
  activeAnimation,
}: {
  i: number;
  unit: UnitObject;
  activeAnimation: boolean;
}) => {
  const styles = StyleSheet.create({
    unit_no: {
      fontFamily: 'Poppins-Bold',
      fontSize: 13,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
    unit: {
      paddingHorizontal: 30,
      paddingVertical: 9,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 25,
      shadowColor: '#2CE6FF',
    },
    unit_content: {
      fontFamily: 'Poppins-Regular',
      fontSize: 10,
      color: 'black',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },

    unit_container: {
      padding: 18,
      backgroundColor: 'white',
      width: '100%',
      marginTop: 18,
      borderRadius: 25,
      shadowColor: '#2CE6FF',
    },
  });

  const [fadder, setFadder] = useState({
    animatableFadder: new Animated.Value(0),
    displayValue: new Animated.Value(0),
  });
  const AnimationRef = useRef(null);
  const [active, setActive] = useState(false);
  const navigation = useNavigation<any>();

  const openUnitBox = () => {
    setActive(prev => !prev);
    // if (AnimationRef.current) {

    //   // AnimationRef.current?.bounce();
    // }

    Animated.timing(fadder.animatableFadder, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animatable.View
      animation={activeAnimation ? 'bounceOutLeft' : 'bounceIn'}
      delay={activeAnimation ? 300 * i : 300 * i}
      style={{marginBottom: 25}}>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={['#00D2EE', '#007B8B']}
        style={[
          styles.unit,
          {
            backgroundColor: '#007888',
          },
          // {
          //   backgroundColor:
          //     i < 2
          //       ? i == 0
          //         ? '#FF4343'
          //         : '#05CACA'
          //       : i < 4
          //       ? i == 3
          //         ? '#BB57EA'
          //         : '#0076E3'
          //       : '#2CE6FF',
          // },
        ]}>
        <Text style={styles.unit_no}>Unit-{unit.unit_no}</Text>
        <TouchableOpacity onPress={openUnitBox}>
          {/* <Animatable.Text
            ref={AnimationRef}
            transition={'backgroundColor'}
            easing="ease-in-cubic"
            style={{transform: [{scale: 1.2}]}}> */}
          <Icon
            size={24}
            name={active ? 'minus-circle' : 'chevron-down'}
            color={'white'}
          />
          {/* </Animatable.Text> */}
        </TouchableOpacity>
      </LinearGradient>

      <Animated.View
        style={[
          styles.unit_container,
          {
            display: active ? 'flex' : 'none',
            opacity: fadder.animatableFadder,
          },
        ]}>
        <View style={{marginBottom: 10}}>
          <Text
            style={{
              fontSize: 17,

              color:
                i < 2
                  ? i == 0
                    ? '#FF4343'
                    : '#05CACA'
                  : i < 4
                  ? i == 3
                    ? '#BB57EA'
                    : '#0076E3'
                  : '#2CE6FF',

              fontFamily: 'Poppins-Bold',
              textAlign: 'center',
            }}>
            {unit.name}
          </Text>
        </View>

        {unit.topics.map((topic: TopicObject, i: number) => (
          <UnitTopics key={i} topic={topic} />
        ))}
      </Animated.View>
    </Animatable.View>
  );
};

export default Unit;
