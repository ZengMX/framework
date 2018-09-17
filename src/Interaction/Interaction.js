import React from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { BaseView,BaseComponent } from '../wedgets';
import styles from './css/Interaction';
type Props = {};
export default class Interaction extends BaseComponent<Props> {
  render() {
    const { navigation } = this.props;
    // navigation.setParams({
    //   visiable:false
    // });
    return (
        <BaseView screenStyle={{}}>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                这是互动页面
                </Text>
                <Text style={styles.instructions}>
                this is follow page!
                </Text>
                <Text style={styles.instructions}>
                instructions
                </Text>
            </View>
         </BaseView>
    );
  }
}

