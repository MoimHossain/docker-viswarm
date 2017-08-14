
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNodes from './../actions/actionLoadNodes';

let started = false;
const loop = (dispatch, action) => {

    setInterval(()=> {        
        dispatch(action());
    }, 5000);

};

module.exports = {
    start: function(dispatch) {
        if(!started) {
            started = true;
            dispatch(loadNodes());
            loop(dispatch, loadNodes);
        }
    }
};