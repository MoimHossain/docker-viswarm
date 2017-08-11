
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SideBar extends Component {

    componentDidMount() {
        $('.ui.sidebar').sidebar('show');
        
    }
    render() {
        return (
            <div className="ui visible sidebar inverted vertical menu">
                <a className="item"><div><i className="server icon"></i>Swarm nodes</div></a>
                <a className="item"><div><i className="connectdevelop icon"></i>Services</div></a>
                <a className="item"><div><i className="codepen icon"></i>Tasks</div></a>
                <a className="item"><div><i className="signal icon"></i>Networks</div></a>
            </div>
        );
    }
}


export default connect(
    (state)=> { return { state }; }, 
    (dispatch) => { return bindActionCreators({ }, dispatch); })
        (SideBar);
