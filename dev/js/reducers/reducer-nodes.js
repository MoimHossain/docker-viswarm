import * as ACTIONS from '../actions/actionTypes';

export default function (state=[], action) {
    switch(action.type) {
        case ACTIONS.GET_NODES: 
           return action.payload;
        case ACTIONS.UPDATE_NODE_LABELS:
           // For now, just return the current state
           // The actual label update will be reflected when nodes are reloaded
           return state;
        default:
           return state;
    }
    return state;
}
