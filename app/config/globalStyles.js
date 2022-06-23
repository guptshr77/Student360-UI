//libraries
import { StyleSheet} from 'react-native';

//screens
import AppColors from './Colors';

export default StyleSheet.create({
  //containers  
  container1: {
      flex: 1,
      backgroundColor: AppColors.c4,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    container2: {
      flex: 1,
      backgroundColor: AppColors.c5,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    container3: {
      flex: 1,
      backgroundColor: AppColors.c4,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    titleContainer: {
      flex: 1,
      backgroundColor: AppColors.c5
    },
    //Headings
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: AppColors.c1,
      alignItems: "center",
      justifyContent: "center"
    },
    H1: {
      fontSize: 20,
      alignItems:"center",
      justifyContent: "center",
      color: AppColors.c1,
      fontWeight: 'bold'
    },
    H2:{
      fontSize: 20,
      color: AppColors.c2,
      fontWeight: 'bold'
    },
    H3:{
      fontSize: 17,
      color: AppColors.c2,
      fontWeight: 'bold'
    },
    //Special Tools
    inputBox: {
        height:  60,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: AppColors.white
    },
    Message: {
      fontSize: 20,
      color: AppColors.c1,
      alignItems: "center",
      justifyContent: "center"
    },
    MessageFormat:{
      flexDirection: 'row'
    },
    content: {
      fontSize: 15,
      fontWeight: 'bold',
      color: AppColors.black
    },
    content2: {
      fontSize: 17,
      color: AppColors.black
    },
    button: {
      backgroundColor: AppColors.white,
      padding: 10,
      height: 40
    },
    buttonFontBlue: {
      color: AppColors.c3,
      fontSize: 16,
      fontWeight: 'bold' 
    },
    buttonFontGrey: {
      color: AppColors.c6,
      fontSize: 16,
      fontWeight: 'bold' 
    },
    inputLabel:{
      fontSize: 17
    },
    errorMessage: {
      fontSize: 15,
      color: AppColors.error,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      alignContent: 'center'      
    },
    menuImage: {
      width: 40,
      height: 40,
      position: 'absolute',
      right: 0,
      top: 0

    }
  });