import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Assignment from '../components/Topic/Assignment';
// import * as Animatable from 'react-native-animatable';
const Assign = () => {
  const navigation = useNavigation<any>();
  const [activeModal, setActiveModal] = useState<boolean>(false);
  // const [fadder, setFadder] = useState({
  //   animatableFadder: new Animated.Value(0),
  //   displayValue: new Animated.Value(0),
  //   translateY: new Animated.Value(500),
  // });
  const translateRef = useRef({
    animatableFadder: new Animated.Value(0),
    displayValue: new Animated.Value(0),
    translateY: new Animated.Value(800),
    //  backgroundGray: new Animated.Value('white'),
  });
  const openUnitBox = () => {
    // setActiveModal(prev => !prev);
    setActiveModal(true);
    Animated.timing(translateRef.current.animatableFadder, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const closeUnitBox = () => {
    setTimeout(() => setActiveModal(false), 400);

    Animated.timing(translateRef.current.animatableFadder, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F4F4FC',
        // paddingHorizontal: 2,

        // backgroundColor: backgroundGray,
        // width: 500,
        // height: 500,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
      }}>
      <View style={{marginVertical: 30}}>
        <View>
          <Text
            style={{
              color: 'aqua',
              fontFamily: 'Poppins-Medium',
              fontSize: 20,
            }}>
            Assignment Uploaded
          </Text>
        </View>

        <View>
          {[1, 2, 3, 4].map((v, i) => (
            <Assignment key={i} />
          ))}
        </View>

        <TouchableOpacity
          onPress={openUnitBox}
          style={{
            backgroundColor: 'purple',
            paddingVertical: 5,
          }}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Active Modal
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,

          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          alignSelf: 'center',
          // marginHorizontal: 15,
          // marginHorizontal: 'auto',
          backgroundColor: 'grey',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          // paddingHorizontal: activeModal ? 5 : 0,

          display: activeModal ? 'flex' : 'none',
          // transform: [{translateY: translateRef.current.translateY}],
        }}>
        <Animated.View
          style={{
            padding: 20,
            width: '95%',

            borderRadius: 20,
            elevation: 3,
            opacity: translateRef.current.animatableFadder,

            // height: '100%',
            backgroundColor: 'white',
          }}>
          <Text
            style={{color: 'blue', fontFamily: 'Poppins-Medium', fontSize: 25}}>
            Assignment Upload
          </Text>
          <Text style={{color: 'black'}}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
            veniam fugit quidem quam quas, tempora neque vel explicabo eveniet
            recusandae ipsa consectetur consequatur provident delectus beatae
            eligendi possimus ex?
          </Text>
          <View>
            <TextInput />
          </View>
          <TouchableOpacity
            onPress={closeUnitBox}
            style={{
              backgroundColor: 'red',
              paddingVertical: 5,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              DeActive Modal
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default Assign;

const styles = StyleSheet.create({});
