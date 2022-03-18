import React from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from './config/Colors';
import globalStyles from './config/globalStyles';

export default function App({route, navigation}){
    const {userId} = route.params;
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <View style={globalStyles.container3}>
          <Text style={globalStyles.title}>Main Menu</Text>
          <Button
          title="Schedule" 
          onPress={() => navigation.navigate('GetSchedule', {
            userId: userId
          })}
        /> 

        <Button
          title="Extracurricular" 
          onPress={() => navigation.navigate('ECActivities', {
              userId: userId
          })}
        /> 
        <Button
          title="Monthly Calendar" 
          onPress={() => navigation.navigate('MonthlyCalendar', {
            userId: userId
          })}
        /> 

        <Button
          title="Lunch Menu" 
          onPress={() => navigation.navigate('LunchMenu',{
            userId: userId
          })}
        /> 
        <Button
        title="Messages Inbox"
        onPress={() => navigation.navigate('InboxScreen',{
          userId: userId
        })}
        /> 

        </View>
    )
}