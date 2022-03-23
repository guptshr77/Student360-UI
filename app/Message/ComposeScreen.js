//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, LogBox} from 'react-native';

//screens
import Colors from '../config/Colors';
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';

export default function App(props) {
  //variables
  const {userId1} = props.route.params; //This is called userId1 to differenciate it from the userId of the teachers that is obtained later
  const [data, setData] = useState([]); 
  const [recipientId, setRecipientId] = useState([]);
  const [subject, onChangeSubject] = React.useState(""); 
  const [msg_content, onChangeContent] = React.useState(""); 
  LogBox.ignoreAllLogs(true);

  //sends URL to get all the teachers in the system 
  const getTeachers = async () => {
    try{
      const response = await fetch(enviornment.restUrl + 'teachers');
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
        <View style={styles.container}>
          <Text style={styles.title}>{`\t`}{`\t`}{`\t`}New Message</Text>

          {/* pick user to send the message  */}
          <Text style={globalStyles.H3}>To:</Text>

          <Picker
            selectedValue = {recipientId}
            onValueChange = {(itemValue) => setRecipientId(itemValue)}
          >
            <Picker.Item key="" label="" value=""/>
            {data.map ((obj, userId) => (
              <Picker.Item key={obj.userId} label={obj.firstName + ' '+ obj.lastName} value={obj.userId}/>
            ))}

          </Picker>
        
          {/* enter subject */}
          <Text style={globalStyles.H3}>Subject:</Text>
              <TextInput 
                style={styles.inputSubject}
                onChangeText = {onChangeSubject}
                value = {subject}
                keyboardType = "default"
              />

          {/* Enter Message */}
          <Text style={globalStyles.H3}>Message:</Text>
              <TextInput 
                multiline={true}
                style={styles.inputMessage}
                onChangeText = {onChangeContent}
                value = {msg_content}
                keyboardType = "default"
              />


          <Button
            title="Send" 
            onPress={() => props.navigation.navigate('SendMessage', {
              userId: userId1,
              recipient_id: recipientId,
              subject: subject,
              msg_content: msg_content
            })}
          />  
          <Button
            title="Go Back" 
            onPress={() => props.navigation.goBack()}
          />            
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