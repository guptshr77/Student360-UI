//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

//screens
import Colors from '../config/Colors.js';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
  //variables
    const {userId} = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    //Sends URL to get all the classes offered at the school
    const getAllClasses = async () => {
        try{
          const response = await fetch(enviornment.restUrl + 'getallclasses');
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
        getAllClasses();
      }, []);

    return (
        <View style={globalStyles.container2}>
          <Text style={globalStyles.title}>Add Classes</Text>
          <Text>{`\n`}</Text>
        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor = {({ classId }, index) => classId}
            renderItem = {({item}) => (
              <View style={{ justifyContent:"center" }}>

              <Text style={globalStyles.H2}>{item.classname}</Text>

              <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => props.navigation.navigate('AddClass', {
                  userId: userId,
                  classId: item.classId
                })}
              >
                <Text style={globalStyles.buttonFontGrey}>Add</Text>
              </TouchableOpacity>
            </View>

            )}
            />
        )}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={() => props.navigation.goBack()}
      >
        <Text style={globalStyles.buttonFontGrey}>Go Back</Text>
      </TouchableOpacity>           
        </View>
      );
}