
import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import StringUtils from './../supports/string-utils';

const getStateCls = (state) => {    
    var color = 'red';
    switch(state) {
        case 'running': color = 'green'; break;
        case 'shutdown': color = 'blue'; break;
        case 'accepted': color = 'green'; break;
    }
    return color;
};

const getArgs = (spec) => {
    if(spec && spec.Args && spec.Args.length > 0) {
        return spec.Args.join(' ');
    }
    return '';
};


const TaskNode = (task) => (
    <div className="card">
        <div className="info-panel">
            <h5 className="ui horizontal divider header">
                <img
                    className="medium-icon"
                    src="https://www.shareicon.net/download/2017/02/15/878943_media_512x512.png">
                </img>
                {StringUtils.truncateImageName(task.Spec.ContainerSpec.Image)}
            </h5>
            <p>
                <b>{StringUtils.truncateImageName(task.ID)}</b>
            </p>
            <table className="ui definition table">
                <tbody>
                    <tr>
                        <td className="three wide column">Status</td>
                        <td><div className={'ui ' + getStateCls(task.Status.State) + ' horizontal label'}>{task.Status.State}</div></td>
                    </tr>
                    <tr>
                        <td>Timestamp</td>
                        <td>{TimeUtils(task.Status.Timestamp)}</td>
                    </tr>                  
                    <tr>
                        <td>Message</td>
                        <td>{task.Status.Message}</td>
                    </tr>
                    <tr>
                        <td>Cont ID</td>
                        <td><span title={task.Status.ContainerStatus.ContainerID}>{StringUtils.truncate(task.Status.ContainerStatus.ContainerID)}</span></td>
                    </tr>
                </tbody>
            </table>

            <h5 className="ui horizontal divider header">
                <i class="icon browser"></i>
                Other info
            </h5>
            <table className="ui definition table">
                <tbody>
                    <tr>
                        <td className="three wide column">Image</td>
                        <td title={task.Spec.ContainerSpec.Image}>{StringUtils.truncateImageName(task.Spec.ContainerSpec.Image)}</td>
                    </tr>
                    <tr>
                        <td>Arguments</td>
                        <td>{getArgs(task.Spec.ContainerSpec)}</td>
                    </tr>
                    <tr>
                        <td>Slot</td>
                        <td>{task.Slot}</td>
                    </tr>
                    <tr>
                        <td>Service</td>
                        <td title={task.ServiceID}>{StringUtils.truncate(task.ServiceID) }</td>
                    </tr>                                        
                </tbody>
            </table>
            <p>

            </p>
        </div>
    </div>
);

export default TaskNode;
