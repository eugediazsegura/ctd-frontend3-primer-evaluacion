import React, { Component } from 'react';

class Opcion extends Component {
    render() {
        return (
            <div className="opcion">
                <button id={this.props.label} className="botones" onClick={this.props.click}>{this.props.label}</button>
                <h2>
                    {this.props.value}
                </h2>
            </div>
        )
    }
}

export default Opcion;