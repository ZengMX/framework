import * as types from '../types/Home';

function setHomeData (data){
    return {
        type: types.HOME_DATAS,
        data
    };
}

export function getHomeData (homeData) {
    return (dispatch) => {
        dispatch(setHomeData(homeData));
        return homeData;
    }
}