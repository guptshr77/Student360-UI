//libraries
import React, {useEffect} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

//screens
import globalStyles from '../config/globalStyles';

export default function App(props) {
  //variable that take in inputs
    const {message} = props.route.params;
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");    

    const login = async () => {
        console.log('login screen');
    }
    useEffect(() => {
      login();

    }, [props]);

    //renders a login screen so the user can input their information
    return (
    <View style={globalStyles.container1}>

      <Text style = {globalStyles.title}>Login</Text>
      <Text>{`\n`}</Text>
      <Text>{`\n`}</Text>

      <Text style={globalStyles.errorMessage}>{message}</Text>
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
            secureTextEntry={true}
          />


      <Text>
          <Button
            onPress={() => {
                props.navigation.navigate('Login2', {
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


