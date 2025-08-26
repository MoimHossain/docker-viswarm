import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import StringUtils from './../supports/string-utils';

const ServiceNode = (serviceNode, onEdit) => (
    <div key={serviceNode.ID} className="card">
        <div className="content">
            <img className="right floated mini medium-icon"
                title={serviceNode.Spec.Name}
                src='https://www.shareicon.net/download/2017/02/15/878943_media_512x512.png' />
            <div className="header">
                {serviceNode.Spec.Name.toUpperCase()}
            </div>
            <div className="meta">
                <b>{StringUtils.truncateImageName(serviceNode.Spec.TaskTemplate.ContainerSpec.Image)}</b>
            </div>

            <div className="ui list">
                <div className="item">
                    <i className="cube icon"></i>
                    <div className="content">
                        {(serviceNode.Spec.TaskTemplate.ContainerSpec.Args || []).join(' ')}
                    </div>
                </div>
                <div className="item">
                    <i className="desktop icon"></i>
                    <div className="content">
                        {((serviceNode.Spec.Mode.Replicated || {}).Replicas || 0) + ' Replicas'}
                    </div>
                </div>
                <div className="item">
                    <i className="calendar icon"></i>
                    <div className="content">
                        {"Created " + TimeUtils(serviceNode.CreatedAt)}
                    </div>
                </div>
                <div className="item">
                    <i className="history icon"></i>
                    <div className="content">
                        {"Updated " + TimeUtils(serviceNode.UpdatedAt)}
                    </div>
                </div>
            </div>
        </div>

        <div className="extra content">
            <div>
                <span className="right floated star">
                    <button className="ui disabled icon button">
                        <i className="pause icon"></i>
                    </button>
                    <button 
                        className="ui icon button"
                        onClick={() => onEdit && onEdit(serviceNode)}
                        title="Edit Service"
                    >
                        <i className="edit icon"></i>
                    </button>
                </span>
            </div>
        </div>
    </div>
);

export default ServiceNode;
