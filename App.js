import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
   <SafeAreaView style={styles.header}>
      <View style={{
        flex: .01,
        flexDirection: "row",
      }}>

        <View style={{
          background: "dodgerblue",
          width: "10%",
          height: 100,
          justifyContent: "center",
          alignItems: "center"
        }}>
            <Image source={require("./app/assets/student360.png")} style={{width: 100, height: 100}}/>
        </View>
        <View style={{
          background: "gold",
          flexGrow: 1,
          height: 100,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Text>hh: {global.usersName}</Text>
        </View>
        <View style={{
          background: "orange",
          width: "20%",
          height: 100,
        }}>
        </View>
      </View>
      <View style={{
        flex: .8,
        flexDirection: "row",
        justifyContent: "top"                
      }}>

    <NavigationContainer>
        <Stack.Navigator>
          {/* Login */}
          <Stack.Screen name = "Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "Login2" component={Login2Screen} options={{ headerShown: false }}/>
          
          {/* LunchMenu */}
          <Stack.Screen name = "LunchMenu" component={LunchMenuScreen} options={{ headerShown: false }}/>
          
          {/* Calendar */}
          <Stack.Screen name = "DailyCalendar" component={CalendarDailyScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "MonthlyCalendar" component={CalendarMonthlyScreen} options={{ headerShown: false }}/>
          
          {/* Extracurricular Activities */}
          <Stack.Screen name = "AddActivity" component={AddActivity} options={{ headerShown: false }}/>
          <Stack.Screen name = "ECActivities" component={ECActivitiesScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "GetAllEC" component={GetAllEC} options={{ headerShown: false }}/>
          
          {/* Messages */}
          <Stack.Screen name = "MessageSend" component={MessageSendScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "MessagesRecieved" component={MessagesRecievedScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "SendMessage" component={SendMessageLoadingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "ViewSentMessages" component={ViewMessageSentScreen} options={{ headerShown: false }}/>

          {/* Schedule */}
          <Stack.Screen name = "GetSchedule" component={GetSchedule} options={{ headerShown: false }}/>
          <Stack.Screen name = "GetAllClasses" component={GetAllClasses} options={{ headerShown: false }}/>        
          <Stack.Screen name = "AddClass" component={AddClass} options={{ headerShown: false }}/>
          
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  header: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }  
});