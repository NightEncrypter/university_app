import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Tabs = () => {
  const tabIcons = ['document', 'chatbubbles', 'home', 'download', 'settings'];
  //   const navigation = useNavigation<any>();
  const styles = StyleSheet.create({
    tab_container: {
      padding: 18,
      borderRadius: 30,
      backgroundColor: 'white',
      elevation: 4,
      marginHorizontal: 10,
      marginBottom: 10,
    },
  });
  return (
    <View style={styles.tab_container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {tabIcons.map((icon, i) => (
          <TouchableOpacity
            // onPress={() => navigation.navigate('Topics')}
            key={i}
            style={{transform: i == 2 ? [{translateY: -20}] : []}}>
            <Icon
              size={28}
              name={icon}
              style={{
                color: i == 2 ? 'white' : '#00454F',
                marginRight: 8,

                transform: i == 2 ? [{scale: 1.5}] : [{scale: 1}],
                backgroundColor: i == 2 ? 'aqua' : 'transparent',
                width: i == 2 ? 60 : 'auto',
                height: i == 2 ? 60 : 'auto',
                borderRadius: i == 2 ? 50 : 0,
                padding: i == 2 ? 15.5 : 0,

                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Tabs;
