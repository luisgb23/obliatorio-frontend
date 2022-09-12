import { recomposeColor } from '@material-ui/core';
import React, { Component } from 'react';
import Review from './Review';

class ListaReview extends Component {
    constructor(props) {
        super(props)
        this.state = { reviewsObtenidas: []
        }
        
    }
        cargarReviews = () => {
            fetch(`https://recipe-api-ctc.azurewebsites.net/api/recipes/${this.props.recid}/reviews`, {
                method: "GET",
                headers: {
                    'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74'
                }
            })
                .then(res => res.json())
                .then(jsonReviews => this.setState({ reviewsObtenidas: jsonReviews.result }));
        }

        componentDidMount() {
            this.cargarReviews();
            
        }

    render() {
        let listaReviews = this.state.reviewsObtenidas;
        let componentes = listaReviews.map((rev,key)=><Review imagen={rev.profile_picture} nombre={rev.first_name} apellido={rev.last_name} estrellas={rev.stars} comentario={rev.comment} id={rev.recipe_id} creacion={rev.created_at} key={key}></Review>)
        return (
            <div>
                {componentes}
            </div>
        );
    }
}

export default ListaReview;
