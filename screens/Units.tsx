import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Unit from '../components/Units/Unit';
import {useDispatch, useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import Assets from '../assets/index';

import {useNavigation} from '@react-navigation/native';
import {getAllUnits} from '../redux/actions/unitsAction';
import {RootState} from '../store/store';
import {UnitObject} from '../redux/type';
const Units = ({route}: any) => {
  const dispatch = useDispatch();
  const {unitData, loading} = useSelector((state: RootState) => state.units);

  useEffect(() => {
    console.log(unitData, 'in unit screen');

    dispatch(getAllUnits(route.params.subject));

    return () => {
      setActiveAnimation(false);
    };
  }, []);

  const [activeAnimation, setActiveAnimation] = useState(false);

  return (
    <ScrollView
      horizontal={false}
      style={{
        backgroundColor: '#F4F4FC',
        flex: 1,
        // justifyContent: 'center',
      }}>
      {/* <View>
        <Text
          style={{
            fontSize: 35,
            color: 'blue',
          }}>
          {route.params.subject}
        </Text>
      </View> */}
      {/*Units Container */}
      {!loading ? (
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: 45,
          }}>
          {/* UNIT */}

          {unitData.map((unit: UnitObject, i: number) => (
            <Unit key={i} i={i} unit={unit} activeAnimation={activeAnimation} />
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
    </ScrollView>
  );
};

export default Units;
