import * as ACTIONS from '../actions/actionTypes';

export default function (state=[], action) {
    switch(action.type) {
        case ACTIONS.GET_SERVICES: 
           return action.payload;
        case ACTIONS.UPDATE_SERVICE:
           return state.map(service => 
               service.ID === action.payload.ID 
                   ? action.payload 
                   : service
           );
        default:
           return state;
    }
    return state;
}
