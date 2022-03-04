import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';

import Colors from '../config/Colors';

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
          <Text>Activity Screen</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ actId }, index) => actId}
          renderItem = {({item}) => ( 
            <div>

              <Text style={styles.dayTitle}>{item.title}</Text>

              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}Location: {item.location}</Text>


              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}Description: {item.descr}</Text>


              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}{`\t`}Date: {item.date}</Text>


              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}{`\t`}Time: {item.startTime} - {item.endTime}</Text>

              <Text>{`\n`}</Text>
            </div>
          )}
        />
      )}

      <Button
        title="Add Activity" 
        onPress={() => navigation.navigate('GetAllEC',{
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
  
