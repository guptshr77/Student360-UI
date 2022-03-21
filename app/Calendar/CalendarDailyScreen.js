//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import Moment from 'moment';

//screens
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';



export default function App({route, navigation}) {
  // variables (Inputs)
    let {userId, date} = route.params;
    let [isLoading, setLoading] = useState(true);
    let [data, setData] = useState([]);

    // obtains data after sending URL
    const getCalendarDailyScreen = async () => {
      try{
        console.log(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
        let response = await fetch(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
        let json = await response.json();
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

  // renders and formats data 
  return (
      <View style={globalStyles.container2}>
        <Text style = {globalStyles.title}>Daily Calendar</Text>
        <Text>{`\n`}</Text>

        <Text style = {globalStyles.H1}>{`\t`}{`\t`}{`\t`}{`\t`}{`\t`}{Moment(date).format('MM/DD/yyyy')}</Text>
        <Text>{`\n`}</Text>
        
        {/* Classes */}
        <Text style={globalStyles.H1}>{`\t`}{`\t`}{`\t`}Classes:</Text>   
          <FlatList
            data={data.classes}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
              <View>
                <Text>{`\n`}</Text>
                <Text>{`\t`}Class: {item.classname}</Text>
                <Text>{`\t`}{`\t`}Room: {item.roomnum}</Text>
                <Text>{`\t`}{`\t`}Timing: {item.startTime} to {item.endTime}</Text>
              </View> 
              
            )}
          />
          
           {/* //Events */}
          <Text style = {globalStyles.H1}>{`\t`}{`\t`}{`\t`}Events:</Text>
          <FlatList
            data={data.events}
            keyExtractor = {({ event_id }, index) => event_id}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>{`\t`}Event: {item.title}</Text>
              <Text>{`\t`}{`\t`}Time: {item.dateTime}</Text>
              <Text>{`\t`}{`\t`}{item.description}</Text>

              </View>
            )}
          />

          {/* //Activities */}
          <Text style = {globalStyles.H1}>{`\t`}{`\t`}{`\t`}Extracurricular Activities</Text>
          <FlatList
            data={data.extracurriculars}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>{`\t`}Activity: {item.title}</Text>
              <Text>{`\t`}{`\t`}{item.descr}</Text>
              <Text>{`\t`}{`\t`}Location: {item.location}</Text>
              <Text>{`\t`}{`\t`}Timing: {Moment('2022-03-17 ' +item.startTime).format('H:mm')} to {Moment('2022-03-17 ' + item.endTime).format('H:mm')}</Text>
              </View>
            )}
          />

        <Button
          title="Main Menu" 
          onPress={() => navigation.navigate('Menu',{
            userId: userId
          })}
        /> 
      </View>
  );
}