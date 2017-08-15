
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNodes from './../actions/actionLoadNodes';
import StringUtils from './../supports/string-utils';
import TaskMatrix from './../components/TaskMatrix';

class Tasks extends Component {
    componentDidMount() {      
        //this.props.loadNodes();
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
        return (
            <tfoot>
                <tr>
                    <th>                        
                    </th>
                    {                        
                        nodes.map((node) => {
                            return (
                            <th key={node.ID} className="center aligned">
                                <img
                                    className="medium-icon" 
                                    title={node.Description.Hostname} 
                                    src="http://pngimg.com/uploads/server/server_PNG8.png">
                                </img>
                                <br/>
                                <small>{StringUtils.truncateNodeName(node.Description.Hostname)}</small>
                            </th>
                            )
                        })
                    }
                </tr>
            </tfoot>
        );
    }

    render() {        
      return (
          <div className="ui segment work-space">              
                <h3 className="ui dividing header">Tasks</h3>
              
              <div className="ui">
                    <table className="ui celled collapsing table">
                        
                        {TaskMatrix(this.props.nodes)}
                        {this.renderNodeGroup(this.props.nodes)}
                        {this.renderNodeName(this.props.nodes)}
                        
                    </table>
              </div>
          </div>
      );
    }
}

export default connect(
  (state)=> { return { nodes: state.nodes }; },
  (dispatch) => { return bindActionCreators({loadNodes: loadNodes}, dispatch); })(Tasks);
