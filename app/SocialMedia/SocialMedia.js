//libraries
import React from "react";
import {Text, View, Image, TouchableHighlight, Linking, StyleSheet} from 'react-native';

//Screens
import globalStyles from '../config/globalStyles';

export default function App({route, navigation}){
    //Variables
    const {userId} = route.params;

    //renders a menu for navigation
    return (
        <View style={globalStyles.container2}>

            <View style={{ flex: .1, flexDirection: "row", justifyContent:"center" }}>
                <Text style={globalStyles.title}>School News</Text>
            </View>

            <View style={{ flex: .1, flexDirection: "row", justifyContent:"center" }}>
                <Text style={globalStyles.content}>Check out our school's social media!</Text>               
            </View>

            <View style={{ flex: .2, flexDirection: "row", justifyContent:"center" }}>
            {/* FaceBook */}
                <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/FallsHS/')}>
                    <Image
                        style={styles.imagestyle}
                        source = {require('../assets/facebook_icon.png')}
                        />
                </TouchableHighlight>                
            </View>

            <View style={{ flex: .2, flexDirection: "row", justifyContent:"center" }}>
                {/* Instagram */}
                <TouchableHighlight onPress={() => Linking.openURL('https://www.instagram.com/fallsschools/?hl=en')}>
                    <Image
                        style={styles.imagestyle}
                        source = {require('../assets/instagram_icon.png')}
                        />
                </TouchableHighlight>                
            </View>

            <View style={{ flex: .2, flexDirection: "row", justifyContent:"center" }}>
               
            </View>

 







        </View>
    )

    
}

const styles = StyleSheet.create({
    enter: {
      fontSize: 5
    }
  });