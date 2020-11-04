import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Simple Page Aplication</h1>
                    <p className="lead">This is a SPA using React and practice with a local service</p>
                    
                </div>
                </div>
            </div>
        )
    }
}
