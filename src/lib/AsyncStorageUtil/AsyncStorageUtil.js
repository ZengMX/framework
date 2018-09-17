import {AsyncStorage} from 'react-native';

async function saveData(key,data){
    console.log('HHHHHH',key,data);
    AsyncStorage.setItem(key,data,(error)=>{
        if (error) {
            alert('存储失败');
        } else  {
            console.log('存储成功');
        }
    })
}

async function getData(key){
    // console.log('HHHHHH',key);
    let data = await AsyncStorage.getItem(key,(error)=>{
        if(error){
            alert('获取失败');
        } else {
            console.log('获取成功');
        }
    })
    return data;
}

async function deleteData(key){
    // console.log('HHHHHH',key);
    AsyncStorage.removeItem(key,(error)=>{
        if(error){
            alert('删除失败');
        } else {
            console.log('删除成功');
        }
    })
}

async function clearData(){
    AsyncStorage.clear((error)=>{
        if(error){
            alert('删除失败');
        } else {
            console.log('删除成功');
        }
    })
}

exports.saveData = saveData;
exports.getData = getData;
exports.deleteData = deleteData;
exports.clearData = clearData;

module.exports = exports;