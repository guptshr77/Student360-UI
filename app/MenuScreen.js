//libraries
import React from "react";
import {Text, View, Button} from 'react-native';

//Screens
import globalStyles from './config/globalStyles';

export default function App({route, navigation}){
    //Variables
    const {userId} = route.params;

    //renders a menu for navigation
    return (
        <View style={globalStyles.container3}>
          <Text style={globalStyles.title}>Main Menu</Text>
          <Button
          title="Schedule" 
          onPress={() => navigation.navigate('GetSchedule', {
            userId: userId
          })}
        /> 

        <Button
          title="Extracurricular" 
          onPress={() => navigation.navigate('ECActivities', {
              userId: userId
          })}
        /> 
        <Button
          title="Monthly Calendar" 
          onPress={() => navigation.navigate('MonthlyCalendar', {
            userId: userId
          })}
        /> 

        <Button
          title="Lunch Menu" 
          onPress={() => navigation.navigate('LunchMenu',{
            userId: userId
          })}
        /> 
        <Button
        title="Messages Inbox"
        onPress={() => navigation.navigate('InboxScreen',{
          userId: userId
        })}
        /> 

        </View>
    )
}