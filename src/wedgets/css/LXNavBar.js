import {
    Platform,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    navStyle:{
        width:SCREEN_W,
        height:IS_X?88:64,
        backgroundColor:'rgba(255,255,255,0.9)',
        flexDirection:'row'
    },
    navLeftBtn:{
        marginTop:IS_X?54:10
    },
    titleView:{
        alignItems:'center',
        justifyContent:'center',
        width:SCREEN_W-80
    },
    title:{
        marginTop:IS_X?54:10,
        fontSize:16,
        fontWeight:'bold'
    },
    
});

export default styles;