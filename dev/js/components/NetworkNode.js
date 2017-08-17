import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import StringUtils from './../supports/string-utils';

const NetworkNode = (networkNode) => (
    <div key={networkNode.Id} className="card">
        <div className="content">
            <div className="right floated mini medium-icon">
                <i className="signal icon"></i>
            </div>
            <div className="header">
                {StringUtils.truncate(networkNode.Name.toUpperCase())}
            </div>
            <div className="meta">
                <b>{(networkNode.Driver) + ' ' + (networkNode.Ingress ? 'Ingress' : '') + ' ' + (networkNode.EnableIPv6 ? 'IPv6 Enabled' : '')}</b>
            </div>
            <div className="ui list">

                <div className="item">
                    <i className="desktop icon"></i>
                    <div className="content">
                        {"Scoped to "}<b>{networkNode.Scope}</b>
                    </div>
                </div>
                <div className="item">
                    <i className="calendar icon"></i>
                    <div className="content">
                        {"Created " + TimeUtils(networkNode.Created)}
                    </div>
                </div>
            </div>
        </div>

        <div className="extra content">
            <div>
                <span className="right floated star">
                    <button className="ui disabled icon button">
                        <i className="remove  icon"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
);

export default NetworkNode;
