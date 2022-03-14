import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

import React, {useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntIcon from 'react-native-vector-icons/FontAwesome5';
import Pdf from '../components/Topic/Pdf';
import Videos from '../components/Topic/Videos';
import Assignment from '../components/Topic/Assignment';
import AllLink from '../components/Topic/AllLink';

const Topic = ({navigation}: any) => {
  const styles = StyleSheet.create({
    topic_info: {
      fontFamily: 'Poppins-Medium',
      fontSize: 13,
      textAlign: 'center',
      color: '#fff',
      letterSpacing: 0.8,
    },
    pdf_head: {
      backgroundColor: '#FF4343',
      paddingVertical: 2,
      width: 110,
      paddingHorizontal: 20,
      borderRadius: 20,

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    shape: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      width: '100%',

      borderRadius: 25,
      shadowColor: '#2CE6FF',
    },
    topics: {
      paddingHorizontal: 30,
      paddingVertical: 6,
      backgroundColor: 'white',
      width: 150,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
      elevation: 4,
    },

    pdf_text: {
      color: 'white',
      fontFamily: 'Poppins-Medium',

      fontSize: 14,
    },
  });
  return (
    <ScrollView
      horizontal={false}
      style={{backgroundColor: '#F4F4FC', flex: 1}}>
      {/* <StatusBar hidden={false} /> */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 5,
        }}>
        {/* <View style={styles.topics}>
          <Text style={styles.topic_text}>TOPICS</Text>
        </View> */}
      </View>

      <View style={{paddingHorizontal: 18}}>
        <View
          style={[
            styles.shape,
            {
              backgroundColor: '#05CACA',
            },
          ]}>
          <Text style={styles.topic_info}>Introduction To VLSI</Text>
        </View>
        {/* PDFS */}
        <View style={{marginVertical: 25}}>
          <View style={styles.pdf_head}>
            <Text style={styles.pdf_text}>PDFS</Text>
            <AntIcon name="file-pdf" size={17} style={{color: 'white'}} />
          </View>

          <View style={{marginTop: 15}}>
            {[1, 2, 3].map((pdf, i) => (
              <Pdf key={i} i={i} />
            ))}
          </View>
        </View>

        {/* Videos */}
        <View style={{marginBottom: 25}}>
          <View
            style={[
              styles.pdf_head,
              {
                backgroundColor: '#650393',
                minWidth: 126,
              },
            ]}>
            <Text style={styles.pdf_text}>VIDEOS</Text>
            <FeatherIcon name="video" size={17} style={{color: 'white'}} />
          </View>

          <View style={{marginTop: 15}}>
            {[1, 2, 3].map((video, i) => (
              <Videos key={i} i={i} />
            ))}
          </View>
        </View>

        {/*Assignments */}
        <View style={{marginBottom: 25}}>
          <View
            style={[
              styles.pdf_head,
              {
                backgroundColor: '#0061BA',
                minWidth: 180,
              },
            ]}>
            <Text style={styles.pdf_text}>ASSIGNMENTS</Text>
            <FeatherIcon name="file-text" size={17} style={{color: 'white'}} />
          </View>

          <View style={{marginTop: 15}}>
            {[1, 2, 3].map((pdf, i) => (
              <Assignment key={i} i={i} />
            ))}
          </View>
        </View>

        {/* LINKS */}
        <View style={{marginBottom: 25}}>
          <View
            style={[
              styles.pdf_head,
              {
                backgroundColor: '#05CACA',
                minWidth: 115,
              },
            ]}>
            <Text style={styles.pdf_text}>LINKS</Text>
            <FeatherIcon name="link" size={17} style={{color: 'white'}} />
          </View>

          <View style={{marginTop: 15}}>
            {[1, 2, 3].map((pdf, i) => (
              <AllLink key={i} i={i} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Topic;
