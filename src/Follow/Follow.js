import React from 'react';
import {
  Platform,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import { BaseView,BaseComponent,NavBar } from '../wedgets';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import styles from './css/Follow';

export default class Follow extends BaseComponent {
  _renderRightItem=()=>{
    return(
      <Image style={{width:24,height:24,backgroundColor:'#444',top:IS_X?59:15,position:"absolute",right:-10}}/>
    )
  }
  render() {
    const { navigation } = this.props;
    // navigation.setParams({
    //   visiable:false
    // });
    return (
        <View style={styles.container}>
            {/* <NavBar 
            navStyle={{backgroundColor:'#fff'}}
            titleStyle={{width:SCREEN_W-50}}
            rightItem={this._renderRightItem.bind(this)}
            navigation={navigation}  
            title={'关注'}/> */}
            {/* <FlatList
            keyExtractor={(item,index)=>'item'+index}
            renderItem={()=><RowItem/>}
            data={[-1,0,1,2,3,4]}/> */}
            <Text style={{marginTop:SCREEN_H/2,marginLeft:SCREEN_W/2}}>这是关注页面</Text>

        </View>

    );
  }
}

// class RowItem extends BaseComponent {
//   static propsTypes = {
//       rowData: PropTypes.any,
//       index: PropTypes.number
//   }
//   goToCoinDetail=()=>{
//       this.props.navigation&&this.goToComponent('RiskDetail',{title:'比特币'});
//   }
//   render(){
//       return(
//           <TouchableOpacity style={styles.cellStyle} onPress={this.goToCoinDetail.bind(this)}>
//               <Image style={styles.cellPhoto}/>
//               <Text style={styles.coinName}>  1ST/USDT</Text>
//               <Text style={styles.relateTopic}>相关话题 8</Text>
//               <Text style={styles.relateTopic}>相关情报 22</Text>
//               <Text style={styles.follow}>√关注</Text>
//           </TouchableOpacity>
//       )
//   }
// }

