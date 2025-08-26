import * as ACTIONS from './actionTypes';
// axios is loaded globally via script tag in index.html

function updateServiceAsync(serviceData) {
    return {
        type: ACTIONS.UPDATE_SERVICE,
        payload: serviceData
    };
}

export default function updateService(serviceId, serviceUpdate) {
    return dispatch => {        
        axios.put(`/api/services/${serviceId}`, serviceUpdate)
             .then(res => {
                 dispatch(updateServiceAsync(res.data));
             }, error => {
                 console.error('Failed to update service:', error);
                 // Could dispatch an error action here
             });
    }
}