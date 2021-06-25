import { selectRight, selectLeft} from '../../store/action';

export const rubles = [
  {
    CharCode: 'RUB',
    Nominal: 1,
    Name: 'Рубли',
    ID: '1',
    Value: 1
  }
];

export const getItem = (item, list) =>
  item === 'RUB' ? rubles[0] : list.filter(i => i.CharCode === item)[0];

export const selectVal = (side, value, dispatch) => {
  return side === 'right'
    ? dispatch(selectRight([value]))
    : dispatch(selectLeft([value]));
};

export const charCodeValue = item =>
  item.length > 0 ? item[0].CharCode : 'RUB';

export const getExchengeDevide = (left, right) =>
  left.length > 0 && right.length > 0 ? left[0].Value / right[0].Value : null;

export const getExchengeMultiply = (left, right) =>
  left.length > 0 && right.length > 0 ? right[0].Value / left[0].Value : null;

export const chooseObj = (side, event, left, right) => {
  return side === 'left'
    ? {
        leftInput: event.target.value,
        rightInput: event.target.value / getExchengeMultiply(left, right)
      }
    : {
        leftInput: event.target.value * getExchengeMultiply(left, right),
        rightInput: event.target.value
      };
};

export const leftVal = left =>
  left.length > 0 ? left[0].Value : rubles[0].Value;
export const rightVal = right =>
  right.length > 0 ? right[0].Value : rubles[0].Value;

export const valute = ['RUB', 'USD', 'EUR', 'HUF'];
export const getValueFromItem = (item, valut) =>
  item === 'HUF' ? valut : item;
