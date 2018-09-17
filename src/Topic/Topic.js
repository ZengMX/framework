import React from 'react';
import {
    Text,
    Image,
    TouchableOpacity,
    View
} from 'react-native';
import PropTypes from 'prop-types';
import { BaseComponent,LXListView } from '../wedgets';
import Storage from '../lib/AsyncStorageUtil/AsyncStorageUtil';  
import styles from './css/Topic';

export default class Topic extends BaseComponent {
    constructor(props){
      super(props);
    //   this.data = {result:[1,{image:'wreewrwe'},{image:'wreewrwe'},{image:'wreewrwe'},5,6,7,8,9,10],totalCount:21}
    }
    // fetchData=(page, success, error)=>{
    //   // console.log('page>>>>',page);
    //   setTimeout(()=>{
    //       success(this.data.result,(page-1)*10+this.data.result.length,this.data.totalCount);
    //   },2000)
          
    // }
    //实例化列表行
    // renderRow=({item,index})=>(
    //     <RowItem rowData={item} index={index} navigation={this.props.navigation}/>
    // )
    render() {
        const { navigation } = this.props;
        // navigation.setParams({
        //   visiable:false
        // });
        return (
            <View style={styles.container}>
                {/* <CustomBar navigation={navigation}/>
                <Head onChangeTab={()=>{ this.data={result:[1,23,2,4],totalCount:6};this.list.onRefresh()}}/>
                <LXListView
                ref={list=>this.list=list}
                renderRow={this.renderRow}
                fetchData={this.fetchData.bind(this)}/> */}
            <Text style={{marginTop:SCREEN_H/2,marginLeft:SCREEN_W/2}}>这是话题页面</Text>

            </View>
        );
    }
}

// class RowItem extends BaseComponent {
//   static propsTypes = {
//       rowData: PropTypes.any,
//       index: PropTypes.number
//   }
//   static defaultProps = {
//       index:0
//   }
//   render(){
//       let content = (
//           <View style={styles.cellStyle}>
//               <View style={styles.cellTitle}>
//                   <Text style={styles.titleTxt}>投资什么样的数字货币才有价值？</Text>
//               </View>
//               <View style={styles.authorInfo}>
//                   <View style={styles.contentView}>
//                       <Text style={styles.author} numberOfLines={4}>
//                       选对了价值币，只要赶上牛市，那就是十倍、百倍甚至是千倍
//                       的身价，什么会所嫩模都是小意思。然而投资错了币，被套牢
//                       或是割了韭菜都是小事，最怕的就是项目捐款跑路，那才是血本
//                       想哭无归
//                       </Text>
//                       {this.props.rowData&&this.props.rowData.image&&this.props.rowData.image.length>0&&<Image style={styles.contentImg}/>}
//                   </View>
                      
//                   <View style={styles.bottomView}>
//                       <Text style={styles.dateLab}>阅读量：123  评论数：321</Text>
//                       <Image/>
//                   </View>
//               </View>
//           </View>
//       )
      
//       return(
//           content
//       )
//   }
// }

// class CustomBar extends BaseComponent{
//     constructor(props){
//       super(props);
//       this.keywords = '';
//     }
//     render(){
//         return(
//         <View style={styles.navBarView}>
//             <View style={styles.searchView}>
//                 <View style={styles.searchBtn}>
//                     <Image/>
//                     <Text onPress={()=>{
//                         Storage.getData('keywords').then((data)=>{
//                             this.keywords = typeof(data)=='string'?data.split(','):[];
//                             this.goToComponent('Search',{
//                                 keywords:this.keywords
//                             });
//                         });
//                     }} style={styles.searchTitle}>请输入数字货币名进行查询</Text>
//                 </View>
//             </View>
//             <TouchableOpacity style={styles.qustionBtn} onPress={()=>{

//             }}>
//             <Text style={styles.qustionTitle}>提问</Text>
//             </TouchableOpacity>
//         </View>
//         )
//     }
// }

// class Head extends BaseComponent {
//   constructor(props){
//       super(props);
//       this.state = {
//           sortIndex:0
//       }
//   }

//   selectSortType=(index)=>{
//       this.setState({
//           sortIndex:index
//       });
//       this.props.onChangeTab&&this.props.onChangeTab(index);
//   }
//   render(){
//       let hotStyle = this.state.sortIndex == 0?styles.onSortStyle:styles.offSortStyle;
//       let allStyle = this.state.sortIndex == 1?styles.onSortStyle:styles.offSortStyle;
//       let tjUnderLine = this.state.sortIndex == 0?styles.online:styles.offline;
//       let newUnderLine = this.state.sortIndex == 1?styles.online:styles.offline;
//       return(
//           <View style={styles.riskHead}>
//               <TouchableOpacity style={styles.tabItem} onPress={this.selectSortType.bind(this,0)}>
//                   <View style={styles.tabView}> 
//                       <Image/>
//                       <Text style={hotStyle}>推荐</Text>
//                   </View>
//                   <View style={tjUnderLine}/>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.tabItem} onPress={this.selectSortType.bind(this,1)}>
//                   <View style={styles.tabView}> 
//                       <Image/>
//                       <Text style={allStyle}>最新</Text>
//                   </View>
//                   <View style={newUnderLine}/>
//               </TouchableOpacity>
//           </View>
//       );
//   }
// }