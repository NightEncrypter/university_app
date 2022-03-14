import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';
const Courses_btns = () => {
  const courses = [, 'Courses', 'Recent', 'Favourite'];

  const [active_btn, setActive_btn] = useState<string | undefined>('Courses');

  return (
    <View style={styles.courses_btn_container}>
      <ScrollView horizontal style={{}} showsHorizontalScrollIndicator={false}>
        {courses.map((c, i) => (
          // <Animatable.View
          //   key={i}
          //   delay={i * 250}
          //   // animation={'fadeIn'}
          // >
          <TouchableOpacity
            style={[
              styles.btn,
              {
                backgroundColor: c == active_btn ? '#00B1C9' : 'white',
              },
            ]}
            onPress={() => setActive_btn(c)}>
            <Text
              style={[
                styles.btn_text,
                {
                  color: c == active_btn ? 'white' : '#00B1C9',
                },
              ]}>
              {c}
            </Text>
          </TouchableOpacity>
          // </Animatable.View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Courses_btns;

const styles = StyleSheet.create({
  courses_btn_container: {
    marginTop: 18,
    marginBottom: 18,
    paddingLeft: 15,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 18,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 1,
  },
  btn_text: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 12.5,
    letterSpacing: 0.8,
  },
});
