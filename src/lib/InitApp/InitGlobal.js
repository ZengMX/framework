// 存在的全局变量
//global.storage storage实例
import { Platform,Dimensions,PixelRatio } from 'react-native';
var {height,width} =  Dimensions.get('window');
// 使用平台判断
global.IS_IOS = Platform.OS == 'ios';
// APP启动时间
// global.APP_LAUNCH_TIME = new Date();
// 状态栏高度，当前仅用于android，ios固定为20dp
global.STATUS_HIGHT = 20;
// 屏幕宽高度
global.SCREEN_W = width;
global.SCREEN_H = height;
// 判断iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
global.IS_X = Platform.OS === 'ios' && 
((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) || 
(SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
// 1px线
global.PX_LINE = 1/PixelRatio.get();
