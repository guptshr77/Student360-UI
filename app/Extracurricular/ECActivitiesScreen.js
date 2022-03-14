import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
import globalStyles from '../config/globalStyles';
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  const {userId} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getUserActivities = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'getuseractivity?userid='+ userId);
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
        <View style={globalStyles.container2}>
          <Text style={globalStyles.title}>Activity Screen</Text>
          <Text>{`\n`}</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ actId }, index) => actId}
          renderItem = {({item}) => ( 
            <View>

              <Text style={globalStyles.H1}>{item.title}</Text>

              <Text>{`\n`}</Text>
              <Text style={globalStyles.H2}>{`\t`}Description:</Text>
              <Text style = {globalStyles.content}>{`\t`}{`\t`}{item.descr}</Text>

              <Text>{`\n`}</Text>
            </View>
          )}
        />
      )}

      <Button
        title="Add Activity" 
        onPress={() => navigation.navigate('GetAllEC',{
          userId: userId
        })}
      />
      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      />           
        </View>
      );
}
  
