import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, ActivityIndicator, SectionList} from 'react-native';
import { FlatList, Picker } from 'react-native-web';
import Colors from '../config/Colors.js';

//Screens
import AppColors from '../config/Colors';

export default function App({route, navigation}) {
    const {userId, firstName, lastName} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [day,setDay] = useState("");

    const getLunchMenu = async () => {
      try{
        const response = await fetch('http://localhost:8080/lunchmenu');
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lunch Menu</Text>
  

      <Picker
        selectedValue = {day}
        onValueChange = {(itemValue) => setDay(itemValue)}
      >
        <Picker.Item key="" label="" value=""/>
        {data.map ((obj, day) => (
          <Picker.Item key={obj.day} label={obj.day} value={obj.foodItems + ", " + obj.grabNGo + ", " + obj.milks}/>
        ))}

      </Picker>
      <Text>{day}</Text>

      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ day }, index) => day}
          renderItem = {({item}) => (
            <div>

              <Text style={styles.dayTitle}>{item.day}</Text>

              <Text>{`\n`}</Text>
              <Text style={styles.subTitles}>{`\t`}Hot Lunch:</Text>
              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}{`\t`}{item.foodItems}</Text>


              <Text>{`\n`}</Text>
              <Text style={styles.subTitles}>{`\t`}Grab N Go:</Text>
              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}{`\t`}{item.grabNGo}</Text>


              <Text>{`\n`}</Text>
              <Text style={styles.subTitles}>{`\t`}Milk:</Text>
              <Text>{`\n`}</Text>
              <Text style={styles.items}>{`\t`}{`\t`}{item.milks}</Text>


              <Text>{`\n`}</Text>
            </div>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.c5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.c1
  },
  subTitles:{
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.c1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.c1,
    textDecorationLine: 'underline'
  },
  items: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.black
  }
});
