import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../api';
import { updateProfileSuccess, updateProfileFailure } from './action';
export function* updateProfile({ payload }) {
    console.log(payload)
    try {
        const { name, email, ...rest} = payload.data;
        const profile = Object.assign(
            { name, email },
            rest.oldPassowrd ? rest : {},
        );

        const res = yield call(api.put, 'users', profile);

        toast.success('Perfil atualizado com sucesso');

        yield put(updateProfileSuccess(res.data));
    } catch (err) {
        yield put(updateProfileFailure());
        toast.error('Houve algum problema ao atualizar seu perfil, confira os dados informados');
        console.log(err);
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
]);