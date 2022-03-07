import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { FlatList } from 'react-native-web';

//Screens
import AppColors from '../config/Colors';

export default function App({route, navigation}) {
    const {userId, firstName, lastName} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCalendarDailyScreen = async () => {
      try{
        console.log('http://localhost:8080/calendar?userid=' + userId);
        const response = await fetch('http://localhost:8080/calendar?userid=' + userId);
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
      <Text>Daily Calendar</Text>

      <FlatList
          data={data.classes}
          keyExtractor = {({ classId }, index) => classId}
          renderItem = {({item}) => (
            <Text>
              {item.classId}, {item.classname},{item.roomnum}, {item.startTime}, {item.endTime}
            </Text>
          )}
        />

        <FlatList
          data={data.events}
          keyExtractor = {({ event_id }, index) => event_id}
          renderItem = {({item}) => (
            <Text>
              {item.event_id}, {item.dates},{item.title}, {item.descr}, {}
            </Text>
          )}
        />

        <FlatList
          data={data.extracurriculars}
          keyExtractor = {({ act_id }, index) => act_id}
          renderItem = {({item}) => (
            <Text>
              {item.act_id}, {item.title},{item.descr}, {item.teacher_id}, {item.elocation}, {item.time_start},{item.time_end},{item.edate}
            </Text>
          )}
        />

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
