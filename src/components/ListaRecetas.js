import React, { Component } from 'react';
import Receta from './Receta';
import VistaReceta from './VistaReceta';


class ListaReceta extends Component {
    constructor(props) {
        super(props)
        this.state = { ingredientes: '', recetasObtenidas: [], listaRecetas: [] }
    }

    cargarRecetas = () => {
        fetch('https://recipe-api-ctc.azurewebsites.net/api/recipes', {
            method: "GET",
            headers: {
                'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74'
            }
        })
            .then(res => res.json())
            .then(jsonRecetas => this.setState({ recetasObtenidas: jsonRecetas.result }));
    }

    componentDidMount() {
        this.cargarRecetas();
    }


    //actualiza el estado cuando se modifica el valor en el input
    manejarCambioName = (evt) => {
        this.setState({ ingredientes: evt.target.value })
    }

    //busca las notas agregando el parametro de name en la url
    buscarRecetas = (evt) => {
        evt.preventDefault();
        if(this.state.ingredientes==""){
            this.cargarRecetas();
        }else{
            fetch(`https://recipe-api-ctc.azurewebsites.net/api/recipes/byingridients/?ingridients=${this.state.ingredientes}`, {
                method: "GET",
                headers: {
                    'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74'
                }
            })
                .then(res => res.json())
                .then(jsonRecetas => this.setState({ recetasObtenidas: jsonRecetas.result }));
        }
        
    }


    render() {
        
        let listaRecetas = this.state.recetasObtenidas;
        let componentes = listaRecetas.map((rec, index) => <Receta imagen={rec.main_image} nombre={rec.name} tiempo={rec.cooking_time} id={rec.recipe_id} key={index}/>)
        return (
            <div className="container">
                <br></br>
                <div className="row">
                    <form onSubmit={this.buscarRecetas}>
                    

                        <div className="col-md-4 form-floating mb-3">
                            <input type="text" className="form-control" name="ingredientes" id="ingredientes" placeholder="Ingredientes" value={this.state.ingredientes} onChange={this.manejarCambioName} />
                            <label htmlFor="ingredientes">Buscar por ingredientes separados por coma</label>
                        </div>

                        <div className="form-group mt-2 col-md-2">
                            <button className="btn btn-outline-secondary" type="submit" onClick={this.agregarReceta}>Buscar</button>
                        </div>
                    </form>
                </div >

                <br></br>

                <div className="row" id="filaRecetas">
                    { componentes.length > 0 ? componentes : 'No se encontraron recetas con estos ingredientes'}
                </div>
                
            </div>
        )
    }
}

export default ListaReceta;