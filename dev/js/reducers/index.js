import {combineReducers} from 'redux';
import NodeReducer from './reducer-nodes';
import { routerReducer } from 'react-router-redux'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
    
const allReducers = combineReducers({
    nodes: NodeReducer,
    router: routerReducer
});

export default allReducers;
