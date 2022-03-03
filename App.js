import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import LoginScreen from './app/Login/LoginScreen';
import Login2Screen from './app/Login/Login2Screen';
import LunchMenuScreen from './app/LunchMenu/LunchMenuScreen';
import CalendarDailyScreen from './app/Calendar/CalendarDailyScreen';
import ECActivitiesScreen from './app/Extracurricular/ECActivitiesScreen';
import MessagesRecievedScreen from './app/Message/MessagesRecievedScreen';
import MessageSendScreen from './app/Message/MessageSendScreen';
import ScheduleEditingScreen from './app/Schedule/ScheduleEditingScreen';
import ECActivitiesAddScreen from './app/Extracurricular/ECActivitiesAddScreen';
import CalendarMonthlyScreen from './app/Calendar/CalendarMonthlyScreen'
import ViewMessageSentScreen from './app/Message/ViewMessageSentScreen';
import SendMessageLoadingScreen from './app/Message/SendMessageLoadScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Login2" component={Login2Screen}/>
        <Stack.Screen name = "LunchMenu" component={LunchMenuScreen}/>
        <Stack.Screen name = "DailyCalendar" component={CalendarDailyScreen}/>
        <Stack.Screen name = "ECActivities" component={ECActivitiesScreen}/>
        <Stack.Screen name = "MessagesRecieved" component={MessagesRecievedScreen}/>
        <Stack.Screen name = "MessageSend" component={MessageSendScreen}/>
        <Stack.Screen name = "ScheduleEditing" component={ScheduleEditingScreen}/>
        <Stack.Screen name = "AddActivity" component={ECActivitiesAddScreen}/>
        <Stack.Screen name = "MonthlyCalendar" component={CalendarMonthlyScreen}/>
        <Stack.Screen name = "ViewSentMessages" component={ViewMessageSentScreen}/>
        <Stack.Screen name = "SendMessage" component={SendMessageLoadingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}