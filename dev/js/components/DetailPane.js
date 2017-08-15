

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';


class DetailPane extends Component {
    componentDidMount() {
     
    }

    render() {
        return (
            <div className="four wide column">
                <div className="ui segment">
                    <h3 className="ui dividing header">Tasks</h3>
                    <div className="ui">
                        {this.props.activeArtifact ? this.props.activeArtifact.ID : 'nothing selected'}
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(
    (state)=> { return { activeArtifact: state.activeArtifact }; }, 
    (dispatch) => { return bindActionCreators({ }, dispatch); })
        (DetailPane);
