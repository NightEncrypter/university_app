import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';
import Feather from 'react-native-vector-icons/Feather';

const CalendarItem = () => {
  //   const todayDate = new Date().toISOString().split('T')[0];
  //   console.log(todayDate);
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#F4F4FC',
      }}>
      <View style={{marginVertical: 20}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
            color: '#00B1C9',
          }}>
          Calendar
        </Text>
      </View>
      {/* <Calendar
        // markedDates={{
        //   //   '2022-03-14': {selected: true, marked: true, selectedColor: 'blue'},
        //   [todayDate]: {selected: true, selectedColor: '#00DDFB'},
        //   '2022-03-20': {
        //     // marked: true,
        //     selected: true,
        //     selectedColor: 'purple',
        //     // color: 'black',

        //     customStyles: {
        //       container: {
        //         borderColor: 'purple',
        //         borderWidth: 2,
        //         // backgroundColor: 'purple',
        //       },
        //     },
        //   },

        //   //   '2022-03-20': {textColor: 'green'},
        //   '2022-03-27': {startingDay: true, color: 'green'},
        //   '2022-03-29': {
        //     selected: true,
        //     endingDay: true,
        //     color: 'green',
        //     textColor: 'gray',
        //   },
        //   '2022-03-04': {
        //     disabled: true,
        //     startingDay: true,
        //     color: 'green',
        //     endingDay: true,
        //   },

        //   '2022-03-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        //   '2022-03-19': {disabled: true, disableTouchEvent: true},
        // }}
        // style={{
        //   borderRadius: 20,
        // }}

        style={{
          backgroundColor: 'white',
          borderRadius: 20,
        }}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        // markingType={'period'}
        // markedDates={{
        //   '2022-03-20': {textColor: 'green'},
        //   '2022-03-22': {
        //     startingDay: true,
        //     color: '#00DDFB',
        //     selected: true,
        //   },
        //   '2022-03-24': {
        //     selected: true,
        //     endingDay: true,
        //     color: '#00DDFB',
        //     // textColor: 'gray',
        //   },
        //   '2022-04-04': {
        //     disabled: true,
        //     startingDay: true,
        //     color: 'green',
        //     endingDay: true,
        //   },
        //       }}
        markingType={'period'}
        markedDates={{
          '2022-03-15': {marked: true, dotColor: '#50cebb'},
          '2022-03-16': {marked: true, dotColor: '#50cebb'},
          '2022-03-21': {
            startingDay: true,
            color: '#50cebb',
            textColor: 'white',
          },
          '2022-03-22': {color: '#70d7c7', textColor: 'white'},
          '2022-03-23': {
            color: '#70d7c7',
            textColor: 'white',
            marked: true,
            dotColor: 'white',
          },
          '2022-03-24': {color: '#70d7c7', textColor: 'white'},
          '2022-03-25': {endingDay: true, color: '#50cebb', textColor: 'white'},
              }}

        // dayComponent={({date, state}: any) => {
        //   return (
        //     <View>
        //       <Text
        //         style={{
        //           textAlign: 'center',
        //           color: state === 'disabled' ? 'gray' : 'black',
        //         }}>
        //         {date.day}
        //       </Text>
        //     </View>
        //   );
        // }}
      /> */}

      <Agenda
        testID="menu"
        calendarStyle={{
          borderRadius: 20,
        }}
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={{
          '2022-03-13': [
            {name: 'item 1 - any js object', height: 80, day: 'sunday'},
          ],
          '2022-03-19': [
            {name: 'item 2 - any js object', height: 80, day: 'saturaday'},
          ],
          '2022-03-20': [
            {name: 'item 3 - any js object', day: '', height: 80},
            {
              name: 'any js object',
              height: 80,
              day: '',
            },
          ],
        }}
        // Callback that gets called when items for a certain month should be loaded (month became visible)
        loadItemsForMonth={month => {
          console.log('trigger items loading');
        }}
        // Callback that fires when the calendar is opened or closed
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened, 'calenderopened');
        }}
        // Callback that gets called on day press
        onDayPress={day => {
          console.log('day pressed');
        }}
        // Callback that gets called when day changes while scrolling agenda list
        onDayChange={day => {
          console.log('day changed');
        }}
        // pagingEnabled={true}
        // scrollEnabled={true}
        scrollEnabled={true}
        // Initially selected day
        selected={'2022-03-15'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-01-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Specify how each item should be rendered in agenda
        renderItem={(item, firstItemInDay) => {
          return <View />;
        }}
        // Specify how each date should be rendered. day can be undefined if the item is not first in that day
        renderDay={(day, item) => {
          return <View />;
        }}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={() => {
          return <View />;
        }}
        // Specify how agenda knob should look like
        renderKnob={() => {
          return <View />;
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return (
            <View>
              <Text>REnder empty data</Text>
            </View>
          );
        }}
        // Specify your item comparison function for increased performance
        //   rowHasChanged={(r1, r2) => {
        //     return r1.text !== r2.text;
        //   }}
        // Hide knob button. Default = false
        // hideKnob={true}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        horizontal={true}
        showClosingKnob={true}
        // By default, agenda dates are marked if they have at least one item, but you can override this if needed
        markedDates={{
          '2022-03-30': {selected: true, marked: true},
          '2022-03-29': {marked: true},
          '2022-03-18': {selected: true, color: 'purple', dotColor: 'purple'},
        }}
        // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
        // disabledByDefault={true}
        // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
        onRefresh={() => console.log('refreshing...')}
        // Set this true while waiting for new data from a refresh
        // refreshing={false}
        // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
        //   refreshControl={null}
        // Agenda theme
        // renderArrow={direction => }
        hideArrows={false}
        hideExtraDays={false}
        // renderHeader={date => {
        //   return (
        //     <View>
        //       <Text>{date.}</Text>
        //     </View>
        //   );
        // }}
        // Enable the option to swipe between months. Default = false
        // enableSwipeMonths={true}
        theme={
          {
            // ...calendarTheme,
            //   backgroundColor: '#ffffff',
            //   calendarBackground: '#ffffff',
            //   textSectionTitleColor: '#b6c1cd',
            //   textSectionTitleDisabledColor: '#d9e1e8',
            //   selectedDayBackgroundColor: '#00adf5',
            //   selectedDayTextColor: '#ffffff',
            //   todayTextColor: '#00adf5',
            //   dayTextColor: '#2d4150',
            //   textDisabledColor: '#d9e1e8',
            //   dotColor: '#00adf5',
            //   selectedDotColor: '#ffffff',
            //   arrowColor: 'orange',
            //   disabledArrowColor: '#d9e1e8',
            //   monthTextColor: 'blue',
            //   indicatorColor: 'blue',
            //   textDayFontFamily: 'monospace',
            //   textMonthFontFamily: 'monospace',
            //   textDayHeaderFontFamily: 'monospace',
            //   textDayFontWeight: '300',
            //   textMonthFontWeight: 'bold',
            //   textDayHeaderFontWeight: '300',
            //   textDayFontSize: 16,
            //   textMonthFontSize: 16,
            //   textDayHeaderFontSize: 16,
            //   agendaDayTextColor: 'yellow',
            //   agendaDayNumColor: 'green',
            //   agendaTodayColor: 'red',
            //   agendaKnobColor: 'blue',
          }
        }
        // Agenda container style
        style={{}}
      />
    </View>
  );
};

