import * as ACTIONS from '../actions/actionTypes';

export default function (state = null, action) {
    switch (action.type) {
        case ACTIONS.SELECT_ARTIFACT:
            return action.payload;
            break;
    }
    return state;
}
