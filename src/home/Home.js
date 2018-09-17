import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView, { ScrollableTabBar,DefaultTabBar } from 'react-native-scrollable-tab-view';

import * as categoryCreators from '../actions/Home';

import { BaseComponent,NavBar } from '../wedgets';
// import Find from './Find';
// import RiskAssessCenter from './RiskAssess';
// import InfomationCenter from './Information';
// import styles from './css/Home';
// import Storage from '../lib/AsyncStorageUtil/AsyncStorageUtil';  

type Props = {};
class App extends BaseComponent<Props> {
    constructor(props){
        super(props);
        this.state = {
            tabShow:false
        }
        this.keywords = [];
    }
    componentDidMount() {
        
        setTimeout(() => {
          this.setState({
              tabShow: true
          });
        }, 100)
    }
    
    render() {
        const { navigation } = this.props;
        let home = this.props.Home || '';
        if (this.state.tabShow){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {/* <View style={styles.navBarView}>
                    <View style={styles.searchView}>
                        <View style={styles.searchBtn}>
                            <Image/>
                            <Text onPress={()=>{
                                Storage.getData('keywords').then((data)=>{
                                    this.keywords = typeof(data)=='string'?data.split(','):[];
                                    this.goToComponent('Search',{
                                        keywords:this.keywords
                                    });
                                });
                                
                            }} style={styles.searchTitle}>请输入数字货币名进行查询</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.qustionBtn} onPress={()=>{
                        
                    }}>
                        <Text style={styles.qustionTitle}>提问</Text>
                    </TouchableOpacity>
                </View> */}
                <Text>HOME</Text>
                {/* <ScrollableTabView 
                tabBarUnderlineStyle={styles.underLine} 
                tabBarActiveTextColor={"#404760"}
                tabBarInactiveTextColor={"#404760"}
                renderTabBar={() => <DefaultTabBar/>}
                style={styles.scrollContent}>
                    <RiskAssessCenter tabLabel={'风评中心'} navigation={navigation}/>
                    <Find tabLabel={'发现'} navigation={navigation}/>
                    <InfomationCenter tabLabel={'情报中心'} navigation={navigation}/>
                </ScrollableTabView> */}
                
            </View>
            
        );} else {
            return <View/>
        }
    }
}

const mapStateToProps = (state) => {
    const { Home } = state;
    return {
        Home
    };
};
  
const mapDispatchToProps = (dispatch) => {
    const categoryActions = bindActionCreators(categoryCreators, dispatch);
    return {
      categoryActions
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
  