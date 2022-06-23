//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Picker, LogBox, Image, Keyboard} from 'react-native';

//screens
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';

export default function App(props) {
  //variables
  const {userId} = props.route.params; //This is called userId1 to differenciate it from the userId of the teachers that is obtained later
  const [data, setData] = useState([]); 
  const [bug, onChangeContent] = React.useState(""); 
  LogBox.ignoreAllLogs(true);

  //sends URL to get all the teachers in the system 
  const getTeachers = async () => {
    try{
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTeachers();
  }, [props]);

  //renders an interface for the user to input their message and send it 
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
            <Text style={globalStyles.title}>Report Bug</Text>
          </View>

        </View>

        <View style={{ flex: .5, flexDirection: "column", justifyContent:"center"}}>		
            {/* Enter Message */}
            <Text style={globalStyles.H3}>Please describe the error you have encountered:</Text>
                <TextInput 
                  multiline={true}
                  style={styles.inputMessage}
                  onChangeText = {onChangeContent}
                  value = {bug}
                  keyboardType = "default"
                  onPressOut={Keyboard.dismiss}
                />

        </View>

        <View style={{ flex: .2, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
            <TouchableOpacity
              style={globalStyles.button} 
              onPress={() => props.navigation.navigate('BugReportingLoad', {
                userId: userId,
                bug: bug
              })}
            >
              <Text style={globalStyles.buttonFontGrey}>Submit</Text>
            </TouchableOpacity>                    
        </View>

        
        <View style={{ flex: .2, flexDirection: "column", left: 10}}>
        </View>

        </View>
      );
    }

    //StyleSheet
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: Colors.c5
      },
      text: {
        fontSize: 40,
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      inputMessage: {
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: Colors.white,
          flex: .9,
          height: 10
      },
      inputSubject: {
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: Colors.white,
        flex: .1,
        height: 10
    },
      button: {
        backgroundColor: Colors.c3,
        color: Colors
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.c1
      },
      subTitles:{
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.c1,
      },
    });