
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
                <a className="item"><div><i className="home icon"></i>This is a test</div></a>
                <a className="item"><div><i className="home icon"></i>This is a test another</div></a>
            </div>
        );
    }
}


export default connect(
    (state)=> { return { state }; }, 
    (dispatch) => { return bindActionCreators({ }, dispatch); })
        (SideBar);
