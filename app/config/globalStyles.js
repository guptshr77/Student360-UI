import { StyleSheet} from 'react-native';
import AppColors from './Colors';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.c4,
      alignItems: 'center',
      justifyContent: 'center' 
    },
    text: {
      fontSize: 30,
      fontWeight: 'bold'
    },
    input: {
        height:  60,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: AppColors.white
    },
    button: {
      backgroundColor: AppColors.c3,
      color: AppColors.c2,
      fontSize: 20
    },
    inputTitle:{
      fontSize: 17
    }
  });