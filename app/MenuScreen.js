//libraries
import React from "react";
import {Text, View, Button, Image, StyleSheet, TouchableHighlight} from 'react-native';

//Screens
import globalStyles from './config/globalStyles';

export default function App({route, navigation}){
    //Variables
    const {userId} = route.params;

    //renders a menu for navigation
    return (
        <View style={globalStyles.container3}>
          <View style={{ flex: .1, flexDirection: "row", justifyContent:"center" }}>
          <Text style={globalStyles.title}>Main Menu</Text>
          </View>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center" }}>
             <TouchableHighlight onPress={() => navigation.navigate('GetSchedule', {userId: userId})}> 
              <Image
                style={styles.imagestyle}
                source={require('./assets/schedule_icon.png')}
              /> 
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate('SocialMedia', {userId: userId})}>           
            <Image  
                style={styles.imagestyle}
                source={require('./assets/school_news_icon.png')}              
            /> 
          </TouchableHighlight>
          
          </View>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center" }}>

          <TouchableHighlight onPress={() => navigation.navigate('InboxScreen', {userId: userId})}>            
            <Image
                style={styles.imagestyle}
                source={require('./assets/message_inbox_icon.png')}               
            /> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate('ECActivities', {userId: userId})}>
              <Image
                style={styles.imagestyle}
                source={require('./assets/club_icon.png')}
              />
            </TouchableHighlight>

          </View>



          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center" }}>
          <TouchableHighlight onPress={() => navigation.navigate('LunchMenu', {userId: userId})}>
            <Image
                style={styles.imagestyle}
                source={require('./assets/lunch_menu_icon.png')}               
            /> 
          </TouchableHighlight>

          <TouchableHighlight onPress={() => navigation.navigate('MonthlyCalendar', {userId: userId})}>            
            <Image
                style={styles.imagestyle}
                source={require('./assets/monthly_calendar_icon.png')}            
            />
          </TouchableHighlight>

          </View>

        </View>
    )
}

    //StyleSheet
    const styles = StyleSheet.create({
      imagestyle: {
        width: 150,
        height: 150
      },
    });