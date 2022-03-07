import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';
import Colors from '../config/Colors.js';

export default function App({route, navigation}) {
  const {userId, firstName, lastName}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getSchedule = async () => {
    try{
      const response = await fetch('http://localhost:8080/getschedule?user_id=' + userId);
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
    getSchedule();
  }, []);

    return (
        <View style={styles.container}>
          <Text style={styles.title}>{firstName}'s Schedule:</Text>
          <Text>{`\n`}</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
                <Text>
                {item.classId}, {item.classname},{item.roomnum}, {item.startTime}, {item.endTime}
                </Text>
            )}
            />
        )}
      <Button
        title="Add Class" 
        onPress={() => navigation.navigate('GetAllClasses', {
          userId: userId,
          firstName: firstName,
          lastName: lastName
        }) }
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
      headTitle:{
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