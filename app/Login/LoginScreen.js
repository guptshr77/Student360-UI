import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, SafeAreaView} from 'react-native';
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';

export default function App({navigation}) {
    const [username, onChangeUsername] = React.useState("zekepat");
    const [password, onChangePassword] = React.useState("lol");    

    return (
    <View style={globalStyles.container1}>

      <Text style = {globalStyles.title}>Login</Text>
      <Text>{`\n`}</Text>
      <Text>{`\n`}</Text>

      <Text style={globalStyles.H2}>Username:</Text>
          <TextInput 
            style={[globalStyles.inputBox]}
            onChangeText = {onChangeUsername}
            value = {username}
            keyboardType = "default"
          />

      <Text style={globalStyles.H2}>Password:</Text>
          <TextInput 
            style={globalStyles.inputBox}
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
