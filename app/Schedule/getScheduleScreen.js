//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
import Moment from 'moment';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';


export default function App(props) {
  //variables
  const {userId}= props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  //sends URL to get the schedule of the User
  const getSchedule = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'getschedule?user_id=' + userId);
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
    getSchedule();
  }, []);

  //renders the user's schedule
    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.title}>Schedule:</Text>
          <Text>{`\n`}</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (

              <View>

              <Text>{`\n`}</Text>
              <Text style={globalStyles.content}>{item.classname}</Text>
              <Text style={globalStyles.content2}>Room: {item.roomnum}</Text>
              <Text style={globalStyles.content2}>Timing: {Moment('2022-03-17 ' +item.startTime).format('H:mm')} to {Moment('2022-03-17 ' + item.endTime).format('H:mm')}</Text>
              </View>
                
            )}
            />
        )}
      <Button
        title="Add Class" 
        onPress={() => props.navigation.navigate('GetAllClasses', {
          userId: userId
        }) }
      />
      <Button
        title="Go Back" 
        onPress={() => props.navigation.goBack()}
      />                     
        </View>
      );
    }