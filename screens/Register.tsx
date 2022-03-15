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
          <View
            key={i}
            style={{
              marginBottom: 15,
            }}>
            <Animatable.Text
              delay={i * 300}
              animation={'fadeIn'}
              style={{
                color: 'white',
                fontFamily: 'Poppins-Medium',
                marginBottom: 8,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: 'capitalize',
              }}>
              {user.label}
            </Animatable.Text>

            {/* Input Container */}
            <Animatable.View
              delay={i * 400}
              animation={'zoomInUp'}
              style={{
                width: '100%',
                flexDirection: 'row',
                backgroundColor: 'white',
                paddingHorizontal: 15,
                borderRadius: 19,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  // marginRight: 3,
                }}>
                {i == 0 ? (
                  <FIcon name={user.icon} color="#008092" size={user.size} />
                ) : (
                  <IonicIcon
                    name={user.icon}
                    color="#008092"
                    size={user.size}
                    style={{
                      padding: 0,
                      margin: 0,
                    }}
                  />
                )}
              </View>

              <TextInput
                style={{
                  backgroundColor: 'transparent',
                  color: 'black',
                  width: '100%',
                  letterSpacing: 0.5,
                  fontSize: 13,
                  fontFamily: 'Poppins-Regular',
                  paddingVertical: 7,
                  paddingHorizontal: 8,
                  paddingRight: 15,
                }}
                placeholder={`Enter your ${user.label.toLowerCase()} `}
                placeholderTextColor={'grey'}
              />
            </Animatable.View>
          </View>
        ))}

        <Animatable.View animation={'fadeInUp'} delay={1500}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeStack')}
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
