//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, Button} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  //variables
    const {userId, actId} = route.params;
    const [isLoading, setLoading] = useState(true);

    //call url to add the activity 
    const AddActivity = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'addactivity?userid=' + userId +'&act_id='+ actId);
          console.log(response);
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
        }
      }

      useEffect(() => {
        AddActivity();
      }, []);
      
    //Confirmation message
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
  
