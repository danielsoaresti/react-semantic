import React, { Component } from "react";

import { connect } from 'react-redux';
import * as actions from './../actions';

export class Login extends Component {  
  render() {
    
    this.props.add();

    return (
      <div>
        Login Form will go here

        <h1>{ this.props.item }</h1> 

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.first.item
  }
}

export default connect(mapStateToProps, actions)(Login);