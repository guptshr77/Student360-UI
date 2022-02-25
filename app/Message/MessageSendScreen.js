import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App({route, navigation}) {
  const {userid, firstname, lastname} = route.params;
  const {user_id, recipient_user_id, subject, msg_content} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getLogin2 = async () => {
    try{
      const response = await fetch('http://localhost:8080/sendMessage?user_id=' + user_id + '&recipient_user_id='+ recipient_user_id + '&subject=' + subject + '&msg_content=' + msg_contect);
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
    getLogin2();
  }, []);


    return (
        <View style={styles.container}>
          <Text>Message Send Screen</Text>
          <Text>Message Sent</Text>
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
  
