import * as ACTIONS from '../actions/actionTypes';

export default function (state=[], action) {
    switch(action.type) {
        case ACTIONS.GET_EISEN: 
           return action.payload;
        default:
           return state;
    }
    return state;
}
