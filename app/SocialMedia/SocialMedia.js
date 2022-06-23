//libraries
import React from "react";
import {Text, View, Image, TouchableHighlight, Linking, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from "../config/Colors";

//Screens
import globalStyles from '../config/globalStyles';

export default function App(props){
    //Variables
    const {userId} = props.route.params;

    //renders a menu for navigation
    return (
        <View style={globalStyles.container2}>

            <View style={{ flex: .2, flexDirection: "row" }}>

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

                <View style={{ flex: .9, flexDirection: "column", left: 10}}>
                    <Text style={globalStyles.title}>School News</Text>
                </View>
            </View>


            <View style={{ flex: .9, flexDirection: "column", justifyContent:"center"}}>
                <View style={{ flex: .3, flexDirection: "row", justifyContent:"center" }}>
                    <Text style={styles.enter}>Check out our school's social media!</Text>               
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

                <View style={{ flex: .4, flexDirection: "column", left: 10}}>

                </View>
                		
                		  
            </View>
          

        </View>
    )

    
}

const styles = StyleSheet.create({
    enter: {
      fontSize: 20,
      fontWeight: "bold",
      color: Colors.c2
    }, 
    imagestyle: {
        width: 200,
        height: 66
    }
  });