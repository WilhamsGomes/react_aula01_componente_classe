import React, { Component } from "react";

export default class Mensagem extends Component {

    state = {
        title: "React"
    };

    render(){
        return(
            <div className="App">
                <h1>Olá mundo {this.state.title}</h1>
                <h2>Esse é meu componente de classe :]</h2>
            </div>
        )
    }
}