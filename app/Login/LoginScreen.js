import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView} from 'react-native';

//Screens
import AppColors from '../config/Colors';


export default function App({navigation}) {
    const [username, onChangeUsername] = React.useState("zekepat");
    const [password, onChangePassword] = React.useState("lol");    

    return (
    <SafeAreaView style={styles.container}>
    

      <Text style = {styles.text}>Login</Text>

      <Text>
          username:
          <TextInput 
            style={styles.input}
            onChangeText = {onChangeUsername}
            value = {username}
            keyboardType = "default"
          />
      </Text>

      <Text>
          Password:
          <TextInput 
            style={styles.input}
            onChangeText = {onChangePassword}
            value = {password}
            keyboardType = "default"
          />
      </Text>

      <Text>
          <Button
            onPress={() => {
                navigation.navigate('Login2', {
                    username: username,
                    password: password
                });
            }}
            title="Submit" 
            style={styles.button}
          />
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.c4,
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontSize: 40,
  },
  input: {
      height:  40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: AppColors.white
  },
  button: {
    backgroundColor: AppColors.c3,
    color: AppColors.c2
  }
});
