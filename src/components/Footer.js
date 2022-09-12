import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 start-0 top-0">
                            <h1 className="display-6">App Recetas - </h1>
                        </div>
                        <div className="col-md-5 top-0 end-0">
                            <small>Desarrollado por <strong>Luis Geymonat & Daniel Alves</strong></small>
                        </div>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;
