//libraries
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { StyleSheet, View, SafeAreaView, Image, Platform} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

  //navigation
  import Menu from './app/MenuScreen';

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
  import InboxScreen from './app/Message/InboxScreen';
  import ComposeScreen from './app/Message/ComposeScreen';
  import SentScreen from './app/Message/SentScreen';
  import SendMessageLoadingScreen from './app/Message/MessageConfirmationScreen';

  const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <SafeAreaView style={styles.header}>
      <View style={{
        flex: .1,
        flexDirection: "row",
      }}>

        <View style={{
          background: "gold",
          flexGrow: 1,
          height: 100,
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Image 
            source={require("./app/assets/Student360_idea1.png")} 
            style={{
              width: 200, 
              height: 50,
              resizeMode: 'contain'
            }}
          />
        </View>
      </View>
      <View style={{
        flex: .9,
        flexDirection: "row",
        justifyContent: "top"                
      }}>

    <NavigationContainer>
        <Stack.Navigator>
          {/* Login */}
          <Stack.Screen name = "Login" component={LoginScreen} options={{ headerShown: false }} initialParams={{ message: '' }}/>          
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
          <Stack.Screen name = "MessageSend" component={ComposeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "InboxScreen" component={InboxScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "SendMessage" component={SendMessageLoadingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name = "ViewSentMessages" component={SentScreen} options={{ headerShown: false }}/>

          {/* Schedule */}
          <Stack.Screen name = "GetSchedule" component={GetSchedule} options={{ headerShown: false }}/>
          <Stack.Screen name = "GetAllClasses" component={GetAllClasses} options={{ headerShown: false }}/>        
          <Stack.Screen name = "AddClass" component={AddClass} options={{ headerShown: false }}/>
          
          {/* Menu*/}
          <Stack.Screen name = "Menu" component={Menu} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? 20 : 0
  }  
});