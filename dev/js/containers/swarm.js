
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import deleteNode from './../actions/actionDeleteNode';

import NodeState from './../components/NodeState';
import ManagerNode from './../components/ManagerNode';
import WorkerNode from './../components/WorkerNode';

class Swarm extends Component {
    componentDidMount() {      

    }

    deleteSwarmNode(node) {
        this.props.deleteNode(node);
    }
    
    genStats(nodes) {
        var state = { manager: 0, brokenManager: 0, worker: 0, brokenWorker: 0 };
        nodes.map((node) => {
            if(node.ManagerStatus) {
                if(node.ManagerStatus.Reachability !== 'reachable') {
                    state.brokenManager = state.brokenManager + 1;
                }
                state.manager = state.manager + 1;            
            } else {
                if(node.Status.State !== 'ready') {
                    state.brokenWorker = state.brokenWorker + 1;
                }
                state.worker = state.worker + 1;
            }
        });
        return state;
    }

    renderManagerNodes() {
        return (
            <div className="ui cards">
            {
                this.props.nodes.map((node) => {
                    if(node.Spec.Role === 'manager') {
                      return ManagerNode(node, this.deleteSwarmNode.bind(this));
                    }
                })
            } 
            </div>            
        );        
    }

    renderWorkerNodes() {
        return (
            <div className="ui cards">
            {
                this.props.nodes.map((node) => {
                    if(node.Spec.Role === 'worker') {
                      return WorkerNode(node, this.deleteSwarmNode.bind(this));
                    }
                })
            } 
            </div>            
        );
    }

    render() {
      return (
          <div className="ui segment work-space dimmed">
              
              <h3 className="ui dividing header">Nodes</h3>
              {NodeState(this.genStats(this.props.nodes))}

              
              <div className="ui">
                  <h3 className="ui dividing header">Managers</h3>
                  {this.renderManagerNodes()}
                  <h3 className="ui dividing header">Workers</h3>
                  {this.renderWorkerNodes()}
              </div>
          </div>
      );
    }
}

export default connect(
  (state)=> { return { nodes: state.nodes }; },
  (dispatch) => { return bindActionCreators({deleteNode: deleteNode}, dispatch); })(Swarm);
