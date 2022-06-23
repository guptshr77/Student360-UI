//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
  //variables
    const {userId, actId} = props.route.params;
    const [isLoading, setLoading] = useState(true);

    //call url to add the activity 
    const AddActivity = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'addactivity?userid=' + userId +'&act_id='+ actId);
          console.log(JSON.stringify(response));
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false);
        }
      }

      useEffect(() => {
        AddActivity();
      }, [props]);
      
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
      <Text style={globalStyles.Message}>Activity Added</Text>
                    
          </View>
        
        <View style={{ flex: .2, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
          <TouchableOpacity 
            style={globalStyles.button}
            onPress={() => props.navigation.navigate('ECActivities', 
              {userId: userId})}>            
            <Text style={globalStyles.buttonFontGrey}>Clubs Homepage</Text>
          </TouchableOpacity>
        </View>

      </View>
      );
}
  
