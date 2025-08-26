


import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import loadServices from './../actions/actionLoadServices';
import updateService from './../actions/actionUpdateService';
import ServiceNode from './../components/ServiceNode';
import ServiceEditModal from './../components/ServiceEditModal';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingService: null,
            isModalOpen: false
        };
    }

    componentDidMount() {      
        this.props.loadServices();
    }

    handleEditService = (service) => {
        this.setState({
            editingService: service,
            isModalOpen: true
        });
    }

    handleSaveService = (serviceId, updateData) => {
        this.props.updateService(serviceId, updateData);
        this.setState({
            editingService: null,
            isModalOpen: false
        });
    }

    handleCancelEdit = () => {
        this.setState({
            editingService: null,
            isModalOpen: false
        });
    }
    
    renderServices() {
        return (
            <div className="ui cards">
            {
                this.props.services.map((node) => {
                    return ServiceNode(node, this.handleEditService);
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
              {this.state.editingService && (
                  <ServiceEditModal
                      service={this.state.editingService}
                      isOpen={this.state.isModalOpen}
                      onSave={this.handleSaveService}
                      onCancel={this.handleCancelEdit}
                  />
              )}
          </div>
      );
    }
}

export default connect(
  (state)=> { return { services: state.services }; },
  (dispatch) => { return bindActionCreators({
      loadServices: loadServices,
      updateService: updateService
  }, dispatch); })(Services);
