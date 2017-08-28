

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNetworks from './../actions/actionLoadNetworks';
import SwarmGraph from './../graphics/swarm-graph';

class ThreeDView extends Component {
    componentDidMount() {      
        this.props.loadNetworks();
        new SwarmGraph(document.getElementById('threedarea')).start();
    }

    render() {        
      return (
          <div className="ui segment work-space dimmed">              
              <h3 className="ui dividing header">Swarm</h3>
              <div id="threedarea">

              </div>
             
          </div>
      );
    }
}

export default connect(
  (state)=> { return { networks: state.networks }; },
  (dispatch) => { return bindActionCreators({loadNetworks: loadNetworks}, dispatch); })(ThreeDView);
