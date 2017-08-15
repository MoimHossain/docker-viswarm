

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadNetworks from './../actions/actionLoadNetworks';
import NetworkNode from './../components/NetworkNode';

class Networks extends Component {
    componentDidMount() {      
        this.props.loadNetworks();
    }
    
    renderNetworks() {
        return (
            <div className="ui cards">
            {
                this.props.networks.map((nw) => {
                    return NetworkNode(nw);
                })
            } 
            </div>            
        );
    }    

    render() {        
      return (
          <div className="ui segment work-space dimmed">              
              <h3 className="ui dividing header">Networks</h3>
              
              {this.renderNetworks()}
          </div>
      );
    }
}

export default connect(
  (state)=> { return { networks: state.networks }; },
  (dispatch) => { return bindActionCreators({loadNetworks: loadNetworks}, dispatch); })(Networks);
