//libraries
import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';

export default function App({navigation}) {
  //variable that take in inputs
    const [username, onChangeUsername] = React.useState("zekepat");
    const [password, onChangePassword] = React.useState("lol");    

    //renders a login screen so the user can input their information
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
