import React, { useRef, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Modal from './ModalWithValute/Modal';
import { newGetData } from '../../store/selectors';
import ValuteInputsItem from './ValuteInputsItem';
import { valute, getValueFromItem, getItem } from './utils';
import style from './converter.module.css'

const ValuteInput = ({ onChange, newGetData }) => {
  const ref = useRef();
  const [modalWindow, setModalWindow] = useState(false);
  const [flag, setflag] = useState(null);
  const [valut, setValute] = useState('HUF');
  const list = Object.values({ ...newGetData.Valute });


  const getVal = el => {
    setModalWindow(false);
    setflag(el.CharCode);
    return setValute(el.CharCode);
  };

  const isOpenBlock = val => {
    setflag(val);
    return ['RUB', 'USD', 'EUR'].includes(val) ? setValute('HUF') : valut;
  };

  const insertModalWithValute = modalWindow ? (
    <Modal onChange={onChange} getVal={getVal} />
  ) : null;

  return (
    <div ref={ref} className={style["converter-from"]}>
      <ul className={style["converter-from-valute-list"]}>
        {valute.map(item => {
          const getObjectfromList = getItem(
            getValueFromItem(item, valut),
            list
          );
          return (
            <ValuteInputsItem
              onChange={onChange}
              item={getValueFromItem(item, valut)}
              flag={flag}
              isOpenBlock={isOpenBlock}
              list={list}
              obj={getObjectfromList}
            />
          );
        })}
        <li
          className={style["converter-from-valute-item"]}
          onClick={() => setModalWindow(true)}
        >
          ▼
        </li>
        {insertModalWithValute}
      </ul>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  newGetData
});

export default connect(mapStateToProps)(ValuteInput);
