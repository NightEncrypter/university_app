import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={{paddingHorizontal: 20, paddingTop: 8}}>
      <View
        style={{
          // marginHorizontal
          width: '100%',
          flexDirection: 'row',
          backgroundColor: 'white',
          paddingHorizontal: 20,
          borderRadius: 19,
        }}>
        <TextInput
          style={{
            backgroundColor: 'transparent',
            // paddingTop: 5,
            color: 'black',
            paddingVertical: 6,
            width: '93%',
            letterSpacing: 1,
            fontSize: 13,

            fontFamily: 'Poppins-Regular',
          }}
          placeholderTextColor={'grey'}
          placeholder={'Search your things...'}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            // alignItems: 'center',
            marginRight: 12,
          }}>
          <Icon name="search" color="#008092" size={24} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_container: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    // marginVertical: 10,
    justifyContent: 'space-between',
    height: 44,
  },
  search_input: {
    marginTop: 15,
    borderRadius: 25,
    fontSize: 14,
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    // paddingTop: 15,
    // fontWeight: '600',
    letterSpacing: 1,
    shadowColor: '#34D5EB',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
    fontFamily: 'Poppins-Medium',
    elevation: 6,
  },

  search_btn: {
    backgroundColor: '#00D3F0',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    color: 'white',
    marginLeft: 10,
    width: 44,
    height: '100%',
    marginTop: 15,
  },
});
