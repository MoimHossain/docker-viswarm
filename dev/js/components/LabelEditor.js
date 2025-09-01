import React, { Component } from 'react';

class LabelEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            labels: props.labels || {},
            newKey: '',
            newValue: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.labels !== this.props.labels) {
            this.setState({
                labels: this.props.labels || {}
            });
        }
    }

    handleEditClick = () => {
        this.setState({ isEditing: true });
    }

    handleCancelClick = () => {
        this.setState({
            isEditing: false,
            labels: this.props.labels || {},
            newKey: '',
            newValue: ''
        });
    }

    handleSaveClick = () => {
        if (this.props.onSave) {
            this.props.onSave(this.state.labels);
        }
        this.setState({ isEditing: false, newKey: '', newValue: '' });
    }

    handleLabelDelete = (key) => {
        const newLabels = { ...this.state.labels };
        delete newLabels[key];
        this.setState({ labels: newLabels });
    }

    handleLabelChange = (key, value) => {
        this.setState({
            labels: {
                ...this.state.labels,
                [key]: value
            }
        });
    }

    handleAddLabel = () => {
        if (this.state.newKey.trim() && this.state.newValue.trim()) {
            this.setState({
                labels: {
                    ...this.state.labels,
                    [this.state.newKey.trim()]: this.state.newValue.trim()
                },
                newKey: '',
                newValue: ''
            });
        }
    }

    render() {
        const { labels, isEditing, newKey, newValue } = this.state;

        if (!isEditing) {
            // Display mode
            return (
                <div className="item">
                    <i className="tags icon"></i>
                    <div className="content">
                        <div>
                            <strong>Labels: </strong>
                            <button 
                                onClick={this.handleEditClick}
                                className="ui mini icon button"
                                title="Edit labels">
                                <i className="edit icon"></i>
                            </button>
                        </div>
                        {Object.keys(labels).length > 0 ? (
                            <div className="ui tiny labels" style={{ marginTop: '5px' }}>
                                {Object.entries(labels).map(([key, value]) => (
                                    <div key={key} className="ui label">
                                        <strong>{key}</strong>: {value}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ color: '#999', fontStyle: 'italic' }}>No labels</div>
                        )}
                    </div>
                </div>
            );
        }

        // Edit mode
        return (
            <div className="item">
                <i className="tags icon"></i>
                <div className="content">
                    <div>
                        <strong>Labels: </strong>
                        <button 
                            onClick={this.handleSaveClick}
                            className="ui mini green icon button"
                            title="Save labels">
                            <i className="check icon"></i>
                        </button>
                        <button 
                            onClick={this.handleCancelClick}
                            className="ui mini red icon button"
                            title="Cancel editing">
                            <i className="cancel icon"></i>
                        </button>
                    </div>
                    
                    {/* Existing labels */}
                    {Object.entries(labels).map(([key, value]) => (
                        <div key={key} className="ui mini form" style={{ margin: '5px 0' }}>
                            <div className="fields">
                                <div className="four wide field">
                                    <input 
                                        type="text" 
                                        value={key}
                                        placeholder="Key"
                                        readOnly
                                        style={{ backgroundColor: '#f5f5f5' }}
                                    />
                                </div>
                                <div className="six wide field">
                                    <input 
                                        type="text" 
                                        value={value}
                                        placeholder="Value"
                                        onChange={(e) => this.handleLabelChange(key, e.target.value)}
                                    />
                                </div>
                                <div className="two wide field">
                                    <button 
                                        type="button"
                                        onClick={() => this.handleLabelDelete(key)}
                                        className="ui mini red icon button">
                                        <i className="trash icon"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Add new label */}
                    <div className="ui mini form" style={{ margin: '10px 0' }}>
                        <div className="fields">
                            <div className="four wide field">
                                <input 
                                    type="text" 
                                    value={newKey}
                                    placeholder="New key"
                                    onChange={(e) => this.setState({ newKey: e.target.value })}
                                />
                            </div>
                            <div className="six wide field">
                                <input 
                                    type="text" 
                                    value={newValue}
                                    placeholder="New value"
                                    onChange={(e) => this.setState({ newValue: e.target.value })}
                                />
                            </div>
                            <div className="two wide field">
                                <button 
                                    type="button"
                                    onClick={this.handleAddLabel}
                                    className="ui mini teal icon button"
                                    disabled={!newKey.trim() || !newValue.trim()}>
                                    <i className="plus icon"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LabelEditor;