import {
    Platform,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#f7f7f7',
    },
    topbg:{
      width:SCREEN_W,
      height:IS_X?215:171,
      backgroundColor:"#98BBC5"
    },
    mineView:{
      width:SCREEN_W-20,
      height:479,
      marginTop:135,
      borderRadius:10,
      flexDirection:'column',
      overflow:'hidden'
    },
    topInfosView:{
      width:SCREEN_W-20,
      flexDirection:'column',
      alignItems:"center",
      height:150,
      backgroundColor:'#fff',
      paddingTop:70
    },
    userName:{
      fontSize:16,
      color:'#00003A',
      fontWeight:'bold'
    },
    signStyle:{
      fontSize:13,
      color:'#404760',
      marginTop:10
    },
    photo:{
      width:90,
      height:90,
      borderRadius:45,
      borderColor:'#fff',
      borderWidth:4,
      marginTop:-524,
      backgroundColor:'#444'
    },
    userItem:{
      width:SCREEN_W-20,
      height:40,
      flexDirection:'row',
      alignItems:'center',
      paddingLeft:20,
      backgroundColor:'#FFF',
    },
    itemView:{
      flex:1,
      height:40,
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'#f7f7f7',
      justifyContent:'space-between',
      borderBottomWidth:PX_LINE
    },
    itemTitle:{
      fontSize:14,
      color:'#404760',
    },
    arrow:{
      marginRight:20
    }
});

export default styles;