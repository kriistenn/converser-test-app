import React from 'react';
import { getItem } from './utils';
import style from './converter.module.css'

export default function ValuteInputsItem({
  item,
  onChange,
  isOpenBlock,
  flag,
  obj,
  list
}) {
  const showBlock =
    flag === item ? (
      <div className={style["converter-from-valute-item-block"]}>{obj.Name}</div>
    ) : null;

  const handleChange = ({ currentTarget }, list) => {
    isOpenBlock(currentTarget.textContent);
    onChange(getItem(currentTarget.textContent, list));
  };

  return (
    <li
      className={style["converter-from-valute-item"]}
      key={item}
      onClick={event => handleChange(event, list)}
    >
      {showBlock}
      {item}
    </li>
  );
}
