import producer from 'immer';
const INITIAL_STATE = {
    user: null,
}

export default function user(state=INITIAL_STATE, action) {
    return producer(state, draft=>{
        switch(action.type) {
            case '@user/UPDATE_PROFILE_REQUEST': {
                draft.user = action.payload.data;
                break;
            }
            case '@auth/SIGN_IN_SUCCESS': {
                draft.user = action.payload.user;
                break;
            }
            case '@auth/SIGN_OUT_REQUEST': {
                draft.user = null;
                break;
            }
            default: {
                
            }
        }
    });
};