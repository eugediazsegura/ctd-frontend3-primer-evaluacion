import React, {Component} from 'react';

class Historia extends Component{

    render(){
        return(
            <div className="recordatorio">
                <h3>Selección anterior: {this.props.ultimaSeleccion}</h3>
                <h4>Historial de opciones elegidas:</h4>
                <ul>
                    {this.props.historialSeleccion}
                </ul>
            </div>
        )
    }
}

export default Historia;