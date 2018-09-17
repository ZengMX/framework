import React from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { BaseView,BaseComponent } from '../wedgets';
import PropTypes from 'prop-types';
import styles from './css/Mine';

export default class Mine extends BaseComponent {
  render() {
    const { navigation } = this.props;
    // navigation.setParams({
    //   visiable:false
    // });
    return (
        <View style={styles.container}>
            <Image style={styles.topbg}/>
            <ScrollBg navigation={navigation}/>
        </View>
    );
  }
}

class ScrollBg extends BaseComponent {
  render(){
    // let items = ['我的提问','我的回答','我的曝光','我的参与','我的钱包'];
    // let bottomItems = ['当前版本','设置','关于我们']
    return<ScrollView style={{width:SCREEN_W,height:SCREEN_H,position:'absolute',backgroundColor:'rgba(0,0,0,0)'}} contentContainerStyle={{flexDirection:'column',alignItems:'center',backgroundColor:'rgba(0,0,0,0)'}}>
        {/* <View style={styles.mineView}>
            <View style={styles.topInfosView}>
                <Text style={styles.userName}>未登录</Text>
                <Text style={styles.signStyle}>立即<Text onPress={()=>{
                  this.goToComponent('Login',{});
                }} style={{color:'#5A8BEB'}}>登录</Text>，体验更多功能</Text>
            </View>
            <View style={{marginTop:5}}>
                {items.map((item,index)=>{
                    return <UserItem itemTitle={item}/>
                })}
            </View>

            <View style={{marginTop:5}}>
                {bottomItems.map((item,index)=>{
                    return <UserItem itemTitle={item}/>
                })}
            </View>
        </View>
        <Image style={styles.photo}/> */}

            <Text style={{marginTop:SCREEN_H/2,marginLeft:SCREEN_W/2}}>这是关注页面</Text>


    </ScrollView>
  }
}
//每个button的模板
// class UserItem extends BaseComponent {
//   static propsTypes = {
//     itemTitle:PropTypes.string
//   }
//   static defaultProps = {
//     itemTitle:''
//   }
//   render(){
//     const {itemTitle} = this.props;
//     return<View style={styles.userItem}>
//         <Image/>
//         <TouchableOpacity style={styles.itemView}>
//             <Text style={styles.itemTitle}>{itemTitle}</Text>
//             <Image style={styles.arrow}/>
//         </TouchableOpacity>
//     </View>
//   }
// }

