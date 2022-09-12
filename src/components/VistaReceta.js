import React, { Component } from 'react';
import Ingrediente from './Ingrediente';
import Paso from './Paso';
import ListaReview from './ListaReview';
import Imagen from './Imagen';
import { Link } from 'react-router-dom';
import AgregarReview from './AgregarReview';


class VistaReceta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            receta: {
                ingridients: [],
                steps: [],
                images: [],
                user: {}
            }
        }
    }

    componentDidMount() {
        this.traerInfoReceta();
    }

    traerInfoReceta = () => {
        fetch(`https://recipe-api-ctc.azurewebsites.net/api/recipes/${this.props.match.params.id}`, {
            method: "GET",
            headers: {
                'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74'
            }
        })
            .then(res => res.json())
            .then(json => this.setState({ receta: json.result }));
    }

    render() {
        console.log(this.state.receta)
        let { name, introduction, cooking_time, main_image, ingridients, difficulty, steps, images} = this.state.receta;

        let componentesIngrediente = ingridients.map((ingr, key) => <Ingrediente nombre={ingr} key={key} />)
        let componentesPaso = steps.map((paso, key) => <Paso paso={paso} key={key} />)
        let componenteImagen = images.map((img,key)=> <Imagen enlace={img} key={key}/>)

        return (
            <div className="container shadow-lg p-3 mb-5 bg-body">
                <br></br>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={main_image} alt="..." width="100%" className="img-thumbnail img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title">{name}</h3>
                            <span className="badge bg-warning">Dificultad: {difficulty} </span>&nbsp;&nbsp;
                            <i className="bi bi-clock-history" />

                                <small className="text-muted">  {cooking_time} min</small>
                            <hr></hr>
                            <p className="card-text">{introduction}</p>
                            <hr></hr>
                            
                        </div>
                    </div>
                    <div className="col-md-2 maintxt">
                        <h5 className="top-0 start-0 shadow-sm p-2">{this.state.receta.user.first_name}<br></br>{this.state.receta.user.last_name}</h5>
                        <img src={this.state.receta.user.profile_picture} alt="..." className="rounded-circle top-0 end-0 p-1 img-perfil-fondo" width="50%" />
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Pasos</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Ingredientes</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reviews</button>
                            </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <ol className="list-group list-group-flush">
                                    {componentesPaso}
                                </ol>    
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <ul className="listaIngredientes list-group list-group-flush">
                                    {componentesIngrediente}
                                </ul>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <br></br>
                                <ListaReview recid={this.props.match.params.id}></ListaReview>
                                <Link to={`/agregar-review`}>
                                    <button className="btn btn-secondary btn-sm">Dejar review</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id="carouselExampleFade" className="carousel slide carousel-fade col-md-4" data-bs-ride="carousel">
                        <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={main_image} className="d-block w-100" alt="..." width="70%" />
                                </div>
                            {componenteImagen}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        );
    }


}

export default VistaReceta;