
import * as types from '../types/Home';

const initialState = {
};

export default function Home(state = initialState, action) {
  switch (action.type) {
    case types.HOME_DATAS:
      return Object.assign({}, state,action.data);
    default:
      return state;
  }
}
