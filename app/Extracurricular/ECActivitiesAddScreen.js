import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';

export default function App({route, navigation}) {
    const {userId, firstName, lastName} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getAllActivities = async () => {
        try{
          const response = await fetch('http://localhost:8080/getallactivities');
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
        getAllActivities();
      }, []);

    return (
        <View style={styles.container}>
          <Text>Activity Add Screen</Text>
      
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
                <Text>
                {item.actId}, {item.title}
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
  
