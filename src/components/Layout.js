import React, {Component} from 'react';
import Opciones from './Opciones';
import Opcion from './Opcion';
import data from './data.json';


class Layout extends Component {
    constructor(props){
        super(props);
        this.state = { 
            contador: 0,
            estadoAnterior: ""
        }

    }

    clickButton =(e)=>{
        //console.log(e.target.id);
        if(e.target.id === "A" && this.state.contador === 0){
            this.setState({
                contador: this.state.contador + 1,
                estadoAnterior: e.target.id
            })
        }else if(e.target.id === "B" && this.state.contador === 0 || this.state.estadoAnterior === e.target.id && this.state.contador  != 0){
            this.setState({
                contador: this.state.contador + 2,
                estadoAnterior: e.target.id
            })
        }else if(this.state.estadoAnterior != e.target.id && this.state.contador  != 0){
            this.setState({
                contador: this.state.contador + 3,
                estadoAnterior: e.target.id
            })
        }

        //else if(this.state.estadoAnterior != e.target.id && this.state.contador > 0 )
        // data.forEach(e => {
        //     if(e.target.id === "A"){
        //         this.setState({
        //           contador: e + 1  
        //         })
        //     }else if(e.target.id ==="B"){

        //     }

        // });
    }

    render(){
        return(
            <div className="layout">
                <div style={{color: "white"}}>{this.state.contador}</div>
                <div style={{color: "white"}}>{this.state.estadoAnterior}</div>
                <h1 className= "historia"> {data[this.state.contador].historia}</h1>
                <Opciones>
                    <Opcion click={this.clickButton} label="A" value={data[this.state.contador].opciones.a}/>
                    <Opcion click={this.clickButton} label="B" value={data[this.state.contador].opciones.b}/>
                </Opciones>
            
            </div>
        )
    }
}

export default Layout;


