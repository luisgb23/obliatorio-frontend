import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ussername: '', password: ''
        }
    }

    consultaUsuario = (evt) => {
        evt.preventDefault();

        fetch('https://recipe-api-ctc.azurewebsites.net/api/users/login', {
            method: 'POST',
            headers: {
                'Authorization': 'c4b7c282-508e-4aee-a0aa-4ca4891a5c74',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(res => res.json())
            .then(jsonRes => console.log(jsonRes))
    }

    manejarCambioUser = (evt) => {
        this.setState({ username: evt.target.value })
    }

    manejarCambioPass = (evt) => {
        this.setState({ password: evt.target.value })
    }

    render() {
        return (
            <div className="container">
                <p></p>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>
                    <label htmlFor="inputEmail" className="visually-hidden">Usuario</label>
                    <input type="text" name="username" id="username" className="form-control" placeholder="Usuario" required value={this.state.username} onChange={this.manejarCambioUser} />
                    <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Contraseña" required value={this.state.password} onChange={this.manejarCambioPass} />
                    <p className="mt-5 mb-3 text-muted"></p>
                    <button className="w-100 btn btn-lg btn-primary" type="submit"  onClick={this.consultaUsuario}>Ingresar</button>
                </form>

            </div>
        )
    }
}

export default Login