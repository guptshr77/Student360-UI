import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';

export default function App({route, navigation}) {
  const {userId, firstName, lastName} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getUserActivities = async () => {
    try{
      const response = await fetch('http://localhost:8080/getuseractivity?userid='+ userId);
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
    getUserActivities();
  }, []);


    return (
        <View style={styles.container}>
          <Text>
            {userId},{firstName},{lastName}

          </Text>
          <Text>Activity Screen</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ act_id }, index) => act_id}
          renderItem = {({item}) => (
            <Text>
              {item.actId}, {item.title},{item.location}, {item.descr}, {item.startTime}, {item.endTime}, {item.date}
            </Text>
          )}
        />
      )}

      <Button
        title="Add Activity" 
        onPress={() => navigation.navigate('AddActivity',{
          userId: userId,
          firstName: firstName,
          lastName: lastName
        })}
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
  
