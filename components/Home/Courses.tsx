import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Card from './Card';

const Courses = () => {
  return (
    <View style={{paddingHorizontal: 30, marginBottom: 100}}>
      {/* COURSE HEAD  */}

      {/* Subjects */}
      <View style={styles.box_container}>
        {['VLSI', 'MATERIAL SCIENCE', 'COMPUTER NETWORK', 'COMPUTER'].map(
          (course, i) => (
            <Card key={i} course={course} index={i} />
          ),
        )}
      </View>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  head: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    color: '#34D5EB',
  },
  box_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  complete: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 12,
    letterSpacing: 0.3,
    // marginBottom: 2,
  },
});
