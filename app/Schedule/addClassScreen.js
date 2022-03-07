import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Colors from '../config/Colors.js';

export default function App({route, navigation}) {
    const {userId, firstName, lastName, classId} = route.params;
    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState("");

    const AddClass = async () => {
        try{
          const response = await fetch('http://localhost:8080/addschedule?user_id=' + userId + '&class_id=' + classId);
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
        AddClass();
      }, []);

    return (
        <View style={styles.container}>
      <Button
        title="Schedule Home" 
        onPress={() => navigation.navigate('GetSchedule', {
          userId: userId,
          firstName: firstName,
          lastName: lastName
        }) }
      />           
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.c5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.c1
  },
  subTitles:{
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.c1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.c1,
    textDecorationLine: 'underline'
  },
  items: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black
  }
});
  
