import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker} from 'react-native';
import globalStyles from '../config/globalStyles';
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';
// import {Picker} from '@react-native-picker/picker';

export default function App({route, navigation}) {
  const {userId1} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); 
  const [recipientId, setRecipientId] = useState([]);
  const [subject, onChangeSubject] = React.useState(""); 
  const [msg_content, onChangeContent] = React.useState(""); 

  const [selectedLanguage, setSelectedLanguage] = useState();

  const getLunchMenu = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'teachers');
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
          <Text style={styles.title}>New Message</Text>

        <Text style={styles.subTitles}>To:</Text>

        <Picker
          selectedValue = {recipientId}
          onValueChange = {(itemValue) => setRecipientId(itemValue)}
        >
          <Picker.Item key="" label="" value=""/>
          {data.map ((obj, userId) => (
            <Picker.Item key={obj.userId} label={obj.firstName + ' '+ obj.lastName} value={obj.userId}/>
          ))}

        </Picker>

        <Text style={styles.subTitles}>Subject:</Text>
            <TextInput 
              style={styles.inputSubject}
              onChangeText = {onChangeSubject}
              value = {subject}
              keyboardType = "default"
            />


        <Text style={styles.subTitles}>Message:</Text>
            <TextInput 
              multiline={true}
              style={styles.inputMessage}
              onChangeText = {onChangeContent}
              value = {msg_content}
              keyboardType = "default"
            />


        <Button
          title="Send" 
          onPress={() => navigation.navigate('SendMessage', {
            userId: userId1,
            recipient_id: recipientId,
            subject: subject,
            msg_content: msg_content
          })}
        />  
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
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 15, 
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
        color: Colors.c1,
        textDecorationLine: 'underline'
      },
      subTitles:{
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.c1,
      },
    });