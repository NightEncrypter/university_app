import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  // const navigation = useNavigation<any>();

  return (
    <View style={{marginTop: 8}}>
      <View style={styles.search_container}>
        <TextInput
          style={styles.search_input}
          placeholderTextColor={'grey'}
          placeholder={'Search your things...'}
        />
        <TouchableOpacity
          style={{
            justifyContent: 'center',
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
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    borderRadius: 19,
  },
  search_input: {
    backgroundColor: 'transparent',
    color: 'black',
    paddingVertical: 6,
    width: '93%',
    letterSpacing: 1,
    fontSize: 13,

    fontFamily: 'Poppins-Regular',
  },
});
