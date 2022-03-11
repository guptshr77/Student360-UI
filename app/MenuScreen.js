import React from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from './config/Colors';
import globalStyles from './config/globalStyles';

export default function App({route, navigation}){
    const {userId, firstName, lastName} = route.params;
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={globalStyles.container}>
        <Button
          title="Extracurricular" 
          onPress={() => navigation.navigate('ECActivities', {
              userId: userId,
              firstName: firstName,
              lastName: lastName
          })}
        /> 
        <Button
          title="Monthly Calendar" 
          onPress={() => navigation.navigate('MonthlyCalendar', {
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 

        <Button
          title="Lunch Menu" 
          onPress={() => navigation.navigate('LunchMenu',{
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 

        <Button
          title="Schedule" 
          onPress={() => navigation.navigate('GetSchedule', {
            userId: userId,
            firstName: firstName,
            lastName: lastName
          })}
        /> 
        <Button
        title="Messages"
        onPress={() => navigation.navigate('MessagesRecieved',{
          userId: userId,
          firstName: firstName,
          lastName: lastName
        })}
        /> 

        </View>
    )
}