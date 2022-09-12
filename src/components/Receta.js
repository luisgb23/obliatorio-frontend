import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Receta extends Component {
    constructor(props) {
        super(props)


    }

    render() {
        let { nombre, tiempo, imagen, id } = this.props;
        return (
            <div className="card col-md-4" style={{width: "19rem", marginRight: "1rem", marginTop: "1rem"}}>
                 <Link to={`/receta/${id}`}>
                     <img src={imagen} className="card-img-top img-fluid p-1 rounded" alt={`Imagen de ${nombre}`}/>
                 </Link>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <hr></hr>
                    <p className="card-text"><i className="bi bi-clock-history" /> {tiempo}'</p>
                </div>
            </div>


        )
    }
}

export default Receta;