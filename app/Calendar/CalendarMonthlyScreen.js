//libraries
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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

        <View style={{ flex: .2, flexDirection: "row" }}>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center"}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu', {
                userId: this.userId
              })}
            >
              <Image
                style={globalStyles.menuImage}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>

          </View>

          <View style={{ flex: .9, flexDirection: "column", top: 20, left: -10}}>
            <Text style={globalStyles.title}>Monthly Calendar</Text>
          </View>
        </View>


        <View style={{ flex: .8, flexDirection: "row", justifyContent:"center"}}>		
          <CalendarPicker
            onDateChange={this.onDateChange} 
          />
        </View>
      

      </View>
    );
  }
}
