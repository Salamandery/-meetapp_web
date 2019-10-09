import producer from 'immer';
const INITIAL_STATE = {
    user: null,
}

export default function user(state=INITIAL_STATE, action) {
    switch(action.type) {
        case '@auth/SIGN_IN_SUCCESS': {
            return producer(state, draft=>{
                draft.user = action.payload.user;
            });
        }
        default: {
            return state;
        }
    }
};