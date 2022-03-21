//libraries
import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';

//screens
import globalStyles from '../config/globalStyles';

//Monthly Calendar Class 
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

  //When user clicks a new date returns the date selected and the userId
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
  //returns the date selected 
  render() {
    return (
      <View style={globalStyles.container2}>
        <Text style={globalStyles.title}>Monthly Calendar</Text>
        <Text>{`\n`}</Text>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />

       <Button
         title="Go Back" 
         onPress={() => this.props.navigation.goBack()}
       />
      </View>
    );
  }
}
