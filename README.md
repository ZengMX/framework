# 新搭建的RN导航框架
# 该框架基于0.55.4版本的RN

引入了导航架构react-navigation v2版本，其中有许多问题，其中之一就是tabnavigation这一层的子项无法启用
static navigationOptions = ({ navigation }) => ({
});
或者说是启用了无效。
