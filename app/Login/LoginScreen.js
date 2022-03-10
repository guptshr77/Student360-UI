import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, SafeAreaView} from 'react-native';
import globalStyles from '../config/globalStyles';

export default function App({navigation}) {
    const [username, onChangeUsername] = React.useState("zekepat");
    const [password, onChangePassword] = React.useState("lol");    

    return (
    <View style={globalStyles.container}>

      <Text style = {globalStyles.text}>Login</Text>
      <Text>{`\n`}</Text>
      <Text>{`\n`}</Text>

      <Text style={globalStyles.inputTitle}>Username:</Text>
          <TextInput 
            style={[globalStyles.input]}
            onChangeText = {onChangeUsername}
            value = {username}
            keyboardType = "default"
          />
    

      <Text style={globalStyles.inputTitle}>Password:</Text>
          <TextInput 
            style={globalStyles.input}
            onChangeText = {onChangePassword}
            value = {password}
            keyboardType = "default"
          />


      <Text>
          <Button
            onPress={() => {
                navigation.navigate('Login2', {
                    username: username,
                    password: password
                });
            }}
            title="Submit" 
            style={globalStyles.button}
          />
      </Text>
    </View>
  );
}
