import React from 'react';
import {TextInput, StyleSheet, SafeAreaView, View} from "react-native";

import Colors from '../config/Colors';

//https://stackoverflow.com/questions/46217760/how-to-multiple-textinput-handle-with-single-handler
//https://github.com/ory/kratos-selfservice-ui-react-native/tree/master/src/components/Ory/Ui/Node

function LoginScreen(props) {
    const [string, onChangeText] = React.useState(null);
    //https://stackoverflow.com/questions/48527486/react-native-textinput-wont-allow-typing-text-change
    //https://medium.com/swlh/how-to-use-textinput-component-to-change-state-in-react-native-8c7b2eb93305
    return (
        <View style={styles.background}>
        <SafeAreaView>
            <TextInput
                style={styles.textInput}
                onChangeText={this.onChangeUsername}
                value={string}
                placeholder="usename"
                placeholderTextColor = {Colors.c4}
                keyboardType="default"
            />
            <TextInput
                style={styles.textInput}
                onChangeText={this.onChangePassword}
                value={string}
                placeholder="password"
                placeholderTextColor = {Colors.c4}
                keyboardType="default"
            />
        </SafeAreaView>
        </View>
    );
}

onChangeUsername = () => {}
onChangePassword = () => {}


const styles = StyleSheet.create({
    background:{
        backgroundColor: Colors.black,
        flex: 1
    },
    text: {
        color: Colors.white,
        fontWeight: 'bold',
        alignContent: "center"
    },
    textInput: {
        height: 40,
        margin:  12,
        borderWidth: 1, 
        padding: 10,
        borderColor: Colors.c1,
        color: Colors.c5
    }
})
export default LoginScreen;