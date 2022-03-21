//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, Button, ActivityIndicator, FlatList} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  //variables
  const {userId} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //sends URL to get all activities the user is a part of
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

    //Renders all the activities that the user is a part of 
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

      {/* //navigation */}
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
  
