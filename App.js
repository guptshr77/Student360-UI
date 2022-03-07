import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Login
import LoginScreen from './app/Login/LoginScreen';
import Login2Screen from './app/Login/Login2Screen';

//LunchMenu
import LunchMenuScreen from './app/LunchMenu/LunchMenuScreen';

//Calendar
import CalendarDailyScreen from './app/Calendar/CalendarDailyScreen';
import CalendarMonthlyScreen from './app/Calendar/CalendarMonthlyScreen'

//Schedule
import GetAllClasses from './app/Schedule/getAllClassesScreen';
import AddClass from './app/Schedule/addClassScreen';
import GetSchedule from './app/Schedule/getScheduleScreen';

//Extracurricular Activities
import ECActivitiesScreen from './app/Extracurricular/ECActivitiesScreen';
import GetAllEC from './app/Extracurricular/GetAllEC';
import AddActivity from './app/Extracurricular/AddActivityLoad';

//Messages
import MessagesRecievedScreen from './app/Message/MessagesRecievedScreen';
import MessageSendScreen from './app/Message/MessageSendScreen';
import ViewMessageSentScreen from './app/Message/ViewMessageSentScreen';
import SendMessageLoadingScreen from './app/Message/SendMessageLoadScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Login */}
        <Stack.Screen name = "Login" component={LoginScreen}/>
        <Stack.Screen name = "Login2" component={Login2Screen}/>
        
        {/* LunchMenu */}
        <Stack.Screen name = "LunchMenu" component={LunchMenuScreen}/>
        
        {/* Calendar */}
        <Stack.Screen name = "DailyCalendar" component={CalendarDailyScreen}/>
        <Stack.Screen name = "MonthlyCalendar" component={CalendarMonthlyScreen}/>
        
        {/* Extracurricular Activities */}
        <Stack.Screen name = "AddActivity" component={AddActivity}/>
        <Stack.Screen name = "ECActivities" component={ECActivitiesScreen}/>
        <Stack.Screen name = "GetAllEC" component={GetAllEC}/>
        
        {/* Messages */}
        <Stack.Screen name = "MessageSend" component={MessageSendScreen}/>
        <Stack.Screen name = "MessagesRecieved" component={MessagesRecievedScreen}/>
        <Stack.Screen name = "SendMessage" component={SendMessageLoadingScreen}/>
        <Stack.Screen name = "ViewSentMessages" component={ViewMessageSentScreen}/>

        {/* Schedule */}
        <Stack.Screen name = "GetSchedule" component={GetSchedule}/>
        <Stack.Screen name = "GetAllClasses" component={GetAllClasses}/>        
        <Stack.Screen name = "AddClass" component={AddClass}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}