export default CalendarItem;

const styles = StyleSheet.create({});

// <CalendarList
// markedDates={{
//   '2022-03-16': {selected: true, marked: true, selectedColor: 'blue'},
//   '2022-03-17': {marked: true},
//   '2022-03-18': {marked: true, dotColor: 'red', activeOpacity: 0},
//   '2022-03-19': {disabled: true, disableTouchEvent: true},
// }}
// horizontal={true}
// // Initially visible month. Default = now
// current={'2022-03-14'}
// // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
// minDate={'2020-03-10'}
// // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
// maxDate={'2025-05-30'}
// // Handler which gets executed on day press. Default = undefined
// onDayPress={day => {
//   console.log('selected day', day);
// }}
// // Handler which gets executed on day long press. Default = undefined
// onDayLongPress={day => {
//   console.log('selected day', day);
// }}
// // hideExtraDays={false}
// // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
// // monthFormat={'yyyy MM'}
// // Handler which gets executed when visible month changes in calendar. Default = undefined
// // onMonthChange={month => {
// //   console.log('month changed', month);
// // }}
// // Hide month navigation arrows. Default = false
// // hideArrows={true}
// // Replace default arrows with custom ones (direction can be 'left' or 'right')
// renderArrow={direction => (
//   <Feather name="arrow-left" size={20} color={'green'} />
// )}
// // Do not show days of other months in month page. Default = false
// // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
// // day from another month that is visible in calendar page. Default = false
// // disableMonthChange={true}
// // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
// // firstDay={1}
// // Hide day names. Default = false
// // hideDayNames={true}
// // Show week numbers to the left. Default = false
// // showWeekNumbers={true}
// // Handler which gets executed when press arrow icon left. It receive a callback can go back month
// // onPressArrowLeft={subtractMonth => subtractMonth()}
// // Handler which gets executed when press arrow icon right. It receive a callback can go next month
// // onPressArrowRight={addMonth => addMonth()}
// // Disable left arrow. Default = false
// // disableArrowLeft={true}
// // Disable right arrow. Default = false
// // disableArrowRight={true}
// // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
// // disableAllTouchEventsForDisabledDays={true}
// // Replace default month and year title with custom one. the function receive a date as parameter
// //   renderHeader={date => {
// //     /*Return JSX*/
// //   }}
// // Enable the option to swipe between months. Default = false
// enableSwipeMonths={true}
// />
