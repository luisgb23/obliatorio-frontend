import React, { Component } from 'react';

class Imagen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let enlace = this.props.enlace
        return (
            <div className="carousel-item">
            <img src={enlace} className="d-block w-100" alt="..." width="70%" />
        </div>
        );
    }
}

export default Imagen;
