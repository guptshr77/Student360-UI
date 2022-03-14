import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import Moment from 'moment';
import globalStyles from '../config/globalStyles';

//Screens
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
    const {username, password} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getLogin2 = async () => {
      try{
        console.log(enviornment.restUrl + 'login?username=' + username + '&password='+ password);
        const response = await fetch(enviornment.restUrl + 'login?username=' + username + '&password='+ password);
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
      getLogin2();
    }, []);

  return (
    <View style={globalStyles.container1}>
      <Text style = {globalStyles.Message}>Welcome, {data.firstName} {data.lastName}!</Text> 

      <Button
        title="Continue" 
        onPress={() => navigation.navigate('DailyCalendar', {
          userId: data.userId,
          date: Moment(new Date()).format('yyyy-MM-DD')
        })
      }
      /> 
    </View>
  );
}
