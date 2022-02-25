import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App({route, navigation}) {
  const {userId, firstName, lastName}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let x = false

  const getAllActivities = async () => {
      try{
        const response = await fetch('http://localhost:8080/getMessage?user_id'+ userid);
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
          <Text>Message Screen</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ msg_id }, index) => msg_id}
            renderItem = {({item}) => (
                <Text>
                  {item.msg_id},
                  {item.firstname},
                  {item.lastname},
                  {item.subject},
                  {item.msg_content},
                  {item.msg_date}
                </Text>
            )}
            />
        )}
      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      /> 
      <Button
        title="SendMessage" 
        onPress={() => navigation.navigate('MessageSend'
        ,{
           userid: userid 
        }
        )}
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
