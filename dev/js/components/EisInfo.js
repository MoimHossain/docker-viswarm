
import React from 'react';

const EisInfo = (props) => (
    <div>
        <h1 className="ui header">{props.eis.title}</h1>
        <span>{props.eis.description}</span>
        <div className="ignored info ui message">
            HI MOIM Expected to be completed in a month. Currently is on <b>{props.eis.phase}</b>
        </div>        
        <div>
            <a href="#" className="ui large rounded image">
                <img src={props.eis.modelImage}></img>
            </a>
        </div>
        <div className="ui stacked segment">
            <h3 className="ui header">Related Eisen</h3>
            <div className="ui list">
                <div className="item">H1 34 NSSAHKK :L 1/.0 VIS</div>
                <div className="item">H3 44 ADFGKY :L 1/.0 SIK</div>
                <div className="item">H3 44 ADNSDSEVV :L 1/.0 YUI</div>
            </div>
        </div>
    </div>
);

export default EisInfo;
