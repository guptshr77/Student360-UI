import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
// import { FlatList } from 'react-native-web';
import globalStyles from '../config/globalStyles';
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  const {userId}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let x = false

  const MessagesRecievedScreen = async () => {
      try{
        const response = await fetch(enviornment.restUrl + 'getMessage?user_id='+ userId);
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
      MessagesRecievedScreen();
    }, []);

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Message Screen</Text>

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
          userId1: userId 
        }
        )}
      />
      <Button
        title="Sent" 
        onPress={() => navigation.navigate('ViewSentMessages'
        ,{
           userId: userId 
        }
        )}
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
      },
      dayTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.c1
      },
      subTitles:{
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.c1,
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.c1,
        textDecorationLine: 'underline'
      },
      items: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.black
      }
    });
