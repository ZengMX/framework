import {
    Platform,
    StyleSheet
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#f7f7f7',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    navBarView:{
      width:SCREEN_W,
      height:IS_X?88:64,
      backgroundColor:'#fff',
      flexDirection:'row'
    },
    searchView:{
      alignItems:'center',
      justifyContent:'center',
      width:SCREEN_W-60
    },
    searchBtn:{
      width:SCREEN_W-80,
      height:30,
      marginTop:IS_X?48:4,
      borderRadius:5,
      backgroundColor:'rgba(247,247,247,1)',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'},
    searchTitle:{
      color:'rgba(218,220,234,1)',
      fontSize:14,
      lineHeight:30
    },
    qustionBtn:{
      marginTop:49,
      width:40,
      height:40,
      justifyContent:'center',
      alignItems:'center'
    },
    qustionTitle:{
      color:'#5A8BEB'
    },
    underLine:{
      backgroundColor: '#2C6BE6',
      width:64,
      height:2,
      marginHorizontal:(SCREEN_W-192)/6
    },
    scrollContent:{
      width:SCREEN_W,
      height:SCREEN_H,
      backgroundColor:'#fff'
    },
    
  });

  export default styles;