import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

//Screens
import AppColors from './config/AppColors';

export default function App({route, navigation}) {
    const {username, password} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getLogin2 = async () => {
      try{
        console.log('http://localhost:8080/login?username=' + username + '&password='+ password);
        const response = await fetch('http://localhost:8080/login?username=' + username + '&password='+ password);
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
    <View style={styles.container}>
      <Text>Calendar</Text>  
      {/*<Text>{data.userid}</Text>*/}
      <Button
        title="DailyCalendar" 
        onPress={() => navigation.navigate('DailyCalendar')}
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
