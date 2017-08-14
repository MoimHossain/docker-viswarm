
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNodes from './../actions/actionLoadNodes';

import TaskMatrix from './../components/TaskMatrix';

class Tasks extends Component {
    componentDidMount() {      
        this.props.loadNodes();
    }
    
    renderNodeName(nodes) {
        return (
            <thead>
                <tr>
                    <th>
                        Services
                    </th>
                    {                        
                        nodes.map((node) => {
                            return (
                            <th key={node.ID}>
                                <img
                                    className="medium-icon" 
                                    title={node.Description.Hostname} 
                                    src="http://pngimg.com/uploads/server/server_PNG8.png">
                                </img>                
                            </th>
                            )
                        })
                    }
                </tr>
            </thead>
        );
    }

    render() {        
      return (
          <div className="ui segment work-space">              
                <h3 className="ui dividing header">Swarm Tasks</h3>
              
              <div className="ui">
                    <table className="ui collapsing table">
                        {this.renderNodeName(this.props.nodes)}
                        {TaskMatrix(this.props.nodes)}
                    </table>
              </div>
          </div>
      );
    }
}

export default connect(
  (state)=> { return { nodes: state.nodes }; },
  (dispatch) => { return bindActionCreators({loadNodes: loadNodes}, dispatch); })(Tasks);
