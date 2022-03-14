import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

import IconSvg from '../components/mixed/IconSvg';
// import { TouchableOpacity } from 'react-native-gesture-handler';
const Register = () => {
  const userData = [
    {label: 'username', icon: 'user-alt', size: 16},
    {label: 'email', icon: 'mail', size: 20},
    {label: 'password', icon: 'md-key', size: 20},
    {label: 'confirm password', icon: 'md-key', size: 20},
  ];
  const navigation = useNavigation<any>();
  const changeText = (e: any) => {
    console.log(e.target.name);
  };
  return (
    <LinearGradient
      colors={['#00AFC7', '#014048']}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#002C32',
      }}>
      <StatusBar hidden={true} />

      <Animatable.View
        animation={'zoomInUp'}
        // duration={300}
        style={{width: '100%'}}>
        <IconSvg styles={{width: '100%', marginBottom: 5}} height={60} />
      </Animatable.View>

      <Animatable.Text
        delay={200}
        animation={'fadeInUp'}
        style={{
          fontSize: 25,
          fontFamily: 'Poppins-Medium',
          fontWeight: '600',
          color: 'white',
          textTransform: 'uppercase',
          letterSpacing: 0.8,
          textAlign: 'center',
        }}>
        SIGN UP
      </Animatable.Text>

      <View style={{marginHorizontal: 40}}>
        {userData.map((user, i) => (
          <Animatable.View
            animation={'bounce'}
            delay={i * 700}
            duration={200}
            style={{
              marginBottom: 15,
            }}
            key={i}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Medium',
                marginBottom: 8,
                letterSpacing: 1.2,
                textTransform: 'capitalize',
                fontSize: 13,
              }}>
              {user.label}
            </Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 20,
                borderRadius: 19,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  // marginRight: 6,
                }}>
                {i == 0 ? (
                  <FIcon name={user.icon} color="#008092" size={user.size} />
                ) : (
                  <IonicIcon
                    name={user.icon}
                    color="#008092"
                    size={user.size}
                  />
                )}
              </View>

              <TextInput
                onChange={changeText}
                style={{
                  backgroundColor: 'transparent',
                  paddingVertical: 7,
                  width: '100%',
                  letterSpacing: 0.5,
                  fontSize: 13,
                  color: 'black',
                  fontFamily: 'Poppins-Regular',
                  marginLeft: 5,
                  paddingRight: 18,
                }}
                placeholder={`Enter your ${user.label.toLowerCase()} `}
                placeholderTextColor={'grey'}
              />
            </View>
          </Animatable.View>
        ))}

        <Animatable.View animation={'fadeInUp'} delay={2400}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              marginTop: 15,
              backgroundColor: '#008092',
              paddingVertical: 8,
              borderRadius: 19,
              elevation: 5,
              shadowColor: '#0090A4',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 15,
                fontFamily: 'Poppins-Medium',
                textTransform: 'uppercase',
                letterSpacing: 1.5,
              }}>
              Sign UP
            </Text>
          </TouchableOpacity>
        </Animatable.View>

        <View
          style={{
            marginTop: 14,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Regular',
              fontSize: 13,
              letterSpacing: 0.8,
            }}>
            Already'have an Account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                marginLeft: 8,
                color: '#05CACA',
                fontFamily: 'Poppins-Medium',
                letterSpacing: 0.8,
                fontSize: 13,
                textTransform: 'uppercase',
              }}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Register;

const styles = StyleSheet.create({});
