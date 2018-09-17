import {
    Platform,
    StyleSheet
  } from 'react-native';

  const styles = StyleSheet.create({
    container: {
      width:SCREEN_W,
      height:SCREEN_H,
      backgroundColor: '#F5FCFF',
    },
    cellStyle:{
      width:SCREEN_W,
      height:80,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:'#fff',
      borderBottomWidth:PX_LINE,
      borderBottomColor:'#f7f7f7',
      paddingHorizontal:10
  },
  cellPhoto:{
      width:50,
      height:50,
      borderRadius:25,
      backgroundColor:'#444'
  },
  relateTopic:{
      fontSize:12,
      color:'#404760',
      marginRight:20
  },
  coinName:{
      fontSize:14,
      color:'#404760',
      width:90
  },
  follow:{
      fontSize:14,
      color:'#404760',
      width:46,
      height:24,
      borderWidth:PX_LINE,
      borderColor:'#404760',
      borderRadius:5,
      textAlign:'center',
      lineHeight:24
  }
  });

  export default styles;