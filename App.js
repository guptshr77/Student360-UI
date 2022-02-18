import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Screens
import LoginScreen from './app/LoginScreen';
import Login2Screen from './app/Login2Screen';
import LunchMenuScreen from './app/LunchMenuScreen';
import CalendarDailyScreen from './app/CalendarDailyScreen';
import ECActivitiesScreen from './app/ECActivitiesScreen';
import MessagesScreen from './app/MessagesScreen';
import MessageSendScreen from './app/MessageSendScreen';
import ScheduleEditingScreen from './app/ScheduleEditingScreen';


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
        <Stack.Screen name = "Messages" component={MessagesScreen}/>
        <Stack.Screen name = "MessageSend" component={MessageSendScreen}/>
        <Stack.Screen name = "ScheduleEditing" component={ScheduleEditingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
