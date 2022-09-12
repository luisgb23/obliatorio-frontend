import React, { Component } from 'react'

class Usuario extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        let nombre = this.props.nombre
        return (
            <div>
                <h6>{nombre}</h6>
            </div>
        )
    }
}

export default Usuario