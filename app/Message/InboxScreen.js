//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image} from 'react-native';
import Moment from 'moment';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
  //variables
  const {userId}= props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Sends URL to get all the messages that the user Recieved
  const MessagesRecievedScreen = async () => {
      try{
        const response = await fetch(enviornment.restUrl + 'getMessage?user_id='+ userId);
        const json = await response.json();
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

      //renders all the messages that the user received
    return (
      <View style={globalStyles.container2}>

        <View style={{ flex: .1, flexDirection: "row" }}>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center"}}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Menu', {
              userId: userId
              })}
            >
              <Image
                style={globalStyles.menuImage}
                source={require('../assets/menu.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: .9, flexDirection: "column", left: 50}}>
            <Text style={globalStyles.title}>Inbox</Text>
          </View>

        </View>

        <View style={{ flex: .8, flexDirection: "row", justifyContent:"center"}}>		
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor = {({ msgId }, index) => msgId}
              renderItem = {({item}) => (
                <View style={{ paddingLeft:5 }}>

                  <View style={globalStyles.MessageFormat}>
                    <Text style={globalStyles.H3}>From: </Text>
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
                  <Text>............................................................................................</Text>
               
                </View>
            )}
          />
        )}
  
        </View>
      
        <View style={{ flex: .1, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
          <TouchableOpacity
            style={globalStyles.button} 
            onPress={() => props.navigation.navigate('MessageSend'
              ,{
                userId1: userId 
              }
            )}
          >
            <Text style={globalStyles.buttonFontGrey}>Compose</Text>
          </TouchableOpacity>
              <Text>   </Text>
          <TouchableOpacity
            style={globalStyles.button}
            onPress={() => props.navigation.navigate('ViewSentMessages'
              ,{
                userId: userId 
              }
            )}
          >
            <Text style={globalStyles.buttonFontGrey}>Sent Messages</Text>
          </TouchableOpacity>                               
      
      </View>

    </View>
      );
    }
  
    //StyleSheet
    const styles = StyleSheet.create({
      enter: {
        fontSize: 5
      }
    });
