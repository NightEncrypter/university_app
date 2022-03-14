/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Units from './screens/Units';
import Topics from './screens/Topics';
import Profile from './screens/Profile';
import HomeStack from './Nester/HomeStack';
import Login from './screens/Login';
import Register from './screens/Register';
import DrawerStack from './Nester/DrawerStack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {DrawerContent} from './DrawerStuffs/DrawerContent';
// import A from './DrawerStuffs/A';
// import B from './DrawerStuffs/B';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Chat from './screens/Chat';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  // const Drawer = createDrawerNavigator();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function LogoTitle() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
      countContainer: {
        alignItems: 'center',
        padding: 10,
      },
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            width: '100%',
            height: '100%',
            color: 'purple',
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Poppins-Regular',
            letterSpacing: 1.2,
          }}>
          Logo
        </Text>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <View style={{flex: 1}}> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
              name="DrawerStack"
              component={DrawerStack}
              options={{headerShown: false}}
            /> */}

          <Stack.Screen
            name="Units"
            component={Units}
            options={{
              header: props => {
                return (
                  <View
                    style={{
                      backgroundColor: '#F4F4FC',
                    }}>
                    <View
                      style={{
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.goBack();
                        }}
                        style={{
                          backgroundColor: '#00B1C9',
                          width: 45,
                          height: 45,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 50,
                        }}>
                        <Icon
                          name="corner-up-left"
                          size={28}
                          style={{
                            fontFamily: 'Poppins-Medium',
                            color: 'white',
                          }}
                        />
                      </TouchableOpacity>

                      <View
                        style={{
                          paddingHorizontal: 30,
                          paddingVertical: 6,
                          backgroundColor: 'white',

                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 25,
                          // shadowColor: '#009BB0',
                          elevation: 4,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: 17,
                            color: '#000',
                            textTransform: 'uppercase',
                            letterSpacing: 0.8,
                          }}>
                          Units
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 50,
                        }}>
                        <MatIcon
                          name="bell"
                          size={28}
                          style={{
                            color: '#00B1C9',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Stack.Screen
            name="Topics"
            component={Topics}
            options={{
              header: props => {
                return (
                  <View
                    style={{
                      backgroundColor: '#F4F4FC',
                    }}>
                    <View
                      style={{
                        paddingHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.goBack();
                        }}
                        style={{
                          backgroundColor: '#00B1C9',
                          width: 45,
                          height: 45,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 50,
                        }}>
                        <Icon
                          name="corner-up-left"
                          size={28}
                          style={{
                            fontFamily: 'Poppins-Medium',
                            color: 'white',
                          }}
                        />
                      </TouchableOpacity>

                      <View
                        style={{
                          paddingHorizontal: 30,
                          paddingVertical: 6,
                          backgroundColor: 'white',

                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 25,
                          // shadowColor: '#009BB0',
                          elevation: 4,
                        }}>
                        <Text
                          style={{
                            fontFamily: 'Poppins-Bold',
                            fontSize: 17,
                            color: '#000',
                            textTransform: 'uppercase',
                            letterSpacing: 0.8,
                          }}>
                          Topic
                        </Text>
                      </View>

                      <TouchableOpacity
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 50,
                        }}>
                        <MatIcon
                          name="bell"
                          size={28}
                          style={{
                            color: '#00B1C9',
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Reg"
            component={Register}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </View> */}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: 'yellow',
  },
  highlight: {
    fontWeight: '700',
  },
  tab_container: {
    padding: 18,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 4,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default App;
