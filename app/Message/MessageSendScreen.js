import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker} from 'react-native';
import globalStyles from '../config/globalStyles';
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';

export default function App({route, navigation}) {
  const {userId, firstName, lastName} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); 
  const [recipient_id, setRecipientId] = useState([]);
  const [subject, onChangeSubject] = React.useState(""); 
  const [msg_content, onChangeContent] = React.useState(""); 

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
            selectedValue = {data.userId}
            onValueChange = {(itemValue) => setRecipientId(itemValue)}
          >
            <Picker.Item key="" label="" value=""/>
            {data.map ((obj, firstName) => (
              <Picker.Item key={obj.userId} label={obj.firstName + " " + obj.lastName} value={obj.userId}/>
           ))}

          </Picker>

        <Text style={styles.subTitles}>Subject:</Text>
            <TextInput 
              style={[globalStyles.input]}
              onChangeText = {onChangeSubject}
              value = {subject}
              keyboardType = "default"
            />


        <Text style={styles.subTitles}>Message:</Text>
            <TextInput 
              style={[globalStyles.input]}
              onChangeText = {onChangeContent}
              value = {msg_content}
              keyboardType = "default"
            />


        <Button
          title="Send" 
          onPress={() => navigation.navigate('SendMessage', {
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            recipient_id: recipient_id,
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
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15, 
      },
      text: {
        fontSize: 40,
      },
      input: {
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: Colors.white,
          flex: 1,
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