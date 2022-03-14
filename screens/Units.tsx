import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import Unit from '../components/Units/Unit';

const Units = ({navigation}: any) => {
  useEffect(() => {
    return () => {
      setActiveAnimation(false);
    };
  }, []);
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [active, setActive] = useState<boolean>(false);
  const styles = StyleSheet.create({
    unit_no: {
      fontFamily: 'Poppins-Bold',
      fontSize: 13,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
    unit: {
      paddingHorizontal: 30,
      paddingVertical: 9,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 25,
      shadowColor: '#2CE6FF',
      // marginVertical: 15,
    },
    unit_content: {
      fontFamily: 'Poppins-Regular',
      fontSize: 10,
      color: 'black',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },

    unit_container: {
      padding: 18,
      backgroundColor: 'white',
      width: '100%',
      marginTop: 18,
      borderRadius: 25,
      shadowColor: '#2CE6FF',
    },
  });

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
          // flex: 1,
          // justifyContent: 'center',
          // alignItems: 'center',
          // flex: 1,
          // height: '100%',
          // alignItems: 'center',
          // justifyContent: 'space-between',
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
