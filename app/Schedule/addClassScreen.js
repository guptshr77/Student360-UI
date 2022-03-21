//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
    //variables
    const {userId, classId} = props.route.params;
    const [isLoading, setLoading] = useState(true);

    //sends URL to add a class to the user's schedule
    const AddClass = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'addschedule?user_id=' + userId + '&class_id=' + classId);
          console.log(response);
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
        }
      }

      useEffect(() => {
        AddClass();
      }, [props]);

    //renders Confirmation Message
    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.Message}>Class Added</Text>
      <Button
        title="Schedule Home" 
        onPress={() => props.navigation.navigate('GetSchedule', {
          userId: userId
        }) }
      />           
        </View>
      );
}
  
