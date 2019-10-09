import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../history';
import { signSuccess } from './action';

import api from '../../api';

export function* signIn({ payload }) {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', {
        email,
        password
    });

    const { token, user } = res.data;

    yield put(signSuccess(token, user));

    history.push('/dashboard');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
]);