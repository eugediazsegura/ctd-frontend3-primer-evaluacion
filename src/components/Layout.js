import React, { Component } from 'react';
import Opciones from './Opciones';
import Opcion from './Opcion';
import Historia from './Historia'
import data from './data.json';


class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 1,
            opcion: "",
            id: "1",
            historialSeleccion: []
        }

    }


    componentDidUpdate(prevProps) {
        if (this.state.opcion !== prevProps.opcion) {
            this.state.historialSeleccion.push(this.state.opcion)
        }
    }


    clickButton = (e) => {
        if (this.state.contador <= 4) {
            this.setState((estadoAnterior) => {
                const contador = estadoAnterior.contador + 1;
                return {
                    contador: contador,
                    opcion: e.target.id,
                    id: (contador + e.target.id).toString()
                }
            })
        } else {
            alert('Fin.');
        }

    }
    getElement() {

        return data.find(e => e.id === this.state.id)
    }

    render() {
        return (
            <div className="layout" key={this.state.contador}>
                <h1 className="historia"> {this.getElement().historia}</h1>
                <Opciones>
                    <Opcion click={this.clickButton} label="a" value={this.getElement().opciones.a} />
                    <Opcion click={this.clickButton} label="b" value={this.getElement().opciones.b} />
                </Opciones>
                <Historia ultimaSeleccion={(this.state.opcion).toUpperCase()}
                    historialSeleccion={this.state.historialSeleccion.map((item) => {
                        return <li>{(item).toUpperCase()}</li>

                    })}
                />

            </div>

        )
    }
}

export default Layout;


