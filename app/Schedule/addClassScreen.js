//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity,Image} from 'react-native';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
    //variables
    const {userId, classId} = props.route.params;
    const [isLoading, setLoading] = useState(true);

    //sends URL to add a class to the user's schedule
    const AddClass = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'addschedule?user_id=' + userId + '&class_id=' + classId);
          console.log(JSON.stringify(response));
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
        }
      }

      useEffect(() => {
        AddClass();
      }, [props]);

    //renders Confirmation Message
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


      <View style={{ flex: .7, flexDirection: "row", top: 100, padding: 5}}>		
        <Text style={globalStyles.Message}>Class Added</Text>
      </View>

      <View style={{flex: .1, flexDirection: "row"}}>
        <TouchableOpacity 
          style={globalStyles.button}
          onPress={() => props.navigation.navigate('GetSchedule',
             {userId: userId})}
        >            
            <Text style={globalStyles.buttonFontGrey}>Schedule</Text>
        </TouchableOpacity>
          
      </View>
    
    </View>
      );
}
  
