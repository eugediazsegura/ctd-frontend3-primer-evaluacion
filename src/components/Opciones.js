import React, { Component } from 'react';
// import Opcion from './Opcion';

class Opciones extends Component {
    render() {
        return (
            <div className="opciones">
              {this.props.children}
            </div>
        )

    }
}

export default Opciones;