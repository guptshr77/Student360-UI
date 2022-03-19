//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, Button, ActivityIndicator, FlatList} from 'react-native'; 

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  //variables
    const {userId, firstName, lastName} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [day,setDay] = useState("");

    //sends URL to get the Lunch Menu
    const getLunchMenu = async () => {
      try{
        const response = await fetch(enviornment.restUrl + 'lunchmenu');
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
      getLunchMenu();
    }, []);

    //renders the lunch menu by day of the week
  return (
    <View style={globalStyles.container1}>
      <Text style={globalStyles.title}>Lunch Menu</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ day }, index) => day}
          renderItem = {({item}) => (
            <View>

              <Text style={globalStyles.H1}>{item.day}</Text>

              <Text>{`\n`}</Text>
              <Text style={globalStyles.H2}>{`\t`}Hot Lunch:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.foodItems}</Text>
              <Text style={globalStyles.H2}>{`\t`}Grab N Go:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.grabNGo}</Text>
              <Text style={globalStyles.H2}>{`\t`}Milk:</Text>
              <Text style={globalStyles.content}>{`\t`}{`\t`}{item.milks}</Text>

              <Text>{`\n`}</Text>
            </View>
          )}
        />
      )}

      <Button
        title="Go Back" 
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}