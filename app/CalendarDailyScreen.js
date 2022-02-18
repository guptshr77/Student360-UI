import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


//Screens
import AppColors from './config/AppColors';
import LunchMenu from './LunchMenuScreen';
import ECActivities from './ECActivitiesScreen';
import Messages from './MessagesScreen';
import ScheduleEditing from './ScheduleEditingScreen';


export default function App({route, navigation}) {
    // const {userid, firstname, lastname} = route.params;
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

  return (
    <View style={styles.container}>
      <Text>Calendar Daily</Text>  
      {/* <Text>{data.userid}</Text> */}
        <Button
        title="Lunch Menu" 
        onPress={() => navigation.navigate('LunchMenu')}
      />
      <Button
        title="Activities" 
        onPress={() => navigation.navigate('ECActivities')}
      />
      <Button
        title="Edit Schedule" 
        onPress={() => navigation.navigate('ScheduleEditing')}
      />
      <Button
        title="Messages" 
        onPress={() => navigation.navigate('Messages')}
      />
      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      />         
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});