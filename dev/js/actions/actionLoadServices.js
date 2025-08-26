
import * as ACTIONS from './actionTypes';
// axios is loaded globally via script tag in index.html

const mockResponse = {"objects":[{"ID":"yzhcse574lkxcr6cr5a6666tg","Version":{"Index":77},"CreatedAt":"2017-08-09T12:49:19.407487196Z","UpdatedAt":"2017-08-09T12:50:37.267666938Z","Spec":{"Name":"helloworld","Labels":{},"TaskTemplate":{"ContainerSpec":{"Image":"alpine:latest@sha256:1072e499f3f655a032e88542330cf75b02e7bdf673278f701d7ba61629ee3ebe","Args":["ping","docker.com"],"DNSConfig":{}},"Resources":{"Limits":{},"Reservations":{}},"Placement":{"Platforms":[{"Architecture":"amd64","OS":"linux"}]},"ForceUpdate":0,"Runtime":"container"},"Mode":{"Replicated":{"Replicas":5}},"EndpointSpec":{"Mode":"vip"}},"PreviousSpec":{"Name":"helloworld","Labels":{},"TaskTemplate":{"ContainerSpec":{"Image":"alpine:latest@sha256:1072e499f3f655a032e88542330cf75b02e7bdf673278f701d7ba61629ee3ebe","Args":["ping","docker.com"],"DNSConfig":{}},"Resources":{"Limits":{},"Reservations":{}},"Placement":{"Platforms":[{"Architecture":"amd64","OS":"linux"}]},"ForceUpdate":0,"Runtime":"container"},"Mode":{"Replicated":{"Replicas":1}},"EndpointSpec":{"Mode":"vip"}},"Endpoint":{"Spec":{}}}]};

function getAllServicesAsync(data) {
    return {
        type: ACTIONS.GET_SERVICES,
        payload: data
    };
}


export default function getAllServices() {
    return dispatch => {        
        axios.get('/api/services')
             .then(res => {
				 dispatch(getAllServicesAsync(res.data));
             }, error => {
				 dispatch(getAllServicesAsync(mockResponse.objects));
             });
    }
}