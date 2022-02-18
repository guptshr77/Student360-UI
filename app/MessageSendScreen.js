import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App({route, navigation}) {

    return (
        <View style={styles.container}>
          <Text>Message Send Screen</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });    
  
