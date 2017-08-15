

import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import NodeReducer from './reducer-nodes';
import ServiceReducer from './reducer-services';
import NetworkReducer from './reducer-networks';
import ActiveArtifactReducer from './reducer-activeArtifact';


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
    
const allReducers = combineReducers({
    activeArtifact: ActiveArtifactReducer,
    networks: NetworkReducer,
    services: ServiceReducer,
    nodes: NodeReducer,
    router: routerReducer
});

export default allReducers;
