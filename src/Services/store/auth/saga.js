import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../history';
import { signSuccess, signFailure } from './action';

import api from '../../api';

export function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const res = yield call(api.post, 'sessions', {
            email,
            password
        });

        const { token, user } = res.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        yield put(signSuccess(token, user));

        history.push('/dashboard');
    } catch (err) {
        yield put(signFailure());
        toast.error('Erro ao fazer o login, verifique os dados informados!');
        console.log(err);
    }
}

export function setToken({ payload }) {
    if (!payload) return;
    
    const { token } = payload.auth;
    api.defaults.headers.authorization = `Bearer ${token}`;
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);