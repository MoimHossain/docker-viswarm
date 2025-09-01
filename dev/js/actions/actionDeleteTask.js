import * as ACTIONS from './actionTypes';

function getDeleteTaskAsync(response) {
    return {
        type: ACTIONS.DELETE_TASK,
        payload: response
    };
}

export default function deleteTask(task) {
    return dispatch => {        
        var url = '/api/tasks/' + task.ID;        
        axios.delete(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            dispatch(getDeleteTaskAsync(res));
        }, error => {
            dispatch(getDeleteTaskAsync(error));
        });
    }
}