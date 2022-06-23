//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
  //variables
  const {userId} = props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //sends URL to get all activities the user is a part of
  const getUserActivities = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'getuseractivity?userid='+ userId);
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
    getUserActivities();
  }, [props]);

    //Renders all the activities that the user is a part of 
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

          <View style={{ flex: .9, flexDirection: "column", left: 35}}>
            <Text style={globalStyles.title}>Activities</Text>
          </View>
        </View>


        <View style={{ flex: .8, flexDirection: "row", justifyContent:"center"}}>		
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor = {({ actId }, index) => actId}
              renderItem = {({item}) => ( 
                <View>

                  <Text style={globalStyles.H2}>{item.title}</Text>

                  <Text>{`\n`}</Text>
                  {/* <Text style={globalStyles.H2}>{`\t`}Description:</Text> */}
                  <Text style = {globalStyles.content2}>{item.descr}</Text>

                  <Text>{`\n`}</Text>
                </View>
              )}
            />
          )}
  
        </View>
      
        <View style={{ flex: .1, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
          <TouchableOpacity
            style={globalStyles.button} 
            onPress={() => props.navigation.navigate('GetAllEC',{
              userId: userId
            })}
          >
            <Text style={globalStyles.buttonFontGrey}>Add Activity</Text>
          </TouchableOpacity>
                       
        </View>

    </View>
      );
}
  
