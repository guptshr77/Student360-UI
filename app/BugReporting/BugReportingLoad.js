//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App(props) {
  //variables
  const {userId, bug} = props.route.params;
  const [setLoading] = useState(true);

  //Sends URL to send the message to the teacher 
  const getComposeScreen = async () => {
    try{
      console.log(encodeURI(enviornment.restUrl + 'bugReport?user_id=' + userId + '&bug=' + bug));
      const response = await fetch(encodeURI(enviornment.restUrl + 'bugReport?user_id=' + userId + '&bug=' + bug));
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

        <View style={{ flex: .2, flexDirection: "row" }}>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center", top: 5}}>
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

          <View style={{ flex: .9, flexDirection: "column", top: 20, left: -10}}>
          </View>
        </View>


        <View style={{ flex: .8, flexDirection: "row", top: 100, padding: 5}}>		
          <Text style={globalStyles.Message}>Sorry about the inconvinience but we have recieved your message and will work to fix it ASAP.</Text>
        </View>
      
      </View>
      );
    }    
  
