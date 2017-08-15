


import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadServices from './../actions/actionLoadServices';
import ServiceNode from './../components/ServiceNode';

class Services extends Component {
    componentDidMount() {      
        this.props.loadServices();
    }
    
    renderServices() {
        return (
            <div className="ui cards">
            {
                this.props.services.map((node) => {
                    return ServiceNode(node);
                })
            } 
            </div>            
        );
    }    

    render() {        
      return (
          <div className="ui segment work-space dimmed">              
              <h3 className="ui dividing header">Services</h3>              
              {this.renderServices()}
          </div>
      );
    }
}

export default connect(
  (state)=> { return { services: state.services }; },
  (dispatch) => { return bindActionCreators({loadServices: loadServices}, dispatch); })(Services);
