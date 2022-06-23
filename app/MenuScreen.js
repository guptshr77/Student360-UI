//libraries
import React from "react";
import {Text, View, Button, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import Moment from 'moment';

//Screens
import globalStyles from './config/globalStyles';

export default function App(props){
    //Variables
    const {userId} = props.route.params;
    

    //renders a menu for navigation
    return (
        <View style={globalStyles.container3}>
          <View style={{ flex: .1, flexDirection: "row", justifyContent:"center" }}>
          <Text style={globalStyles.title}>Main Menu</Text>
          </View>

          <View style={{ flex: .9, flexDirection: "column", justifyContent:"center" }}>
            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('GetSchedule', {userId: userId})}> 
                  <Image
                    style={styles.imagestyle}
                    source={require('./assets/schedule_icon.png')}
                  /> 
                </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('SocialMedia', {userId: userId})}>           
                <Image  
                    style={styles.imagestyle}
                    source={require('./assets/school_news_icon.png')}              
                /> 
              </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('InboxScreen', {userId: userId})}>            
                <Image
                    style={styles.imagestyle}
                    source={require('./assets/message_inbox_icon.png')}               
                /> 
              </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('ECActivities', {userId: userId})}>
                  <Image
                    style={styles.imagestyle}
                    source={require('./assets/club_icon.png')}
                  />
                </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('LunchMenu', {userId: userId})}>
                <Image
                    style={styles.imagestyle}
                    source={require('./assets/lunch_menu_icon.png')}               
                /> 
              </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight onPress={() => props.navigation.navigate('MonthlyCalendar', {userId: userId})}>            
                <Image
                    style={styles.imagestyle}
                    source={require('./assets/monthly_calendar_icon.png')}            
                />
              </TouchableHighlight>
            </View>

            <View style={styles.container1}>
                <TouchableHighlight
                  onPress={() => props.navigation.navigate('DailyCalendar',{
                    userId: userId,
                    date: Moment(new Date()).format('yyyy-MM-DD')
                  })}
                >
                  <Image
                      style={styles.imagestyle}
                      source={require('./assets/home_page.png')}            
                  />
                </TouchableHighlight> 
            </View>

            <View style={styles.container1}>
                <TouchableHighlight
                  onPress={() => props.navigation.navigate('BugReporting',{
                    userId: userId
                  })}
                >
                  <Image
                      style={styles.imagestyle}
                      source={require('./assets/report_bug.png')}            
                  />
                </TouchableHighlight> 
            </View>

            <View style={styles.container1}>
                <TouchableHighlight
                  onPress={() => props.navigation.navigate('Login',{
                    usernameout: "",
                    passwordout: ""
                  })}
                >
                  <Image
                      style={styles.imagestyle}
                      source={require('./assets/logout.png')}            
                  />
                </TouchableHighlight> 
            </View>

          </View>

        </View>
    )
}

    //StyleSheet
    const styles = StyleSheet.create({
      imagestyle: {
        width: 220,
        height: 50
      },
      container1: {
        flex: .125, 
        flexDirection: "row", 
        justifyContent:"center" 
      }
    });