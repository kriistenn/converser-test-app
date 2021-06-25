import {
  GETED_DATA,
  LEFT_ITEM,
  RIGHT_ITEM
} from './action';
import { rubles } from '../components/Converter/utils';


const initialState = {
  data: {},
  selectItem: {
    leftItem: rubles,
    rightItem: rubles
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GETED_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    case LEFT_ITEM: {
      return {
        ...state,
        selectItem: {
          leftItem: action.payload,
          rightItem: state.selectItem.rightItem
        }
      };
    }
    case RIGHT_ITEM: {
      return {
        ...state,
        selectItem: {
          leftItem: state.selectItem.leftItem,
          rightItem: action.payload
        }
      };
    }
    default:
      break;
  }

  return state;
};
