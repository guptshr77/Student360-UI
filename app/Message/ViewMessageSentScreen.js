import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App({route, navigation}) {
  const {userId, firstName, lastName}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let x = false

  const ViewMessageSentScreen = async () => {
      try{
        const response = await fetch('http://localhost:8080/getSentMessages?user_id=' + userId);
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
      ViewMessageSentScreen();
    }, []);

    return (
        <View style={styles.container}>
          <Text>View Message Sent Screen</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ msgId }, index) => msgId}
            renderItem = {({item}) => (
                <Text>
                  {item.msgId},
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
