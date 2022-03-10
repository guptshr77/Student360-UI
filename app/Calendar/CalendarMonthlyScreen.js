import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import globalStyles from '../config/globalStyles';

export default class CalendarScreen extends Component {
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
      cdate: Moment(date).format('yyyy-MM-DD')
    });

  }
  render() {
    return (
      <View>
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
      </View>
      <View>
      {/* <Button onPress={() => {
            props.navigation.navigate('Menu');
            }}
            title="Main Menu" color="#841584"/>    */}

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
