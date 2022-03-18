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

  const SentScreen = async () => {
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
      SentScreen();
    }, []);

    return (
        <View style={[globalStyles.container2]}>
          <Text style={globalStyles.title}>Past Sent Messages:</Text>
          <Text>{`\n`}</Text>
          
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ msgId }, index) => msgId}
            renderItem = {({item}) => (
              <View>
                <View style={globalStyles.MessageFormat}>
                  <Text style={globalStyles.H2}>From: </Text>
                  <Text style={styles.content}>{item.user.firstName} {item.user.lastName}</Text>
                </View>

                <View style={globalStyles.MessageFormat}>
                  <Text style={globalStyles.H2}>Subject: </Text>
                  <Text style={styles.content}>{item.subject}</Text>
                </View>

                  <Text style={globalStyles.H2}>Message:</Text>
                  <Text style={styles.content}>{`\t`}{item.msgContent}</Text>
                  
                  <Text style={styles.enter}>{`\n`}</Text>
                  <Text>{item.datetime} </Text>
                  <Text>...........................................................................................</Text>
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
      content:{
        fontSize: 20,
        color: Colors.black
      },
      enter: {
        fontSize: 5
      }
    });
