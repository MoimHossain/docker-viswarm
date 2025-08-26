import React, { Component } from 'react';

class ServiceEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: props.service.Spec.TaskTemplate.ContainerSpec.Image || '',
            replicas: (props.service.Spec.Mode.Replicated || {}).Replicas || 0,
            isSubmitting: false
        };
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value });
    }

    handleReplicasChange = (e) => {
        this.setState({ replicas: parseInt(e.target.value) || 0 });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ isSubmitting: true });
        
        const updateData = {
            image: this.state.image,
            replicas: this.state.replicas
        };
        
        this.props.onSave(this.props.service.ID, updateData);
    }

    render() {
        if (!this.props.isOpen) return null;

        return (
            <div className="ui modal active">
                <div className="header">
                    Edit Service: {this.props.service.Spec.Name}
                </div>
                <div className="content">
                    <form className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <label>Image</label>
                            <input 
                                type="text" 
                                value={this.state.image}
                                onChange={this.handleImageChange}
                                placeholder="e.g., nginx:latest"
                            />
                        </div>
                        <div className="field">
                            <label>Replicas</label>
                            <input 
                                type="number" 
                                value={this.state.replicas}
                                onChange={this.handleReplicasChange}
                                min="0"
                            />
                        </div>
                    </form>
                </div>
                <div className="actions">
                    <button 
                        className="ui cancel button"
                        onClick={this.props.onCancel}
                        disabled={this.state.isSubmitting}
                    >
                        Cancel
                    </button>
                    <button 
                        className={`ui primary button ${this.state.isSubmitting ? 'loading' : ''}`}
                        onClick={this.handleSubmit}
                        disabled={this.state.isSubmitting}
                    >
                        Save
                    </button>
                </div>
            </div>
        );
    }
}

export default ServiceEditModal;