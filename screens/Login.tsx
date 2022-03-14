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
import LinearGradient from 'react-native-linear-gradient';
import IconSvg from '../components/mixed/IconSvg';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  const navigation = useNavigation<any>();

  const userData = [
    {label: 'Email', icon: 'user-alt', size: 16},
    {label: 'password', icon: 'md-key', size: 20},
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar hidden={true} />
      <LinearGradient
        // colors={['#00606D', '#002C32']}
        // colors={['#00606D', 'black']}
        colors={['#00AFC7', '#014048']}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: '#002C32',
        }}>
        <Animatable.View
          animation={'zoomInUp'}
          style={{width: '100%', marginTop: -80}}>
          <IconSvg styles={{width: '100%', marginBottom: 10}} height={100} />
        </Animatable.View>

        <Animatable.Text
          delay={400}
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
          SIGN IN
        </Animatable.Text>

        {/* <Image source={require('../assets/img/uni.svg')} /> */}

        <View style={{marginHorizontal: 40}}>
          {userData.map((user, i) => (
            <Animatable.View
              // animation={i*800}
              duration={200}
              key={i}
              animation={'bounce'}
              delay={i * 800}
              style={{
                marginBottom: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-Medium',
                  marginBottom: 8,
                  fontSize: 13,
                  letterSpacing: 1,
                  textTransform: 'capitalize',
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
                        // backgroundColor: 'green',
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
                    marginLeft: 5,
                    fontSize: 13,
                    fontFamily: 'Poppins-Regular',
                    paddingVertical: 7,
                    paddingRight: 18,
                  }}
                  placeholder={`Enter your ${user.label.toLowerCase()} `}
                  placeholderTextColor={'grey'}
                />
              </View>
            </Animatable.View>
          ))}

          {/* <View style={{marginTop: 20}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Medium',
              marginBottom: 5,
              letterSpacing: 1.2,
            }}>
            Password
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
                marginRight: 6,
              }}>
              <IonicIcon name="md-key" color="#008092" size={20} />
            </View>

            <TextInput
              passwordRules={''}
              style={{
                backgroundColor: 'transparent',
                letterSpacing: 1,
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
                width: '100%',
              }}
            />
          </View>
        </View> */}

          <Animatable.View delay={1500} animation={'fadeInUp'}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeStack')}
              style={{
                marginTop: 15,
                backgroundColor: '#008092',
                paddingVertical: 8,
                borderRadius: 19,
                // elevation: 5,
                // shadowColor: '#0090A4',
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
                Sign in
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
              Dont'have an Account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
              <Text
                style={{
                  marginLeft: 8,
                  color: '#05CACA',
                  fontFamily: 'Poppins-Medium',
                  letterSpacing: 0.8,
                  fontSize: 13,

                  textTransform: 'uppercase',
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
