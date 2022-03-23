//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';

//screens
import Colors from '../config/Colors.js';
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';

export default function App({route, navigation}) {
  //variables
    const {userId} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //sends URL to get all activities offered that the user can choose from 
    const getAllActivities = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'getallactivities');
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

      //renders all the activity names with a ADD button that the user can click to add it 
    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.title}>Activity Add Screen</Text>
          <Text>{`\n`}</Text>
          
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ actId }, index) => actId}
            renderItem = {({item}) => (
              <View>

              <Text style={globalStyles.H2}>{item.title}</Text>

              <Button
                title="Add"
                onPress={() => navigation.navigate('AddActivity', {
                  userId: userId,
                  actId: item.actId
                })}
              />
            </View>

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
