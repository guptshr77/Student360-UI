import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
// import { FlatList } from 'react-native-web';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App({route, navigation}) {
  const {userId}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let x = false

  const ViewMessageSentScreen = async () => {
      try{
        const response = await fetch(enviornment.restUrl+ 'getSentMessages?user_id=' + userId);
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
        <View style={[globalStyles.container]}>
          <Text style={styles.title}>Past Sent Messages:</Text>

          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ msgId }, index) => msgId}
            renderItem = {({item}) => (
              <View>
                <Text>{item.msgId}</Text>
                <Text>{item.firstname}</Text>
                <Text>{item.lastname}</Text>
                <Text>{item.subject}</Text>
                <Text>{item.msg_content}</Text>
                <Text>{item.msg_date}</Text>
              </View>
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
      text: {
        fontSize: 20,
        textAlign: 'left',
        textDecorationLine: 'underline',
        alignSelf: 'baseline',
        color: Colors.c1
      },
      title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: Colors.c1
      },
    });
