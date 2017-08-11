import * as ACTIONS from './actionTypes';

// The default data when the API is unreachable
var ___x = [
        {
            id: '1',
            title: 'Hyper-loop',
            modelImage: 'http://www.stonybrook.edu/happenings/wp-content/uploads/Hyperloop-interior.jpg',
            description: "Build hyper-loop tunnel from Amsterdam to Madrid",
            phase: "Initial ontwerp"
        }
    ];

function getAllEisenAsync(data) {
    return {
        type: ACTIONS.GET_EISEN,
        payload: data
    };
}


export default function getAllEisen() {
    return dispatch => {        
        axios.get('/api/eisen')
             .then(res => {                                  
                 dispatch(getAllEisenAsync(res.data));
             }, error => {                 
                 dispatch(getAllEisenAsync(___x));
             });
    }
}