import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
// import { FlatList } from 'react-native-web';
import Colors from '../config/Colors.js';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  const {userId}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getSchedule = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'getschedule?user_id=' + userId);
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
        <View style={globalStyles.container2}>
          <Text style={globalStyles.title}>Schedule:</Text>
          <Text>{`\n`}</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (

              <View>

              <Text>{`\n`}</Text>
              <Text style={globalStyles.H1}>{`\t`}Class:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.classname}</Text>
              <Text style={globalStyles.H1}>{`\t`}Room:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.roomnum}</Text>
              <Text style={globalStyles.H1}>{`\t`}Timing:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.startTime} to {item.endTime}</Text>
              <Text>{`\n`}</Text>
              </View>
                
            )}
            />
        )}
      <Button
        title="Add Class" 
        onPress={() => navigation.navigate('GetAllClasses', {
          userId: userId
        }) }
      />
      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      />                     
        </View>
      );
    }