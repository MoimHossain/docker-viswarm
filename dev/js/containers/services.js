


import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNodes from './../actions/actionLoadNodes';


class Services extends Component {
    componentDidMount() {      
        this.props.loadServices();
    }
    

    render() {
      return (
          <div className="ui segment work-space">
              
              <h3 className="ui dividing header">Swarm Services</h3>
              
              <div className="ui">
                  <h3 className="ui dividing header">Managers</h3>              
                  <h3 className="ui dividing header">Workers</h3>              
              </div>
          </div>
      );
    }
}

export default connect(
  (state)=> { return { nodes: state.nodes }; },
  (dispatch) => { return bindActionCreators({loadNodes: loadNodes}, dispatch); })(Services);
