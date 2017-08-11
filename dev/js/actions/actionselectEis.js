import * as ACTIONS from './actionTypes';

export const selectEis = (eis) => {    
    return {
        type: ACTIONS.SELECT_EISEN,
        payload: eis
    }
};
