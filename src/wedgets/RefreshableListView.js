/**
  * Props:
  *    pagination         : true, // 是否分页, 默认true
  *    autoLoadMore       : true,// 是否自动加载下一页, 默认true
  *    autoRefresh        : false,// 是否自动加载, 默认false
  *    displayStatus   : {
  *        'wait':'点击加载更多',
  *        'loading':'加载中...',
  *        'error':'加载失败，点击重新加载',
  *        'done':'已经没有更多了'
  *    },
  *  // 加载数据方法, 回传page给加载函数，
  *  // 加载成功回调接受rows(新增的row)currCount(当前数据条数，兼容一个数据多个row的情况)totalCount(总数据条数)
  *  fetchData  : function(page, function(rows, currCount, totalCount){
  *         // 成功回调
  *  }, function(){
  *         // 错误回调
  *  })
  *
  *  注: 只有fetchData参数是必须的。
  *  提供的数据必须是数组，数据中必须提供key字段即item.key。
  *  renderRow相比以前回调的参数只有item, index。
  *  separator下划线
  *  新增了renderHead可以定义头部的view
 */
'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
  TouchableHighlight,
  FlatList,
  ActivityIndicator
} from 'react-native';
// const FlatList = require('./component/FlatList');
const infoLog = require('infoLog');
class ListViewComponent extends React.PureComponent {
  render() {
    return (
      <View {...this.props}>{this.props.children}</View>
    );
  }
}

const SEPARATOR_HEIGHT = StyleSheet.hairlineWidth;
function getItemLayout(data: any, index: number) {
  const [length, separator, header] = [84, SEPARATOR_HEIGHT, 80];
  return { length, offset: (length + separator) * index + header, index };
}

