import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';


export default function App({route, navigation}) {
  const {userId, firstName, lastName}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
 
  const getAllClasses = async () => {
    try{
      const response = await fetch('http://localhost:8080/getallclasses');
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
    getAllClasses();
  }, []);

    return (
        <View style={styles.container}>
          <Text>Schedule Editing Screen</Text>

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
