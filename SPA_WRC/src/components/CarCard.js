
import React, { Component } from "react";

import './CarCard.css';

import Car from './Car';


export default class CarCard extends Component {



    render() {

        const { car } = this.props;

        return (

            <div id="carCard">
                <div className="card">

                    <img src={require('../images/' + car.img)} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{car.name} </h5>
                        <p className=""><small className="text-muted">{car.years}</small></p>

                        <details>
                            <summary>Ver más...</summary>
                            {car.brief}
                        </details>

                        {/* <p className="card-text">{car.brief}</p> */}

                        {/* <button id="myBtn" type="button" className="accordion btn btn-outline-primary btn-block" >Ver más...
                             <a className="seeMore" href="/car">Ver más...</a>
                        </button> */}

                        
                    </div>

                </div>
            </div>
        );
    }
}
