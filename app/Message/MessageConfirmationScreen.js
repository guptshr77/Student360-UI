//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App(props) {
  //variables
  const {userId, recipient_id, subject, msg_content} = props.route.params;
  const [setLoading] = useState(true);

  //Sends URL to send the message to the teacher 
  const getComposeScreen = async () => {
    try{
      console.log(encodeURI(enviornment.restUrl + 'sendMessage?user_id=' + userId + '&recipient_id='+ recipient_id + '&subject=' + subject + '&msg_content=' + msg_content));
      const response = await fetch(encodeURI(enviornment.restUrl + 'sendMessage?user_id=' + userId + '&recipient_id='+ recipient_id + '&subject=' + subject + '&msg_content=' + msg_content));
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    getComposeScreen();
  }, []);

  //Confirmation message
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

          <View style={{ flex: .9, flexDirection: "column", left: 10}}>
          </View>
      </View>


      <View style={{ flex: .7, flexDirection: "column", justifyContent:"center"}}>
  <Text style={globalStyles.Message}>Message Sent</Text>
                
      </View>
    
    <View style={{ flex: .2, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
      <TouchableOpacity 
        style = {globalStyles.button}
        onPress={() => 
          props.navigation.navigate('InboxScreen', 
            {userId: userId})}
      >            
        <Text style = {globalStyles.buttonFontGrey}>Inbox</Text>
      </TouchableOpacity>
    </View>

  </View>
      );
    }

    // StyleSheet
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colors.c5,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 15, 
          },
    });    
  
