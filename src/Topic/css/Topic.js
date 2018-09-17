import {
    Platform,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#F7F7F7',
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
    riskHead:{
      flexDirection:'row',
      alignItems:'center',
      height:40,
      width:SCREEN_W,
      backgroundColor:'#fff',
      marginBottom:5
    },
    tabItem:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    onSortStyle:{
        fontSize:16,
        color:'#5A8BEB'
    },
    offSortStyle:{
        fontSize:16,
        color:'#404760'
    },
    tabView:{
      paddingTop:13,
      alignItems:'center',
      flexDirection:'row'
    },
    online:{
      width:40,
      height:2,
      backgroundColor:'#5A8BEB',
      marginTop:8
    },
    offline:{
      width:40,
      height:2,
      backgroundColor:'#FFF',
      marginTop:8
    },
    cellStyle:{
      width:SCREEN_W,
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'#fff',
      borderBottomWidth:PX_LINE,
      borderBottomColor:'#f7f7f7',
      paddingHorizontal:10,
      paddingVertical:10,
    },
    cellTitle:{
      flexDirection:'row',
      width:SCREEN_W-20,
      alignItems:'center',
      marginTop:10,
    },
    cellType:{
      fontSize:14,
      color:'#2969E6',
      borderWidth:PX_LINE,
      borderColor:'#2969E6',
      borderRadius:2,
      lineHeight:16,
      width:32,
      textAlign:'center'
    },
    titleTxt:{
      color:'#404760',
      fontSize:16,
      fontWeight:'bold'
    },
    authorInfo:{
      width:SCREEN_W-20,
      flexDirection:'column',
      marginTop:10,
      paddingRight:10,
    },
    author:{
      fontSize:13,
      color:'#404760',
      lineHeight:16,
      flex:1
      // width:SCREEN_W-130
    },
    dateLab:{
      fontSize:10,
      color:'#CED1E6',
      marginTop:5
    },
    contentView:{
      flexDirection:"row",
      alignItems:'center',
      width:SCREEN_W-20
    },
    bottomView:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flex:1
    },
    contentImg:{
      width:100,
      height:60,
      backgroundColor:'#444'
    }
});

export default styles;