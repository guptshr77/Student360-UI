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
 
  //sends URL to get the schedule of the User
  const getSchedule = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'getschedule?user_id=' + userId);
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
    getSchedule();
  }, [props]);

  //renders the user's schedule
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

            <View style={{ flex: .9, flexDirection: "column", left: 30}}>
              <Text style={globalStyles.title}>Schedule:</Text>
            </View>
          </View>


          <View style={{ flex: .7, flexDirection: "row", justifyContent:"center", left: 100}}>
          
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (

              <View>

              <Text>{`\n`}</Text>
              <Text style={globalStyles.content}>{item.classname}</Text>
              <Text style={globalStyles.content2}>Room: {item.roomnum}</Text>
              <Text style={globalStyles.content2}>Timing: {Moment('2022-03-17 ' +item.startTime).format('H:mm')} to {Moment('2022-03-17 ' + item.endTime).format('H:mm')}</Text>
              </View>
                
            )}
            />
             )}
          </View>
          
          <View style={{ flex: .2, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => props.navigation.navigate('GetAllClasses', {
                  userId: userId
                }) }
              >
                <Text style={globalStyles.buttonFontGrey}>Add Class</Text>
              </TouchableOpacity>                    
          </View>

        </View> 

      );
    }
