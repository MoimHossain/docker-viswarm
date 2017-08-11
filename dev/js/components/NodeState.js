
import React from 'react';

const NodeState = (state) => (
    <div className="ui statistics">
        <div className="statistic">
            <div className="value">
                <span className="green-text">{state.manager}</span>
            </div>
            <div className="label">
                Managers
            </div>
        </div>

        { state.brokenManager > 0 && 
            <div className="statistic">
                <div className="value">
                    <span className="red-text"> {state.brokenManager} </span>
                </div>
                <div className="label">
                     managers down
                </div>
            </div>
        }


        <div className="statistic">
            <div className="value">
                <span className="green-text">{state.worker}</span>
            </div>
            <div className="label">
                Workers
            </div>
        </div>

        { state.brokenWorker > 0 && 
            <div className="statistic">
                <div className="value">
                    <span className="red-text"> {state.brokenWorker} </span>
                </div>
                <div className="label">
                     workers down
                </div>
            </div>
        }        
    </div>
);

export default NodeState;
