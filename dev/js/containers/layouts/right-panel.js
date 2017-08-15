
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import history from '../../supports/history';

class RightPane extends Component {

    componentDidMount() {
        $('.rightpanelbar').sidebar('show');
    }

    render() {
        return (
            <div className="ui right very wide sidebar rightpanelbar">
                <a className="item" onClick={() => history.push('/nodes') }><div><i className="server icon"></i>Swarm nodes</div></a>
                <a className="item" onClick={() => history.push('/services') }><div><i className="connectdevelop icon"></i>Services</div></a>
                <a className="item" onClick={() => history.push('/tasks') }><div><i className="codepen icon"></i>Tasks</div></a>
                <a className="item" onClick={() => history.push('/networks') }><div><i className="signal icon"></i>Networks</div></a>
            </div>
        );
    }
}


export default connect(
    (state)=> { return { state }; }, 
    (dispatch) => { return bindActionCreators({ }, dispatch); })
        (RightPane);
