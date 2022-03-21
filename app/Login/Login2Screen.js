//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import Moment from 'moment';

//Screens
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';
import { render } from 'react-dom';

export default function App({route, navigation}) {
  //variables
    const {username, password} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Sends URL to check if the login info is correct
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

  //If correct, displays a welcome page 
  // render ()
  return(
    // if (data.userId != null){
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
    // } else {
    //   <View style={globalStyles.container1}>
    //   <Text style = {globalStyles.Message}>Incorrect username or password. Please go back and try again</Text> 

    //   <Button
    //     title="Go Back" 
    //     onPress={() => navigation.goBack()}
    //   />
    // </View>
    // }
  )
}
