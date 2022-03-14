import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App({route, navigation}) {
  const {userId, recipient_id, subject, msg_content} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); 

  const getMessageSendScreen = async () => {
    try{
      console.log(encodeURI(enviornment.restUrl + 'sendMessage?user_id=' + userId + '&recipient_id='+ recipient_id + '&subject=' + subject + '&msg_content=' + msg_content));
      const response = await fetch(encodeURI(enviornment.restUrl + 'sendMessage?user_id=' + userId + '&recipient_id='+ recipient_id + '&subject=' + subject + '&msg_content=' + msg_content));
      // const json = await response.json();
      // console.log(json);
      // setData(json);
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getMessageSendScreen();
  }, []);


    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.Message}>Message Sent</Text>
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
            padding: 15, 
          },
    });    
  
