import React from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import PropsType from 'prop-types';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';
import Icon from 'react-native-vector-icons/Ionicons';
import BaseComponent from './BaseComponent';
import styles from './css/LXNavBar';

export default class LXNavBar extends BaseComponent {
    static defaultProps = {
        title : '',
        navStyle : {},
        titleStyle : {},
        backColor : 'gray',
        customBar : undefined,
        showRightItem : true,
        title : '',
        rightItem : ()=>{return<View/>}
    }

    static propTypes = {
        title : PropsType.string,
        navStyle : PropsType.object,
        titleStyle : PropsType.object,
        backColor : PropsType.string,
        customBar : PropsType.func,
        showRightItem : PropsType.bool,
        title : PropsType.string,
        rightItem : PropsType.func,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualImmutable(this.props, nextProps)
            || !shallowEqualImmutable(this.state, nextState);
    }

    render(){
        const {navigation,navStyle,titleStyle,rightItem,title,customBar,backColor} = this.props;
        // console.log('item:::::',rightItem);
        // let rightBarItem = rightItem===undefined?(<View/>):rightItem;
        let Nav = (IS_IOS?<View style={[styles.navStyle,navStyle]}>
            <TouchableOpacity style={styles.navLeftBtn} onPress={()=>{
                navigation.goBack();
            }}>
                <Icon name='ios-arrow-back'
                size={30}
                color={backColor}
                style={{marginLeft:13}}/>
            </TouchableOpacity>
            <View style={[styles.titleView,titleStyle]}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                {rightItem()}
            </View>
            
        </View>:<View style={navStyle}>

        </View>);
        //自定义导航
        if(customBar!=undefined){
            Nav = customBar;
        }


        return (Nav)
    }
}