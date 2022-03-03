import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView} from 'react-native';

import Colors from '../config/Colors';

export default function App({route, navigation}) {
  const {userId, firstName, lastName} = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]); 
  const [recipient_user_id, onChangeRecipient] = React.useState();
  const [subject, onChangeSubject] = React.useState(); 
  const [msg_content, onChangeContent] = React.useState(); 

    return (
        <View style={styles.container}>
          <Text style={styles.title}>New Message</Text>

        <Text style={styles.subTitles}>
          To:
          <TextInput 
            style={styles.input}
            onChangeText = {onChangeRecipient}
            value = {recipient_user_id}
            keyboardType = "default"
          />
        </Text>

        <Text style={styles.subTitles}>
            Subject:
            <TextInput 
              style={styles.input}
              onChangeText = {onChangeSubject}
              value = {subject}
              keyboardType = "default"
            />
        </Text>

        <Text style={styles.subTitles}>
            Message:
            <TextInput 
              style={styles.input}
              onChangeText = {onChangeContent}
              value = {msg_content}
              keyboardType = "default"
            />
        </Text>

        <Button
          title="Send" 
          onPress={() => navigation.navigate('SendMessage', {
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            recipient_user_id: recipient_user_id,
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
          height:  40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor: Colors.white,
          flex: 1
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