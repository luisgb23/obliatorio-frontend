import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    
    }
   
    render() {
        let { nombre, apellido, estrellas, imagen, comentario, id, creacion } = this.props;
        return (
            <div className="container">
                <div className="mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                                <div className="toast-header">
                                    <img src={imagen} className="rounded-circle me-2" alt="..." width="20%" />
                                    <strong className="me-auto">{nombre} {apellido}</strong>
                                    <small>
                                        <Box component="fieldset" mb={3} borderColor="transparent">
                                            <Rating name="read-only" value={estrellas} readOnly />
                                        </Box>
                                    </small>
                                </div>
                                <div className="toast-body">
                                    {comentario}
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review