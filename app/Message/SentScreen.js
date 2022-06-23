//libraries
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image} from 'react-native';
import Moment from 'moment';

//Screens
import globalStyles from '../config/globalStyles';
import enviornment from '../config/enviornment';
import Colors from '../config/Colors';

export default function App(props) {
  //variables
  const {userId}= props.route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //Sends URL to View past messages that were sent
  const SentScreen = async () => {
      try{
        const response = await fetch(enviornment.restUrl+ 'getSentMessages?user_id=' + userId);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false);
      }
    }

    useEffect(() => {
      SentScreen();
    }, []);

    //Renders the messages that the user sent in the past
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

        <View style={{ flex: .9, flexDirection: "column", left: -20}}>
          <Text style={globalStyles.title}>Past Sent Messages</Text>
        </View>
      </View>


      <View style={{ flex: .8, flexDirection: "row", justifyContent:"center"}}>		
    {isLoading ? <ActivityIndicator/> : (
    <FlatList
    data={data}
    keyExtractor = {({ msgId }, index) => msgId}
    renderItem = {({item}) => (
      <View style={{ paddingLeft:5 }}>
      <View style={globalStyles.MessageFormat}>
        <Text style={globalStyles.H3}>To: </Text>
        <Text style={globalStyles.content2}>{item.user.firstName} {item.user.lastName}</Text>
      </View>

      <View style={globalStyles.MessageFormat}>
        <Text style={globalStyles.H3}>Subject: </Text>
        <Text style={globalStyles.content2}>{item.subject}</Text>
      </View>

      <Text style={globalStyles.H3}>Message:</Text>
      <Text style={globalStyles.content2}>{item.msgContent}</Text>
      
      <Text style={styles.enter}>{`\n`}</Text>
      <Text>{Moment(item.datetime).format('MM/DD/yyyy')}</Text>
      <Text>..........................................................................................</Text>
      </View>

    )}
    />
  )}
  
      </View>
      
      <View style={{ flex: .1, flexDirection: "row", justifyContent:"center", alignItems: "center"}}>
    <TouchableOpacity
    style={globalStyles.button} 
    onPress={() => props.navigation.navigate('MessageSend'
    ,{
       userId: userId 
    }
    )}
    >
      <Text style={globalStyles.buttonFontGrey}>Compose</Text>
    </TouchableOpacity>

      <Text>   </Text>

      <TouchableOpacity
      style={globalStyles.button}
      onPress={() => props.navigation.goBack()}
      >
      <Text style={globalStyles.buttonFontGrey}>Go Back</Text>
      </TouchableOpacity>                   
      </View>

    </View>
      );
    }
  
    //StyleSheet
    const styles = StyleSheet.create({
      content:{
        fontSize: 20,
        color: Colors.black
      },
      enter: {
        fontSize: 5
      }
    });
