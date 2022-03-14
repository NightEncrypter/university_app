import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import F from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const Settings = () => {
  const focused = useIsFocused();
  const navigation = useNavigation<any>();

  const [active, setActive] = useState<string | undefined>();
  const [activeIcon, setActiveIcon] = useState<boolean>(false);
  // useEffect(() => {
  //   setActive('');
  // }, []);

  return (
    <View
      style={{
        paddingHorizontal: 22,
        backgroundColor: '#F4F4FC',
        flex: 1,
      }}>
      {[
        {label: 'my status', icon: 'eye'},
        {label: 'pending assignments', icon: 'file-text-o'},
        {label: 'total pdf submitted', icon: 'file-pdf-o'},
        {label: 'calender', icon: 'calendar'},
        {label: 'logout', icon: 'logout'},
      ].map(
        (v, i) =>
          focused && (
            <Animatable.View animation={'zoomInUp'} delay={i * 300} key={i}>
              <TouchableOpacity
                onPress={() => {
                  setActive(v.label);

                  if (v.label == 'logout') {
                    navigation.navigate('Login');
                  }
                }}
                style={{
                  backgroundColor: v.label == active ? '#00B1C9' : 'white',

                  padding: 8,
                  paddingHorizontal: 17,
                  borderRadius: 25,
                  elevation: 0.5,
                  // shadowColor: '#00606D',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: v.label == active ? 'white' : '#006C7B',

                      fontFamily: 'Poppins-Medium',
                      fontSize: 11,
                      letterSpacing: 0.8,
                      textTransform: 'capitalize',
                    }}>
                    {v.label}
                  </Text>

                  {/* {v.label == 'pending assignments' && (
              <Mat
                name={v.icon}
                size={20}
                style={{
                  marginLeft: 10,
                  color: '#00606D',
                }}
              />
            )} */}
                  {v.label == 'logout' ? (
                    <Mat
                      name={v.icon}
                      size={20}
                      style={{
                        marginLeft: 10,
                        color: v.label == active ? 'white' : '#00B1C9',
                      }}
                    />
                  ) : v.label == 'my status' ? (
                    <TouchableOpacity
                      onPress={() => setActiveIcon(prev => !prev)}>
                      <FontAwesome5Icon
                        name={activeIcon ? 'eye' : 'eye-slash'}
                        size={20}
                        style={{
                          marginLeft: 20,
                          color: v.label == active ? 'white' : '#00B1C9',
                        }}
                      />
                    </TouchableOpacity>
                  ) : (
                    <F
                      name={v.icon}
                      size={20}
                      style={{
                        marginLeft: 20,
                        color: v.label == active ? 'white' : '#00B1C9',
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </Animatable.View>
          ),
      )}
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
