import { SET_PATH_STATE } from '../Actions';

export const pathState = (state = {}, action) => {
    switch(action.type) {
        case SET_PATH_STATE:
            const {history, id, tag} = action.payload
            return {...state, history, id, tag};
        default: return state;
    }
};