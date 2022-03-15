import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Unit from '../components/Units/Unit';
import {useSelector} from 'react-redux';
import {initialStateTypes} from '../redux/reducers/universityReducer';
const Units = ({navigation}: any) => {
  const university_data = useSelector((state: any) => state.universityReducer);
  useEffect(() => {
    console.log(university_data);
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
      {/*Units Container */}
      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 45,
        }}>
        {/* UNIT */}

        {[1, 2, 3, 4, 5].map((unit, i) => (
          <Unit key={i} i={i} unit={unit} activeAnimation={activeAnimation} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Units;
