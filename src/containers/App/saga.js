import { takeLatest, call, put } from 'redux-saga/effects';

import { getData, getCountryList, getShortLink } from '@domain/api';
import { showPopup, setLoading, setData, setCountryList, setShortLink } from '@containers/App/actions';
import { GET_DATA, GET_COUNTRY_LIST, GET_SHORTLINK } from '@containers/App/constants';

function* doGetData() {
  yield put(setLoading(true));
  try {
    const response = yield call(getData);

    if (response) {
      yield put(setData(response.data));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doGetCountryList(action) {
  yield put(setLoading(true));

  try {
    const response = yield call(getCountryList(action.url));
    if (response) {
      yield put(setCountryList(response));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}
function* doGetShortLink(action) {
  // console.log(action);
  yield put(setLoading(true));
  try {
    const response = yield call(getShortLink, action.url);

    console.log('response: \n', response.status);
    if (response) {
      yield put(setShortLink(response));
    }
  } catch (error) {
    console.log(error);
    yield put(showPopup('Error', error.response.data.message));
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(GET_DATA, doGetData);
  yield takeLatest(GET_COUNTRY_LIST, doGetCountryList);
  yield takeLatest(GET_SHORTLINK, doGetShortLink);
}
