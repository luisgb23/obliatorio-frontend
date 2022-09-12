import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Route } from 'react-router';

class AgregarReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comentario: '', estrellas: ''
        }
    }
        agregarReview = (evt) => {
            evt.preventDefault();
            let usuarioLogueado = sessionStorage.getItem("usuario")

            fetch('https://recipe-api-ctc.azurewebsites.net/api/recipes/3/reviews', {
                method: 'POST',
                headers: {
                    'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    comentario: this.state.comentario,
                    estrellas: this.state.estrellas,
                    userId: usuarioLogueado.id
                })
            })
                .then(res => res.json())
                .then(jsonRes => console.log(jsonRes))
        }

        manejarCambioComentario = (evt) => {
            this.setState({ comentario: evt.target.value })
        }

        manejarCambioEstrellas = (evt) => {
            this.setState({ estrellas: evt.target.value })
        }


    render() {
        return (
            <div className="container">
                <h2>Deja tu comentario</h2>
                <hr></hr>
                <form>
                    <div className="form-group mt-4">
                        <textarea className="form-control" name="comentario" id="comentario" placeholder="Comentario acerca de la receta" value={this.state.comentario} onChange={this.manejarCambioComentario} />
                    </div>
                    <br></br>
                    <div className="row">
                         <label>Calificá la receta</label>
                    </div>
                    <small>
                            <Rating
                                name="estrellas"
                                value={this.state.estrellas}
                                onChange={this.manejarCambioEstrellas}
                            />
                    </small>
                    <div className="form-group mt-4">
                        <button className="btn btn-secondary" type="submit" onClick={this.agregarReview}>Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AgregarReview