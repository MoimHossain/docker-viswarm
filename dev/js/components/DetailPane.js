

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import * as ARTIFACTS from './../supports/nodeTypes';

import ManagerNode from './ManagerNode';
import WorkerNode from './WorkerNode';
import TaskNode from './TaskNode';

class DetailPane extends Component {

    getName(artNode) {
        let caption = 'Nothing selected';
        if (artNode) {
            switch (artNode.ArtifactType) {
                case ARTIFACTS.NODE: caption = artNode.Description.Hostname.toUpperCase(); break;
                case ARTIFACTS.TASK: break;
                default: break;
            }
        }
        return caption;
    }

    renderDetails(artNode) {
        if (artNode) {
            if (artNode.ArtifactType === ARTIFACTS.NODE) {
                return artNode.ManagerStatus ? ManagerNode(artNode) : WorkerNode(artNode);
            } else if (artNode.ArtifactType === ARTIFACTS.TASK) {
                return TaskNode(artNode);
            }
        }
    }

    render() {
        var self = this;
        return (
            <div className="four wide column">
                <div className="ui ">
                    <h3 className="ui dividing header">{" " /*self.getName(this.props.activeArtifact)*/}</h3>
                    <div className="ui cards">
                        {this.renderDetails(this.props.activeArtifact)}
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(
    (state) => { return { activeArtifact: state.activeArtifact }; },
    (dispatch) => { return bindActionCreators({}, dispatch); })
    (DetailPane);
