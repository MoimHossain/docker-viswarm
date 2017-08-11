
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EisInfo from '../components/EisInfo';
import Feed from '../components/Feed';
import WorkflowState from '../components/workflow-state';

class EisDetail extends Component {
  render() {
    if (!this.props.eis) {
      return (
        <div className="ui segment">
          <h1 className="ui header">No eis selected</h1>
        </div>
      );
    }

    return (
      <div className="ui segment">
        <WorkflowState />
        <div className="ui two column middle aligned very relaxed stackable grid">
          <div className="column">
            <br />
            <EisInfo eis={this.props.eis} />
          </div>
          <div className="ui vertical divider"></div>
          <div className="center aligned column">
            <Feed />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eis: state.activeEis
  };
}

export default connect(mapStateToProps)(EisDetail);
