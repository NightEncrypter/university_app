import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Card from './Card';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {getAllSubjects} from '../../redux/actions/subjectActions';
import {subjectObject} from '../../redux/type';
import LottieView from 'lottie-react-native';
import Assets from '../../assets';
const Courses = () => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector((state: RootState) => state.subjects);

  useEffect(() => {
    console.log(data, 'this is my Subject data', loading);
    dispatch(getAllSubjects());

    // return () => {};
  }, []);

  return (
    <View
      style={{
        paddingHorizontal: 30,
        marginBottom: 100,
        flex: 1,
      }}>
      {/* COURSE HEAD  */}

      {/* Subjects */}

      {!loading ? (
        <View style={styles.box_container}>
          {data?.map((course: subjectObject, i: number) => (
            <Card key={i} course={course} index={i} />
          ))}
        </View>
      ) : (
        <View
          style={{
            // marginTop: 60,
            flex: 1,
            width: '100%',
            height: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            // ref={animation => {
            //   this.animation = animation;
            // }}
            style={{
              width: 70,
              height: 70,
            }}
            loop
            autoPlay
            source={Assets.lottieFiles.new}
            // colorFilters={[{keypath: 'Plane', color: 'rgb(255, 100, 0)'}]}
          />
        </View>
      )}
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
