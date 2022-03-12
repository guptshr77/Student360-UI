import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, FlatList} from 'react-native';
// import { FlatList, View } from 'react-native-web';
import Colors from '../config/Colors';
import { useIsFocused } from "@react-navigation/native";
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';

//Screens
import AppColors from '../config/Colors';

export default function App({route, navigation}) {
    const {userId, date} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getCalendarDailyScreen = async () => {
      try{
        console.log(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
        const response = await fetch(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
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
    
        <Text style={styles.text}>{`\t`}{`\t`}{`\t`}Classes:</Text>   
          <FlatList
            data={data.classes}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
              <View>
                <Text>{`\n`}</Text>
                <Text>{`\t`}{item.classname}</Text>
                <Text>{`\t`}{`\t`}{item.roomnum}</Text>
                <Text>{`\t`}{`\t`}{item.startTime} to {item.endTime}</Text>
              </View> 
              
            )}
          />
          
          <Text style = {styles.text}>{`\t`}{`\t`}{`\t`}Events:</Text>
          <FlatList
            data={data.events}
            keyExtractor = {({ event_id }, index) => event_id}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>{`\t`}{item.title}</Text>
              <Text>{`\t`}{`\t`}{item.dateTime}</Text>
              <Text>{`\t`}{`\t`}{item.description}</Text>

              </View>
            )}
          />

          <Text style = {styles.text}>{`\t`}{`\t`}{`\t`}Extracurricular Activities</Text>
          <FlatList
            data={data.extracurriculars}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
              <View>
              <Text>{`\n`}</Text>
              <Text>{`\t`}{item.title}</Text>
              <Text>{`\t`}{`\t`}{item.descr}</Text>
              <Text>{`\t`}{`\t`}{item.location}</Text>
              <Text>{`\t`}{`\t`}{item.startTime},{item.endTime}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.c5,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontSize: 20,
    textAlign: 'left',
    textDecorationLine: 'underline',
    alignSelf: 'baseline',
    color: Colors.c1
  },
  button: {
    backgroundColor: AppColors.c3,
    color: AppColors.c2
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.c1
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