import { takeEvery, call, put } from 'redux-saga/effects';
import { LOADER_DATA } from './action';
import { setData } from './action';

function fetchData() {
  return fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(res =>
    res.json()
  );
}

function* work() {
  const data = yield call(fetchData);
  yield put(setData(data));
}

export default function* watchLoadData() {
  yield takeEvery(LOADER_DATA, work);
}
