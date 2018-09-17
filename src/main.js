import Home from './home/Home';
import Follow from './Follow/Follow';
import Topic from './Topic/Topic';
import Interaction from './Interaction/Interaction';
import Mine from './Mine/Mine';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TabContainer = createBottomTabNavigator(
    {
      Home: { screen: Home, 
        navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '首页',
        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'ios-add' : 'ios-add-circle'}
                size={26}
                style={{color: tintColor}}
            />
        ),
    }},
      Follow: {  screen: Follow,
        navigationOptions:{
        tabBarPosition: 'bottom',
        tabBarLabel: '关注',
        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'ios-add' : 'ios-add-circle'}
                size={26}
                style={{color: tintColor}}
            />
        ),
    }},
      Topic: { screen: Topic,
        navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '话题',
        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'ios-add' : 'ios-add-circle'}
                size={26}
                style={{color: tintColor}}
            />
        ),
    }},
      Interaction: { screen: Interaction ,
        navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '互动',
        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'ios-add' : 'ios-add-circle'}
                size={26}
                style={{color: tintColor}}
            />
        ),
    }},
      Mine: { screen: Mine,
        navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '我的',
        showLabel:false,
        tabBarIcon: ({tintColor, focused}) => (
            <Icon
                name={focused ? 'ios-add' : 'ios-add-circle'}
                size={26}
                style={{color: tintColor}}
            />
        ),
    }},
    },
    {
      tabBarOptions: {
        activeTintColor: '#3e9ce9',
        inactiveTintColor: '#999999',
        showIcon: true,
        style: {
          backgroundColor: '#fff'
        },
        indicatorStyle: {
          opacity: 0
        },
        tabStyle: {
          padding: 0
        }
      }
    }
  );

  const App = createStackNavigator(
    {
      
      Index: { 
        screen: TabContainer,
        navigationOptions: ({ navigation }) => ({
          
        }),
      },
    },
    {
      initialRouteName: 'Index',
      mode:'card',
      navigationOptions: ({ navigation }) => ({
          // header:navigation.params.visiable?navigation.params.component:null,
          header:null,
      }),
    }
  );
  
  export default App;