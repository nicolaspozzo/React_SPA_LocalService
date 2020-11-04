import React, { Component } from 'react';

import './Car.css';

export default class Car extends Component {

    render() {
            

        return (
            <div id="car" >

                <div className="row">
                    <div className="col-4">
                        <img src="" alt=".." />


                        <button id="btn" type="button" className="btn btn-outline-danger btn-block" >
                        <a className="back" href="/cars">Regresar</a>
                                </button>
                    </div>

                    <div className="col-8">
                        <h1>Description</h1>

                        <p>lrem ipsum</p>
                    </div>
                </div>

            </div>
        )
    }
}
