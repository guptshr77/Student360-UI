//libraries
import React, {useEffect, useState} from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image} from 'react-native'; 

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App(props) {
  //variables
    const {userId, firstName, lastName} = props.route.params;
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

    // renders the lunch menu by day of the week
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

        <View style={{ flex: .9, flexDirection: "column", left: 25}}>
          <Text style={globalStyles.title}>Lunch Menu</Text>
        </View>
      
      </View>

      <View style={{ flex: .9, flexDirection: "row", justifyContent:"center"}}>		
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor = {({ day }, index) => day}
            renderItem = {({item}) => (
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={globalStyles.H1}>{item.day}</Text>
                <Text>{`\n`}</Text>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={globalStyles.content}>{`\t`}Hot Lunch: </Text>
                  <Text style={globalStyles.content2}>{item.foodItems}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={globalStyles.content}>{`\t`}Grab N Go:</Text>
                  <Text style={globalStyles.content2}>{item.grabNGo}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Text style={globalStyles.content}>{`\t`}Milk:</Text>
                  <Text style={globalStyles.content2}>{item.milks}</Text>
                </View>

                <Text>{`\n`}</Text>
              </View>
            )}
          />
        )}

      </View>

    </View>
  );
}