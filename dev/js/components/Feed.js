
import React from 'react';

const Feed = () => (
        <div className="ui feed">
        <div className="event">
            <div className="label">
            <img src="https://semantic-ui.com/images/avatar/small/elliot.jpg"></img>
            </div>
            <div className="content">
            <div className="summary">
                <a className="user">
                Elliot Fu
                </a> was invited into the project as an architect
                <div className="date">
                1 Hour Ago
                </div>
            </div>
            </div>
        </div>
        <div className="event">
            <div className="label">
            <img src="https://semantic-ui.com/images/avatar/small/helen.jpg"></img>
            </div>
            <div className="content">
            <div className="summary">
                <a>Helen Troy</a> added <a>2 new illustrations</a>
                <div className="date">
                4 days ago
                </div>
            </div>
            <div className="extra images">
                <a><img src="https://i.ytimg.com/vi/ZuNbjjK_dK4/maxresdefault.jpg"></img></a>
                <a><img src="http://www.delivered.dhl.com/content/dam/delivered/master/issues/2017-1/images/issue-1-17-p31-delft-hyperloop-full-image.jpg"></img></a>
            </div>
            <div className="meta">
                <a className="like">
                <i className="like icon"></i> 1 Like
                </a>
            </div>
            </div>
        </div>
        <div className="event">
            <div className="label">
            <img src="https://semantic-ui.com/images/avatar/small/jenny.jpg"></img>
            </div>
            <div className="content">
            <div className="summary">
                <a className="user">
                Jenny Hess
                </a> added <a>Design Document.docx</a>
                <div className="date">
                2 Days Ago
                </div>
            </div>
            <div className="meta">
                <a className="like">
                <i className="like icon"></i> 8 followers
                </a>
            </div>
            </div>
        </div>
        <div className="event">
            <div className="label">
            <img src="https://semantic-ui.com/images/avatar/small/joe.jpg"></img>
            </div>
            <div className="content">
            <div className="summary">
                <a>Joe Henderson</a> commented
                <div className="date">
                3 days ago
                </div>
            </div>
            <div className="extra text">
                We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
            </div>
            <div className="meta">
                <a className="like">
                <i className="like icon"></i> 5 participants
                </a>
            </div>
            </div>
        </div>
        <div className="event">
            <div className="label">
            <img src="https://semantic-ui.com/images/avatar/small/justen.jpg"></img>
            </div>
            <div className="content">
            <div className="summary">
                <a>Justen Kitsune</a> added <a>2 new revisions</a>
                <div className="date">
                4 days ago
                </div>
            </div>
            <div className="extra images">
                <a><img src="https://semantic-ui.com/images/wireframe/image.png"></img></a>
                <a><img src="https://semantic-ui.com/images/wireframe/image.png"></img></a>
            </div>
            <div className="meta">
                <a className="like">
                <i className="like icon"></i> 41 participants
                </a>
            </div>
            </div>
        </div>
        </div>
);

export default Feed;
