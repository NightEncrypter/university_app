import {StyleSheet, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import Courses from '../components/Home/Courses';
import Courses_btns from './Courses_btns';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  return (
    <SafeAreaView
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        },
      ]}>
      {/* <StatusBar hidden={true} /> */}
      <ScrollView style={styles.main_container}>
        <Courses_btns />
        <Courses />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#F4F4FC',
    // flex: 1,
    fontFamily: 'Poppins-Regular',
    // marginBottom: 30,
  },
});
