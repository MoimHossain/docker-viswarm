import React from 'react';
import SizeUtils from './../supports/size-utils';
import TimeUtils from './../supports/time-utils';

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

const TaskMatrix = (nodes) => (
    <tbody>
        {
            GetAllTasks(nodes).map((task) => {
                return (
                <tr>
                    {
                        nodes.map((node) => {
                            return (
                                <td>{node.ID}</td>
                            )
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
