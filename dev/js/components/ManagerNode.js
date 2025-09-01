import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import LabelEditor from './LabelEditor';


const ManagerNode = (node, deleteNode, updateNodeLabels) => (
  <div key={node.ID} className="card">

    <div className="content">
      <img className="right floated mini ui image"
        alt={node.Status.State}
        title={node.Status.State}
        src={node.Status.State === 'ready' ? 'https://www.ctreap.net/images/icons32/accept.png' : 'https://www.nbninternational.com/checkout/Content/skins/099/images/icons_32/dialog-warning.png'} />

      <div className="header">
        {node.Description.Hostname.toUpperCase()}
      </div>
      <div className="meta">
        <b>{node.ID}</b>
        <p><br />
          <a className="ui teal tag label">Manager</a>
          {node.ManagerStatus.Leader === true &&
            <a className="ui orange tag label">Leader</a>
          }
        </p>
      </div>

      <div className="ui list">
        <div className="item">
          <i className="cube icon"></i>
          <div className="content">
            {SizeUtils(node.Description.Resources.MemoryBytes) + " Memory"}
          </div>
        </div>
        <div className="item">
          <i className="desktop icon"></i>
          <div className="content">
            {node.Description.Resources.NanoCPUs + " nanoCPU"}
          </div>
        </div>
        <div className="item">
          <i className="calendar icon"></i>
          <div className="content">
            {"Created: " + TimeUtils(node.CreatedAt)}
          </div>
        </div>
        <div className="item">
          <i className="history icon"></i>
          <div className="content">
            {"Updated: " + TimeUtils(node.UpdatedAt)}
          </div>
        </div>
        <div className="item">
          <i className="server icon"></i>
          <div className="content">
            {"Address: " + node.ManagerStatus.Addr}
          </div>
        </div>

        <LabelEditor 
          labels={node.Spec.Labels || {}}
          onSave={(labels) => updateNodeLabels(node.ID, labels)}
        />

      </div>
    </div>


    <div className="extra content">
      <div className={node.ManagerStatus.Reachability === 'reachable' ? 'green-text' : 'red-text'}>
        <i className="signal icon"></i>
        <b>{node.ManagerStatus.Reachability === 'reachable' ? 'Reachable' : 'Unreachable'}</b>
        <span className="right floated star">
          <button 
            onClick={()=> deleteNode(node)}
            className="ui icon button">
            <i className="remove  icon"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
);

export default ManagerNode;
