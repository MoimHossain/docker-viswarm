
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import loadNodes from './../actions/actionLoadNodes';
import selectArtifact from './../actions/actionSelectArtifact';
import StringUtils from './../supports/string-utils';
import TaskMatrix from './../components/TaskMatrix';
import DetailPane from './../components/DetailPane';
import * as ARTIFACTS from './../supports/nodeTypes';

class Tasks extends Component {
    componentDidMount() {

    }

    renderNodeGroup(nodes) {
        return (
            <tfoot>
                <tr>
                    <th></th>
                    <th className="center aligned" colSpan={2}><b>Manager</b></th>
                    <th className="center aligned" colSpan={6}><b>Worker</b></th>
                </tr>
            </tfoot>
        );
    }

    renderNodeName(nodes) {
        var self = this;
        return (
            <tfoot>
                <tr>
                    <td>
                    </td>
                    {
                        nodes.map((node) => {                            
                            return (
                                <th 
                                    key={node.ID} 
                                    onClick={() => self.props.selectArtifact(node, ARTIFACTS.NODE)}
                                    className="center aligned hover-effect">
                                    <img
                                        className="medium-icon clickable"
                                        title={node.Description.Hostname}
                                        src="https://s3.amazonaws.com/media.jetstrap.com/1Y3bmy5ISW2T6ZucFyxI_iconmonstr-server-4-icon-256.png">
                                    </img>
                                    <br />
                                    <small className="clickable">{StringUtils.truncateNodeName(node.Description.Hostname)}</small>
                                </th>
                            )
                        })
                    }
                </tr>
            </tfoot>
        );
    }

    actionDispatcher(artNode, artType) {
        this.props.selectArtifact(artNode, artType);
    }

    render() {
        var self = this;        
        return (
        <div className="ui grid">
            <div className="ten wide column">
                <div className="ui segment work-space">
                    <h3 className="ui dividing header">Tasks</h3>
                    <div className="ui">
                        <table className="ui celled collapsing table">
                            {TaskMatrix(self.props.nodes, self.actionDispatcher.bind(self) )}
                            {self.renderNodeGroup(self.props.nodes)}
                            {self.renderNodeName(self.props.nodes)}
                        </table>
                    </div>
                </div>
            </div>
            <DetailPane/>
        </div>            
        );
    }
}

export default connect(
    (state) => { return { nodes: state.nodes }; },
    (dispatch) => { return bindActionCreators(
        { 
            selectArtifact: selectArtifact,
            loadNodes: loadNodes 
        }, dispatch); })(Tasks);
