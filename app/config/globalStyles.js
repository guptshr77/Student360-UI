import { StyleSheet} from 'react-native';
import AppColors from './Colors';

export default StyleSheet.create({
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
      backgroundColor: AppColors.c3,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: AppColors.c1,
      textDecorationLine: 'underline'
    },
    H1: {
      fontSize: 20,
      textAlign: 'left',
      textDecorationLine: 'underline',
      alignSelf: 'baseline',
      color: AppColors.c1,
      fontWeight: 'bold'
    },
    H2:{
      fontSize: 20,
      color: AppColors.c2
    },
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
      color: AppColors.c1
    },
    MessageFormat:{
      flexDirection: 'row'
    },
    content: {
      fontSize: 15,
      fontWeight: 'bold',
      color: AppColors.black
    },
    button: {
      backgroundColor: AppColors.c3,
      color: AppColors.c2,
      fontSize: 20
    },
    inputLabel:{
      fontSize: 17
    }
  });