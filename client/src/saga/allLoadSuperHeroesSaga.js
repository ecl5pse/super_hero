import { put } from 'redux-saga/effects';
import {createLoadSuperHeroesErrorAction,createLoadSuperHeroesSuccessAction} from '../action';

import {getAllSuperHeroes} from '../api/http';

export function* loadSuperHeroesSaga(action) {
  try {
    const { data } = yield getAllSuperHeroes();
    yield put( createLoadSuperHeroesSuccessAction( data ) );
  } catch ( e ) {
    yield put( createLoadSuperHeroesErrorAction( e ) );
  }
}