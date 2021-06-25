import React, { useState, useEffect } from 'react';
import PageWrapper from '../PageWrapper'
import { connect, useDispatch } from 'react-redux';
import { Input } from 'antd';
import { createStructuredSelector } from 'reselect';
import { left, right } from '../../store/selectors';
import ValuteInput from './ValuteInput';
import {
  charCodeValue,
  selectVal,
  getExchengeDevide,
  getExchengeMultiply,
  chooseObj,
  leftVal,
  rightVal
} from './utils';
import style from './converter.module.css'

const ComponentInputs = (props) => {
    const dispatch = useDispatch();
    const { left, right } = props;
    const [inputVal, setInputVal] = useState({
      leftInput: '',
      rightInput: ''
    });
  
    const { leftInput, rightInput } = inputVal;
  
    useEffect(() => {
      setInputVal({
        leftInput: inputVal.leftInput,
        rightInput: (inputVal.leftInput * rightVal(right)) / leftVal(left)
      });
    }, [left]);
  
    useEffect(() => {
      setInputVal({
        leftInput: inputVal.leftInput,
        rightInput: inputVal.leftInput * leftVal(right)
      });
    }, [right]);
  
    const getValueFromInput = side => event =>
      setInputVal(chooseObj(side, event, left, right));
  
    const onChange = side => value => selectVal(side, value, dispatch);
  
    return (
           <PageWrapper>
                <div className={style["converter"]}>
      <div className={style["converter-block"]}>
        <div className={style["converter-block-head"]}>
          <ValuteInput onChange={onChange('left')} />
          <ValuteInput onChange={onChange('right')} />
        </div>
        <div className={style["converter-block-input"]}>
          <Input
            placeholder="У меня есть"
            type="number"
            value={leftInput}
            onChange={getValueFromInput('left')}
          />
          <Input
            placeholder="Я получу"
            type="number"
            value={rightInput}
            onChange={getValueFromInput('right')}
          />
        </div>
      </div>
      {inputVal ? (
        <div className={style["converter-info"]}>
          <div className={style["converter-info-left"]}>
            <p className={style["converter-info-left-from"]}>
              1{' '}
              {left !== undefined || left.length > 0
                ? charCodeValue(left)
                : 'RUR'}{' '}
              =&nbsp;
            </p>
            <p className={style["converter-info-left-to"]}>
              {getExchengeDevide(left, right)}
              &nbsp;
              {right !== undefined || right.length > 0
                ? charCodeValue(right)
                : 'RUR'}
            </p>
          </div>
          <div className={style["converter-info-right"]}>
            <p className={style["converter-info-right-from"]}>
              1&nbsp;
              {right !== undefined || right.length > 0
                ? charCodeValue(right)
                : 'RUR'}{' '}
              =&nbsp;
            </p>
            <p className={style["converter-info-right-to"]}>
              {getExchengeMultiply(left, right)}
              &nbsp;
              {left !== undefined || left.length > 0
                ? charCodeValue(left)
                : 'RUR'}
            </p>
          </div>
        </div>
      ) : null}
    </div>
    </PageWrapper>
    )
}

const mapStateToProps = createStructuredSelector({
    left,
    right
});


export default connect(mapStateToProps)(React.memo(ComponentInputs));
