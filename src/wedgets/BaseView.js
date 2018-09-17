import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import PropTypes from 'prop-types';

import SaveAreaView from 'react-native-safe-area-view';

type Props = {};

export default class BaseComponent extends Component<Props> {
  static defaultProps = {
    
  }

  // 属性验证
	static propTypes = {

	};
	// 属性默认值
	static defaultProps = {

	};


  render() {
    return (
      <SaveAreaView>
        <View style={[styles.container,this.props.screenStyle]}>
          {this.props.children}
        </View>
      </SaveAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_W,
    height: SCREEN_H,
    justifyContent: 'center',
    alignItems: 'center',
  }
});