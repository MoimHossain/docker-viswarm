
import React from 'react';

const WorkflowState = (props) => (
    <div className="ui ordered steps">
        <div className="completed step">
            <div className="content">
                <div className="title">SO</div>
                <div className="description">Schets ontwerp</div>
            </div>
        </div>
        <div className="completed step">
            <div className="content">
                <div className="title">DO</div>
                <div className="description">Definitive ontwerp</div>
            </div>
        </div>
        <div className="active step">
            <div className="content">
                <div className="title">VO</div>
                <div className="description">Voorlopig ontwerp</div>
            </div>
        </div>
        <div className="active step">
            <div className="content">
                <div className="title">UO</div>
                <div className="description">U? ontwerp</div>
            </div>
        </div>
    </div>
);

export default WorkflowState;
