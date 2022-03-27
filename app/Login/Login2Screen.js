//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import Moment from 'moment';

//Screens
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';

export default function App(props) {
  //variables
    const {username, password} = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Sends URL to check if the login info is correct
    const getLogin2 = async () => {
      try{
        console.log(enviornment.restUrl + 'login?username=' + username + '&password='+ password);
        const response = await fetch(enviornment.restUrl + 'login?username=' + username + '&password='+ password);
        const json = await response.json();
        setData(json);
        console.log(json.userId);
        // checks if login was successful. IF not sends back to Login screen with this message
        if(json.userId == '0'){
          console.log(json.userId);
          props.navigation.navigate('Login', {
            message: 'Username or Password is incorrect. Please try again.'
          })
        }
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }
    useEffect(() => {
      getLogin2();

    }, [props]);


  //If correct, displays a welcome page 
  return(

      <View style={globalStyles.container1}>
      <Text style = {globalStyles.Message}>Welcome, {data.firstName} {data.lastName}!</Text> 

      <Button
        title="Continue" 
        onPress={() => props.navigation.navigate('DailyCalendar', {
          userId: data.userId,
          date: Moment(new Date()).format('yyyy-MM-DD')
        })
          }
        /> 
      </View>
  )
}
