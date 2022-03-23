//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
import Moment from 'moment';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App({route, navigation}) {
  //variables
  const {userId}= route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Sends URL to View past messages that were sent
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

    //Renders the messages that the user sent in the past
    return (
        <View style={[globalStyles.container2]}>
          <Text style={globalStyles.title}>Past Sent Messages:</Text>
          <Text>{`\n`}</Text>
          
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ msgId }, index) => msgId}
            renderItem = {({item}) => (
              <View style={{ paddingLeft:5 }}>
                <View style={globalStyles.MessageFormat}>
                  <Text style={globalStyles.H3}>To: </Text>
                  <Text style={globalStyles.content2}>{item.user.firstName} {item.user.lastName}</Text>
                </View>

                <View style={globalStyles.MessageFormat}>
                  <Text style={globalStyles.H3}>Subject: </Text>
                  <Text style={globalStyles.content2}>{item.subject}</Text>
                </View>

                <Text style={globalStyles.H3}>Message:</Text>
                <Text style={globalStyles.content2}>{item.msgContent}</Text>
                
                <Text style={styles.enter}>{`\n`}</Text>
                <Text>{Moment(item.datetime).format('MM/DD/yyyy')}</Text>
                <Text>.....................................................................................................</Text>
              </View>

            )}
            />
        )}
      <Button
        title="Compose" 
        onPress={() => navigation.navigate('MessageSend'
        ,{
           userId: userId 
        }
        )}
      />           
      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      /> 
        </View>
      );
    }
  
    //StyleSheet
    const styles = StyleSheet.create({
      content:{
        fontSize: 20,
        color: Colors.black
      },
      enter: {
        fontSize: 5
      }
    });
