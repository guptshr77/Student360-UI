import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Colors from '../config/Colors.js';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
    const {userId, actId} = route.params;
    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState("");

    const AddActivity = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'addactivity?userid=' + userId +'&act_id='+ actId);
          // const json = await response.json();
          console.log(response);
//          setData(response);
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
        }
      }

      useEffect(() => {
        AddActivity();
      }, []);

    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.Message}>Activity Added</Text>
      <Button
        title="Extracurricular Home" 
        onPress={() => navigation.navigate('ECActivities', {
          userId: userId
        }) }
      />           
        </View>
      );
}
  
