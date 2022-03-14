import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import React, {Fragment} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
const Card = ({course, index}: any) => {
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();

  return (
    <Fragment>
      {isFocused && (
        <Animatable.View
          animation={'bounceInUp'}
          style={{width: '100%', height: 230, marginBottom: 20}}
          delay={350 * index}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => console.log('hey')}>
            <View style={styles.img_container}>
              <Image
                source={require('../../assets/img/books.jpg')}
                style={styles.main_img}
              />
            </View>

            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={styles.subject_container}>
                <Text style={styles.subject}>{course}</Text>
              </View>
            </View>

            <View style={{marginTop: -12}}>
              <Text style={styles.complete}>
                80% <Text>Complete</Text>
              </Text>

              <View style={styles.process_container_middle}>
                <View style={styles.process_container}>
                  <View style={styles.process}></View>
                </View>
              </View>

              <TouchableOpacity
                style={styles.review_btn}
                onPress={() => navigation.navigate('Units')}>
                <Text style={styles.review_btn_text}>Review Course</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </Fragment>
  );
};

export default Card;

const styles = StyleSheet.create({
  box: {
    borderRadius: 24,
    // width: 165,
    width: '100%',
    height: 230,
    backgroundColor: '#fff',
    // shadowColor: '#34D5EB',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 1.5,
    marginBottom: 20,
    padding: 10,
  },
  main_img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 19,
  },
  img_container: {width: '100%', height: 125},

  subject: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    fontSize: 12,
    color: '#00B2CA',
    letterSpacing: 1,
  },
  subject_container: {
    // paddingVertical: 2,
    // marginTop: 5,
    paddingHorizontal: 10,
    // marginBottom: 5,
    backgroundColor: 'white',
    transform: [{translateY: -20}, {translateX: 15}],
    elevation: 1,
    // width: 150,
    // minwidth: '50%',
    height: 33,
    justifyContent: 'center',
    borderRadius: 13,
  },
  process_container: {
    border: 1,
    borderColor: '#111',
    height: 4.8,
    borderRadius: 20,
    width: '100%',
    backgroundColor: 'white',
    // marginBottom: 2,
    // shadowColor: '#34D5EB',
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,

    elevation: 4,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  process: {
    width: '80%',
    backgroundColor: '#47A347',
    borderRadius: 20,
    height: '100%',
  },
  review_btn: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#00B1C9',
    borderRadius: 15,
    paddingVertical: 4,
  },
  review_btn_text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  complete: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 12,
    letterSpacing: 0.3,
    // marginBottom: 2,
  },
  process_container_middle: {
    flexDirection: 'row',
    width: '70%',
    // maxWidth: 115,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
