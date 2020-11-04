import React, { Component } from "react";

import CarCard from './CarCard';



export default class Cars extends Component {


    render() {
        return (
            this.props.autos.map(c =>
                <CarCard car={c} key={c.id} />

            )

        )
    }
}

