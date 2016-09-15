import React, { Component } from "react";
import { Link } from 'react-router';

export default class Dashboard extends Component {  
  render() {
    return (
      <div>
        <ul>
          <li><Link to='create'>Create</Link></li>
          <li><Link to='login'>Login</Link></li>
        </ul>
      </div>
    );
  }
}