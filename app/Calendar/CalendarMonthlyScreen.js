import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default class CalendarScreen extends Component {
  userId = '';
  constructor(props) {
    super(props);
    const {userId} = props.route.params;
    console.log(userId);
    this.userId = userId
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
      date: Moment(date).format('yyyy-MM-DD'),
      userId: this.userId
    });

  }
  render() {
    return (
      <View style={globalStyles.container2}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}
