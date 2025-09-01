import * as ACTIONS from './actionTypes';

function getUpdateNodeLabelsAsync(response) {
    return {
        type: ACTIONS.UPDATE_NODE_LABELS,
        payload: response
    };
}

export default function updateNodeLabels(nodeId, labels) {
    return dispatch => {        
        var url = '/api/nodes/' + nodeId + '/labels';        
        return axios.put(url, {
            labels: labels
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(getUpdateNodeLabelsAsync(res));
            return res;
        }, error => {
            dispatch(getUpdateNodeLabelsAsync(error));
            throw error;
        });
    }
}