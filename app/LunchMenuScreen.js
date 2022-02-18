import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-web';

//Screens
import AppColors from './config/AppColors';

export default function App({route, navigation}) {
    // const {lunchMenu} = route.params;
    // const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // const getLunchMenu = async () => {
    //   try{
    //     const response = await fetch('http://localhost:8080/lunchmenu');
    //     const json = await response.json();
    //     console.log(json);
    //     setData(json);
    //   } catch (error) {
    //     console.error(error);
    //   }finally{
    //     setLoading(false);
    //   }
    // }
    // useEffect(() => {
    //   getLunchMenu();
    // }, []);

  return (
    <View style={styles.container}>
      <Text>Lunch Menu</Text>
      
      {/* {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor = {({ day }, index) => day}
          renderItem = {({item}) => (
            <Text>
              {item.day}, {item.foodItems},{item.grabNGo}, {item.milks}
            </Text>
          )}
        />
      )} */}


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
