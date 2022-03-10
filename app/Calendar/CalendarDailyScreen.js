import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import { FlatList } from 'react-native-web';
import Colors from '../config/Colors';
import { useIsFocused } from "@react-navigation/native";
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';
//import { RNNDrawer } from "react-native-navigation-drawer-extension";

//Screens
import AppColors from '../config/Colors';

export default function App({route, navigation}) {
    const {userId, firstName, lastName} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCalendarDailyScreen = async () => {
      try{
        const response = await fetch(enviornment.restUrl + 'calendar?userid=' + userId );
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }
    useEffect(() => {
      getCalendarDailyScreen();
    }, []);

  return (
      <View style={styles.container}>
        <Text style = {styles.title}>Daily Calendar</Text>
    
        {/* <Text style={styles.text}>Classes:</Text>   
          <FlatList
            data={data.classes}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
              <View>
                <Text>{`\n`}</Text>
                <Text>
                  {`\t`}{item.classname},{item.roomnum}, {item.startTime}, {item.endTime}
                </Text>
              </View> 
              
            )}
          /> */}
          
          {/* <Text style = {styles.text}>Events:</Text>
          <FlatList
            data={data.events}
            keyExtractor = {({ event_id }, index) => event_id}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>
                {`\t`}{item.dateTime},{item.title}, {item.description}
              </Text>

              </View>
            )}
          /> */}

          {/* <Text style = {styles.text}>Extracurricular Activities</Text>
          <FlatList
            data={data.extracurriculars}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>
              {`\t`}{item.title},{item.descr}, {item.teacher_id}, {item.location}, {item.startTime},{item.endTime},{item.date}
              </Text>

              </View>
            )}
          /> */}

          {/* //https://reactnativeexample.com/react-native-navigation-drawer-extension/ */}
        <Button
          title="Extracurricular" 
          onPress={() => navigation.navigate('ECActivities', {
              userId: userId,
              firstName: firstName,
              lastName: lastName
          })}
        /> 
        <Button
          title="Monthly Calendar" 
          onPress={() => navigation.navigate('MonthlyCalendar', {
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 

        <Button
          title="Lunch Menu" 
          onPress={() => navigation.navigate('LunchMenu',{
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 

        <Button
          title="Schedule" 
          onPress={() => navigation.navigate('GetSchedule', {
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 
        <Button
        title="Messages"
        onPress={() => navigation.navigate('MessagesRecieved',{
          userId: userId,
          firstName: firstName,
          lastName: lastName
        })}
        /> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.c5,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontSize: 20,
    textAlign: 'left'
  },
  button: {
    backgroundColor: AppColors.c3,
    color: AppColors.c2
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  topLabel: {
    textAlign: 'right',
    fontSize: 20
  },
  header: {
    backgroundColor: Colors.white,
    width: "100%",
    height: "10%",
  },
  logo: {
    width: 50,
    height: "100%"
  }
});