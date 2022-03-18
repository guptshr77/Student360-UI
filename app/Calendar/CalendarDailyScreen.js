import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, FlatList} from 'react-native';
// import { FlatList, View } from 'react-native-web';
import Colors from '../config/Colors';
import { useIsFocused } from "@react-navigation/native";
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';
import Moment from 'moment';

//Screens
import AppColors from '../config/Colors';

export default function App({route, navigation}) {
    let {userId, date} = route.params;
    let [isLoading, setLoading] = useState(true);
    let [data, setData] = useState([]);

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

  return (
      <View style={globalStyles.container2}>
        <Text style = {globalStyles.title}>Daily Calendar</Text>
        <Text>{`\n`}</Text>

        <Text style = {globalStyles.H1}>{`\t`}{`\t`}{`\t`}{`\t`}{`\t`}{Moment(date).format('MM/DD/yyyy')}</Text>
        <Text>{`\n`}</Text>
        
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
              <Text>{`\t`}{`\t`}Timing: {item.startTime} - {item.endTime}</Text>
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