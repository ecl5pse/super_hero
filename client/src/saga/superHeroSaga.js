import { put } from 'redux-saga/effects';
import {  createSuperHero } from '../api/http/index';
import { createAuthErrorAction, createAuthSuccessAction } from '../action';
import {toast} from "react-toastify";
import {toastOptions} from "../utils";


export function * signUpSaga ({ values }) {
  try {
    const {data} = yield createSuperHero(values);
      yield put(createAuthSuccessAction(data));
      alert('Ok')
  } catch (e) {
    yield put(createAuthErrorAction(e.response));
    toast.error('error' ,toastOptions);
  }
}