'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  InteractionManager,
  TouchableHighlight,
  FlatList,
  ActivityIndicator
} from 'react-native';
import BaseComponent from './BaseComponent';
import PropTypes from 'prop-types';
import { shallowEqualImmutable } from 'react-immutable-render-mixin';
import styles from './css/LXListView';
// import { resolve } from 'url';
// import { reject } from 'rsvp';

const loadingStatus = {
    'wait': '点击加载更多',
    'loading': '加载中...',
    'error': '加载失败，点击重新加载',
    'done': '已经没有更多了'
};

class LXListView extends BaseComponent {
    static defaultProps = {
        refreshing: true,
        autoLoadMore: true,
        dataSource: [],
    }
    static propTypes = {
        renderRow: PropTypes.func.isRequired,              // 抛出初始化单元格的方法
        autoLoadMore: PropTypes.bool,           // 初次载入时是否自动加载更多数据
        dataSource: PropTypes.array,            // 列表数据源
        fetchData: PropTypes.func.isRequired,	            // 加载数据方法
        refreshing: PropTypes.bool, 
    }
    constructor(props){
        super(props);
        this.state = {
            state:'wait',
            dataSource:props.dataSource,
            refreshing:props.refreshing
        }
        this.totalCount = 0;
        this.page = 0;
        this.done = false;
        this.isrefreshable = false;
        this.pullRefresh = this.pullRefresh.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        return !shallowEqualImmutable(this.props, nextProps)
            || !shallowEqualImmutable(this.state, nextState);
    }

    componentDidMount(){
        if(this.props.autoLoadMore){
            this.onRefresh();
        }
    }

    getItemLayout=(data, index)=>{

    }
    //下拉刷新
    onRefresh=()=>{
        // console.log('>>>>>>>>>>>>x');
        
        this.done = false;
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchData&&this.props.fetchData(1,(rows,currentCount,totalCount)=>{
                this.totalRowCount = currentCount;   // 当前加载出来的数据条数
                this.totalCount = totalCount; 
                let dataSource = [];
                if( rows!=null && rows!=undefined ){ // 请求下来新的数据时
                    dataSource = rows;
                } 
                this.setState({
                    dataSource: dataSource,
                    refreshing: false,
                    state : 'wait'
                });
                this.page = 0;
            })
        });
    }
    //加载更多数据
    pullRefresh=()=>{
        this.setState({
            state:'loading'
        })
        InteractionManager.runAfterInteractions(() => {
            this.props.fetchData&&this.props.fetchData(this.page+1,(rows,currentCount,totalCount)=>{
                console.log('1data',rows,this.page);
                new Promise((resolve,reject)=>{
                    this.totalRowCount = currentCount;   // 当前加载出来的数据条数
                    this.totalCount = totalCount; 
                    let dataSource = [];
                    if( rows!=null || rows!=undefined ){ // 请求下来新的数据时
                        if(this.page==0){
                            // console.log('2data');
                            dataSource = rows;
                        } else {
                            dataSource = this.state.dataSource.concat(rows);
                        }
                    }
                    // console.log('data',dataSource);
                    resolve(dataSource)
                }).then((dataSource)=>{
                    if(this.done){
                        this.setState({
                            state: 'done',
                            refreshing:false
                        });
                    } else {
                        this.setState({
                            state: 'wait',
                            dataSource: dataSource,
                            refreshing:false
                        });
                        if(this.totalRowCount>=this.totalCount){
                            this.done = true;
                        }
                    }
                    
                }).catch(()=>{
                    console.log('加载完了所有数据');
                })
                 
            },()=>{
                this.setState({
                    state:'error'
                })
            })
        });
    }

    _ListEmptyComponent=()=>{
        return(
            <View style={{width:SCREEN_W,height:50,justifyContent:'center'}}>
                <Text>暂无数据</Text>
            </View>
        )
    }

    _keykeyExtractor=(item,index)=>{
        return 'item'+index
    }

    _ListFooterComponent=()=>{
        let Footer = null;
        
        if(this.state.state == 'loading'){
            Footer = <View style={styles.loading}>
                <ActivityIndicator animating={true} size="small" />
                <Text style={{ marginLeft: 5, fontSize: 14 }}>
                    {loadingStatus[this.state.state]}
                </Text>
            </View>
        } else {
            Footer = <TouchableHighlight
                style={styles.otherFooter}
                underlayColor='#c8c7cc'
                disabled={this.state.state == 'done'}
                onPress={this.pullRefresh}>
                <Text style={{ fontSize: 14 }}>
                    {loadingStatus[this.state.state]}
                </Text>
            </TouchableHighlight>
        }
        return(
            Footer
        )
    }

    _handleEndReached=({distanceFromEnd})=>{
        console.log('HHHHHHHHHH',distanceFromEnd);
        if(distanceFromEnd>-100){
            this.page++;
            this.setState({
                refreshing:true
            })
            this.pullRefresh();
        }
    }
       

    render(){
        return(
            <FlatList
            {...this.props}
            keyExtractor={this._keykeyExtractor}
            ref={list => this.list = list}
            onRefresh={this.onRefresh.bind(this)}
            ListFooterComponent={this._ListFooterComponent}
            refreshing={this.state.refreshing}
            renderItem={this.props.renderRow}
            onEndReachedThreshold={0.1}
            onEndReached={this._handleEndReached}
            removeClippedSubviews={true} 
            data={this.state.dataSource}/>
        )
    }
}

export default LXListView;
// ListEmptyComponent={this._ListEmptyComponent}
// removeClippedSubviews={true}            // 大数据列表默认启用该属性，可优化性能