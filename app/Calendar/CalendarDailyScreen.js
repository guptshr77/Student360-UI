//libraries
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native';
import Moment from 'moment';

//screens
import enviornment from '../config/enviornment';
import globalStyles from '../config/globalStyles';
import AppColors from '../config/Colors';



export default function App(props) {
  // variables (Inputs)
    let {userId, date} = props.route.params;
    let [isLoading, setLoading] = useState(true);
    let [data, setData] = useState([]);

    // obtains data after sending URL
    const getCalendarDailyScreen = async () => {
      try{
        console.log(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
        let response = await fetch(enviornment.restUrl + 'calendar?userid=' + userId + '&date=' + date);
        let json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }
    useEffect(() => {
      getCalendarDailyScreen();
    }, [props]);

  // renders and formats data 
  return (
      <View style={globalStyles.container2}>
        
        <View style={{ flex: .1, flexDirection: "row" }}>

          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center"}}>
            <TouchableOpacity
                onPress={() => props.navigation.navigate('Menu', {
                  userId: userId
                })}
              >
                <Image
                  style={globalStyles.menuImage}
                  source={require('../assets/menu.png')}
                />
              </TouchableOpacity>

            </View>

          <View style={{ flex: .9, flexDirection: "column"}}>
            <Text style = {globalStyles.title}>Daily Calendar</Text>
            <Text style = {globalStyles.H1}>{Moment(date).format('MM/DD/yyyy')}</Text>
          </View>

        </View>
        
        <View style={{ flex: .1, flexDirection: "row"}}>
          <View style={{ flex: .5, flexDirection: "column", left: 5}}>
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => props.navigation.navigate('DailyCalendar', {
                    date: (Moment(date).subtract(1, 'days')).format('yyyy-MM-DD'),
                    userId: userId
                  })}
                >
              <Text style={globalStyles.buttonFontGrey}>{'<'}--</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{ flex: .5, flexDirection: "row", justifyContent: "flex-end", right: 10}}>
            <TouchableOpacity
                  style={styles.button}
                  onPress={() => props.navigation.navigate('DailyCalendar', {
                    date: (Moment(date).add(1, 'days')).format('yyyy-MM-DD'),
                    userId: userId
                  })}
                >
              <Text style = {globalStyles.buttonFontGrey}>--{'>'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: .3, flexDirection: "row", justifyContent:"center"}}>
          {/* Classes */}
          <Text style={globalStyles.H2}>Classes:</Text><Text>{`\t`}</Text>
            <FlatList
              data={data.classes}
              keyExtractor = {({ classId }, index) => classId}
              renderItem = {({item}) => (
                <View>
                  <Text>{`\n`}</Text>
                  <Text style={globalStyles.content}>{item.classname}</Text>
                  <Text style={globalStyles.content2}>Room: {item.roomnum}</Text>
                  <Text style={globalStyles.content2}>Timing: {Moment('2022-03-17 ' +item.startTime).format('H:mm')} to {Moment('2022-03-17 ' + item.endTime).format('H:mm')}</Text>
                </View> 
                
              )}
            />
          </View>
          
          <View style={{ flex: .3, flexDirection: "row", justifyContent:"center" }}>
           {/* //Events */}
          <Text style = {globalStyles.H2}>Events:</Text><Text>{`\t`}</Text>
          <FlatList
            data={data.events}
            keyExtractor = {({ eventId }, index) => eventId}
            renderItem = {({item}) => (
              <View>
                <Text>{`\n`}</Text>
                <Text style={globalStyles.content}>{item.title}</Text>
                <Text style={globalStyles.content2}>Time: {Moment(item.dateTime).format('H:mm')}</Text>
                <Text style={globalStyles.content2}>{item.description}</Text>
              </View>
            )}
          />
          </View>

          <View style={{ flex: .2, flexDirection: "row", justifyContent:"center" }}>
            {/* //Activities */}
            <Text style = {globalStyles.H2}>Activities</Text><Text>{`\t`}</Text>
            <FlatList
              data={data.extracurriculars}
              keyExtractor = {({ actId }, index) => actId}
              renderItem = {({item}) => (
                <View>
                  <Text>{`\n`}</Text>
                  <Text style={globalStyles.content}>{item.title}</Text>
                  <Text style={globalStyles.content2}>{item.descr}</Text>
                  <Text style={globalStyles.content2}>Location: {item.location}</Text>
                  <Text style={globalStyles.content2}>Timing: {Moment('2022-03-17 ' + item.startTime).format('H:mm')} to {Moment('2022-03-17 ' + item.endTime).format('H:mm')}</Text>
                </View>
              )}
            />
          </View>
      </View>
  );
}

    //StyleSheet
    const styles = StyleSheet.create({
      imagestyle: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 0,
        top: 0
      },
      button: {
        backgroundColor: AppColors.white,
        padding: 10,
        height: 40,
        width: 50
      },
    });