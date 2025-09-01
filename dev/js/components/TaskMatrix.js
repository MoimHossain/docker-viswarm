
import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';
import StringUtils from './../supports/string-utils';
import * as ARTIFACTS from './../supports/nodeTypes';

const GetAllTasks = (nodes) => {
    var tasks = [];
    nodes.map((node) => {
        if(node.tasks && node.tasks.length > 0) {
            node.tasks.map((task)=> {
                let exists = false;
                tasks.map((t)=> {
                    if(t.ID === task.ID) {
                        exists = true;
                        return false;
                    }
                });
                if(!exists) {
                    tasks.push(task);
                }
            });
        }
    });
    return tasks;
};

const GetArrangedByContainerSpec = (tasks) => {
    var cspecs = [];
    tasks.map((task) => {
        var specName = task.Spec.ContainerSpec.Image;
        var cspec = null;
        cspecs.forEach((cs) => {
            if( cs.specName === specName) {
                cspec = cs;
                return false;
            }
        });
        if(!cspec) {
            cspec = {
                specName : specName,
                tasks: []
            };
            cspecs.push(cspec);
        }
        cspec.tasks.push(task);
    });
    return cspecs;
};

const Tasks = (node, tasks, actionDispatch, stopTaskDispatch) => {
    return (
        <td 
            key={node.ID}            
            >
            {
                tasks.map((task) => {
                    if(node.ID === task.NodeID) {
                        return (
                            <div key={task.ID} style={{position: 'relative', display: 'inline-block'}}>
                                <img
                                    onClick={() => actionDispatch(task, ARTIFACTS.TASK)}
                                    className="medium-icon docker-container clickable"
                                    src="https://www.shareicon.net/download/2017/02/15/878943_media_512x512.png">
                                </img>
                                {task.Status.State === 'running' && (
                                    <button 
                                        style={{
                                            position: 'absolute', 
                                            top: '-5px', 
                                            right: '-5px', 
                                            width: '16px', 
                                            height: '16px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#dc3545',
                                            color: 'white',
                                            fontSize: '10px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            stopTaskDispatch && stopTaskDispatch(task);
                                        }}
                                        title="Stop Task">
                                        ×
                                    </button>
                                )}
                            </div>
                        );
                    } else {
                        return '';
                    }
                })
            }
        </td>
    );
}


const TaskMatrix = (nodes, actionDispatch, stopTaskDispatch) => (    
    <tbody>
        {
            GetArrangedByContainerSpec(GetAllTasks(nodes)).map((spec) => {                
                return (
                <tr key={spec.specName}>
                    <td>
                        <div className="item">
                            <h3>{StringUtils.truncateImageName(spec.specName)}</h3>
                            <div className="meta">
                                <span>Replica: <b>{spec.tasks.length}</b></span>
                            </div>
                        </div>
                    </td>
                    {
                        nodes.map((node) => {                            
                            return Tasks(node, spec.tasks, actionDispatch, stopTaskDispatch);
                        })
                    }
                </tr>                    
                )
            })
        }
        <tr>
        </tr>
    </tbody>
);

export default TaskMatrix;