class RefreshableListView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.props.dataSource == undefined ? [] : this.props.dataSource,
      fixedHeight: true,
      status: 'wait',
      isRefreshing: false,
      isMyriad: false
    }
    this.totalCount = 0;
    this.page = 1;
    this.listViewHeight = 0;
    this.filled = false;
    this.loadingNum = 0;
    this._onRefresh = this._onRefresh.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
    this._onLoadMore = this._onLoadMore.bind(this);
    this._onPullRefresh = this._onPullRefresh.bind(this);
    this._handleEndReached = this._handleEndReached.bind(this);
    this._getItemLayout = this._getItemLayout.bind(this);
  }
  static propTypes = {
    renderHead: React.PropTypes.func,              //自定义head
    renderRow: React.PropTypes.func.isRequired,    //自定义每行item
    separator: React.PropTypes.func,            //自定义item的分隔线
    refreshable: React.PropTypes.bool, 				  // 是否下拉, 默认true
    pagination: React.PropTypes.bool,					  // 是否分页, 默认true
    fetchData: React.PropTypes.func.isRequired,		// 加载数据方法
    dataSource: React.PropTypes.array.isRequired,				 // 数据
    autoLoadMore: React.PropTypes.bool,					// 自动加载更多(不需要点击), 默认true
    autoRefresh: React.PropTypes.bool					// 进入页面自动加载
  }
  static defaultProps = {
    refreshable: true,
    pagination: true,
    autoLoadMore: true,
    autoRefresh: false,
    dataSource: [],
    displayStatus: {
      'wait': '点击加载更多',
      'loading': '加载中...',
      'error': '加载失败，点击重新加载',
      'done': '已经没有更多了'
    },
    renderRow: () => { },
    separator: () => { }
  }
  componentDidMount() {
    if (this.props.autoRefresh) {
      this.setState({ isRefreshing: true });
      this._onPullRefresh();
    }
  }
  _onPullRefresh() {
    this.page = 0;
    this.filled = false;
    this.setState({
      isRefreshing: true,
    });
    this._onRefresh();
  }
  _onLoadMore() {
    if (this.state.status !== 'loading' && this.state.isRefreshing === false) {
      this.setState({ status: 'loading' });
      console.log("is LoadMore------", this.state.status);
      this._onRefresh();
    }
  }
  _handleEndReached() {
    console.log("_handleEndReached");//ios开始加载触发2次，android开始滚动的时候触发
    if (this.state.dataSource.length > 0 &&
      this.props.autoLoadMore && this.props.pagination && this.state.status != 'done') {
      this._onLoadMore();
    }
  }
  _onRefresh() {
    InteractionManager.runAfterInteractions(() => {
      this.props.fetchData(this.page + 1, (rows, currCount, totalCount) => {
        this.totalRowCount = currCount;
        this.totalCount = totalCount;
        if (rows != null || rows != undefined) {
          if (this.page == 0) {
            if (rows.length == 0) {
              this.setState({
                isMyriad: true,
              });
            } else {
              this.setState({
                isMyriad: false,
              });
            }
            this._setRows(rows);
          } else if (rows.length > 0) {
            this._appendRows(rows);
          }
        } else {
          this.setState({
            status: this.totalRowCount >= this.totalCount ? 'done' : 'wait',
            isRefreshing: false
          });
        }
        this.totalCount = totalCount;
        this.page++;
      }, () => {
        this.setState({
          status: 'error',
          isRefreshing: false
        });
      });
    });
  }
  _appendRows(rows) {
    let temp = this.state.dataSource;
    rows.map((item) => {
      temp.push(item);
    });
    this.setState({
      status: this.totalRowCount >= this.totalCount ? 'done' : 'wait',
      isRefreshing: false,
      dataSource: temp
    });
    console.log("appendRows dataSource", this.state.dataSource);
    // temp = [];
    // let temp = [];
    // temp = this.state.dataSource.concat(rows);
    // this.setState({
    //   status: this.totalRowCount >= this.totalCount ? 'done' : 'wait',
    //   isRefreshing: false,
    //   dataSource: temp
    // });
    // temp = [];
  }
  _setRows(rows) {
    this.setState({
      status: this.totalRowCount >= this.totalCount ? 'done' : 'wait',
      isRefreshing: false,
      dataSource: rows
    });
    console.log("setRows dataSource", this.state.dataSource);
  }
  // 手动重新加载数据
  reloadData() {
    this._onPullRefresh();
  }
  updateRowAt(index, rowData) {//外部调用之后，需要在外部重新setState，这里的setState通过测试好像没有起效？
    if (index < 0 || index > this.state.dataSource.length || rowData == undefined || rowData == null) {
      return;
    }
    const rows = this.state.dataSource;
    rows[index] = rowData;
    this.setState({
      dataSource: rows
    });
  }
  setPage(page) {
    this.page = page;
  }
  _renderHeader() {
    if (this.props.renderHead) {
      return (
        <ListViewComponent>
          {this.props.renderHead()}
        </ListViewComponent>
      );
    } else {
      return null;
    }
  }
  _renderItem = ({item, index}) => {
    console.log('this.props.renderRow', item.key, "index", index);
    if (this.props.renderRow) {
      return (
        <ListViewComponent key={item.key}>
          {this.props.renderRow(item, index)}
        </ListViewComponent>
      );
    } else {
      return null;
    }
  };
  _renderSeparator() {
    if (this.props.separator) {
      return (
        <ListViewComponent>
          {this.props.separator()}
        </ListViewComponent>);
    } else {
      return null;
    }
  }
  _renderFooter() {
    if (this.state.isMyriad == true) {
      return (
        <View style={{ height: 300, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./res/myriad.png')} style={{ height: 60, width: 80, resizeMode: Image.resizeMode.contain }} />
          <Text style={{ color: '#B8B8B8', fontSize: 13, marginTop: 10 }}>暂无数据</Text>
        </View>
      )
    } else {
      if (this.state.dataSource.length > 0 && this.props.pagination) {
        if (this.state.status == 'loading') {
          return (
            <View style={{
              height: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <ActivityIndicator animating={true} size="small" />
              <Text style={{ marginLeft: 5, fontSize: 14 }}>
                {this.props.displayStatus[this.state.status]}
              </Text>
            </View>
          )
        } else if (!this.props.autoLoadMore || !this.filled || this.state.status == 'done' || this.state.status == 'error') {
          return (
            <TouchableHighlight
              style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
              underlayColor='#c8c7cc'
              disabled={this.state.status == 'done'}
              onPress={this._onLoadMore}>
              <Text style={{ fontSize: 14 }}>
                {this.props.displayStatus[this.state.status]}
              </Text>
            </TouchableHighlight>
          )
        }
      }
    }
    return null;
  }
  _onChangeScrollToIndex = (text) => {
    this._listRef.scrollToIndex({ viewPosition: 0.5, index: Number(text) });
  };
  render() {
    return (
      <FlatList
        scrollEnabled={this.state.isRefreshing == true ? false : true}
        HeaderComponent={this._renderHeader}
        FooterComponent={this._renderFooter}
        ItemComponent={this._renderItem}
        SeparatorComponent={this._renderSeparator}
        data={this.state.dataSource}
        disableVirtualization={true}
        legacyImplementation={false}
        getItemLayout={this._getItemLayout}
        onRefresh={this._onPullRefresh}
        refreshing={this.state.isRefreshing}
        onEndReached={this._handleEndReached}
        onEndReachedThreshold={1}
        ref={this._captureRef}
        shouldItemUpdate={this._shouldItemUpdate}
        onLayout={(event) => {
          var layout = event.nativeEvent.layout;
          this.listViewHeight = layout.height;
        }}
        onScroll={e => {
          console.log('onScroll', e);
        }}
        onContentSizeChange={(width, height) => {
          console.log("onContentSizeChange onContentSizeChange", height);
          if (height >= this.listViewHeight && this.listViewHeight != 0) {
            console.log("onContentSizeChange", height);
            this.filled = true;
          } else {
            this.filled = false;
          }
        }}
      />
    );
  }
  _captureRef = (ref) => { this._listRef = ref; };
  _shouldItemUpdate(prev, next) {
    return prev.item !== next.item;
  }
  _getItemLayout = (data: any, index: number) => {
    return getItemLayout(data, index);
  };
  _listRef: FlatList;
}

export default RefreshableListView;