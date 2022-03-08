import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import { FlatList } from 'react-native-web';
import Colors from '../config/Colors';
//import { RNNDrawer } from "react-native-navigation-drawer-extension";

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
    <SafeAreaView>

      <View>
        <View
          style={styles.header}>
        <Image 
            source={require('../assets/student360.png')} 
            style={styles.logo}
          />
        </View>
        <View
          style={styles.header}>
          <Text style={styles.topLabel}>{firstName} {lastName}</Text>  
        </View>
      </View>


      <View style={styles.container}>
        <Text style = {styles.title}>Daily Calendar</Text>

        <Text style={styles.text}>Classes:</Text>
        <FlatList
            data={data.classes}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
              <div>
                <Text>{`\n`}</Text>
                <Text>
                  {`\t`}{item.classname},{item.roomnum}, {item.startTime}, {item.endTime}
                </Text>
              </div> 
              
            )}
          />
          
          <Text style = {styles.text}>Events:</Text>
          <FlatList
            data={data.events}
            keyExtractor = {({ event_id }, index) => event_id}
            renderItem = {({item}) => (
              <div>
              <Text>{`\n`}</Text>
              <Text>
                {`\t`}{item.dateTime},{item.title}, {item.description}
              </Text>

              </div>
            )}
          />

          <Text style = {styles.text}>Extracurricular Activities</Text>
          <FlatList
            data={data.extracurriculars}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
              <div>
              <Text>{`\n`}</Text>
              <Text>
              {`\t`}{item.title},{item.descr}, {item.teacher_id}, {item.location}, {item.startTime},{item.endTime},{item.date}
              </Text>

              </div>
                        )}
          />

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.c4,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontSize: 20,
  },
  button: {
    backgroundColor: AppColors.c3,
    color: AppColors.c2
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold'
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