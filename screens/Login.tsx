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
import {useNavigation, useIsFocused} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import IconSvg from '../components/mixed/IconSvg';
import * as Animatable from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';

const Login = () => {
  const navigation = useNavigation<any>();
  const focused = useIsFocused();
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
        {focused && (
          <Animatable.View
            animation={'zoomInUp'}
            style={{width: '100%', marginTop: -80}}>
            <IconSvg styles={{width: '100%', marginBottom: 10}} height={100} />
          </Animatable.View>
        )}

        {focused && (
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
            SIGN IN
          </Animatable.Text>
        )}

        {/* <Image source={require('../assets/img/uni.svg')} /> */}

        <View style={{marginHorizontal: 40}}>
          {userData.map((user, i) => (
            <View
              // animation={i*800}

              key={i}
              style={{
                marginBottom: 15,
              }}>
              {focused && (
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
              )}

              {/* Input Container */}
              {focused && (
                <Animatable.View
                  delay={i * 400}
                  animation={'zoomIn'}
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
                      <FIcon
                        name={user.icon}
                        color="#008092"
                        size={user.size}
                      />
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
              )}
            </View>
          ))}

          {focused && (
            <Animatable.View delay={800} animation={'fadeInUp'}>
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
          )}

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
