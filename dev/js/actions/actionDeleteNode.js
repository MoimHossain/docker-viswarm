
import * as ACTIONS from './actionTypes';

function getDeleteNodeAsync(response) {
    return {
        type: ACTIONS.DELETE_NODE,
        payload: response
    };
}

export default function deleteNode(node) {
    return dispatch => {        
        var url = '/api/nodes/' + node.ID;        
        axios.delete(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(getDeleteNodeAsync(res));
        }, error => {
            dispatch(getDeleteNodeAsync(error));
        });
    }
}
