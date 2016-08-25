import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <div id="menuTeste" className="ui menu">
          <div className="item">TESTE 2</div>
          <a className="item" href="requerimento-digital-1.html">Pessoa</a>
          <a className="item" href="requerimento-digital-1.html">Emprendimento</a>
          <a className="browse item">
            Cadastros
            <i className="dropdown icon"></i>
          </a>
          <div className="right menu">
            <a href="" className="ui item">Usuário</a>
            <a className="ui item"><i className="icon sign out"></i> Sair</a>
          </div>
        </div>

        <div className="ui fluid popup bottom left transition hidden">
          <div className="ui four column relaxed equal height divided grid">
            <div className="column">
              <h4 className="ui header">Empreendimento</h4>
              <div className="ui link list">
                <a className="item">Cadastrar</a>
                <a className="item">Listar</a>
              </div>
            </div>
            <div className="column">
              <h4 className="ui header">Pessoa</h4>
              <div className="ui link list">
                <a className="item">Cadastrar</a>
                <a className="item">Listar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}