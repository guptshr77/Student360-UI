import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default class CalendarScreen extends Component {
  // const {userId, firstName, lastName} = route.params;
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
    console.log(Moment(date).format('yyyy-MM-DD'));
    this.props.navigation.navigate('DailyCalendar', {
      date: Moment(date).format('yyyy-MM-DD')
    });

  }
  render() {
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.c5,
    marginTop: 100,
  },
});
